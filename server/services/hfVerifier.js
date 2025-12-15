const fetch = require('node-fetch');

const HF_API_URL = process.env.HF_API_URL || 'https://api-inference.huggingface.co/models/google/flan-t5-small';
const HF_API_KEY = process.env.HF_API_KEY;

function safeParseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    // attempt to extract a JSON substring
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      try {
        return JSON.parse(text.slice(start, end + 1));
      } catch (e2) {
        return null;
      }
    }
    return null;
  }
}

async function verifyAndFollowUp(candidateReply, conversationHistory = []) {
  if (!HF_API_KEY) return { corrected: candidateReply, follow_up: '' };

  const historyText = (conversationHistory || []).map(m => `${m.role}: ${m.content}`).join('\n');
  // Stronger prompt: always return JSON with corrected and follow_up fields.
  // Always provide a short follow-up question (if none is needed, ask a simple guiding question).
  const prompt = `You are an expert verifier and educational assistant.\n\nConversation history:\n${historyText}\n\nCandidate reply:\n${candidateReply}\n\nTask: 1) If the reply contains factual errors or is misleading, produce a corrected, short factual reply. 2) Always produce one short, relevant follow-up question to guide the learner (if no follow-up is needed, produce a short guiding question such as \"Would you like an example?\").\n\nReturn JSON only, with exactly two keys: {\"corrected\": \"...\", \"follow_up\": \"...\"}. The "corrected" value should be the final reply to the user. Do not include any explanation or extra text outside the JSON.`;

  try {
    const resp = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 200 } }),
    });

    console.log('HF verifier calling:', HF_API_URL);
    console.log('HF API Key present:', !!HF_API_KEY);
    const text = await resp.text();
    console.log('HF response status:', resp.status, 'response length:', text.length);
    const parsed = safeParseJSON(text);
    console.log('Parsed JSON:', parsed);
    if (parsed && (parsed.corrected !== undefined || parsed.follow_up !== undefined)) {
      return {
        corrected: parsed.corrected ? String(parsed.corrected).trim() : candidateReply,
        follow_up: parsed.follow_up ? String(parsed.follow_up).trim() : 'Would you like me to elaborate on this concept?',
      };
    }
    // If parsing JSON failed, attempt to recover: try to extract JSON again, otherwise
    // fallback: return original reply but try to treat any non-empty model text as a corrected reply and
    // ask the model's output to serve as the corrected content (no follow-up).
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      // Try one more parse attempt for lax outputs
      const parsed2 = safeParseJSON(trimmed);
      if (parsed2 && (parsed2.corrected !== undefined || parsed2.follow_up !== undefined)) {
        return {
          corrected: parsed2.corrected ? String(parsed2.corrected).trim() : candidateReply,
          follow_up: parsed2.follow_up ? String(parsed2.follow_up).trim() : 'Does this answer your question?',
        };
      }
      // Treat raw text as corrected reply fallback
      console.log('HF fallback: using raw text as corrected reply');
      return { corrected: trimmed, follow_up: 'Would you like to know more?' };
    }
    console.log('HF: empty response, returning original reply');
    return { corrected: candidateReply, follow_up: '' };
  } catch (err) {
    console.error('HF verifier error:', err);
    return { corrected: candidateReply, follow_up: '' };
  }
}

module.exports = { verifyAndFollowUp };
