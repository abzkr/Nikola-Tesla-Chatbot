
// We opted for our main response picker to be deterministic to ensure that the bot provides consistent and reliable answers
// This allows for more accurate educational responses
function pickWeightedResponse(responses) {
    // Deterministic selection: choose the item with the highest weight
    if (!Array.isArray(responses)) return responses;

    const items = responses.map((r) => {
        if (typeof r === 'string') return { text: r, weight: 1 };
        const text = r && (r.text || r);
        const weight = (r && typeof r.probability === 'number' && r.probability > 0) ? r.probability : 1;
        return { text, weight };
    });

    // Select the item with maximum weight (first encountered on ties)
    let best = items[0];
    for (let i = 1; i < items.length; i++) {
        if (items[i].weight > best.weight) best = items[i];
    }
    return best.text;
}

// Probabilistic weighted selector - Based for the sections in our persona where we want randomness 
// (e.g greetings - to make the bot feel more lively, a response that doesnt need to be the same every time)
function pickWeightedRandom(responses) {
    if (!Array.isArray(responses)) return responses;

    const items = responses.map((r) => {
        if (typeof r === 'string') return { text: r, weight: 1 };
        const text = r && (r.text || r);
        const weight = (r && typeof r.probability === 'number' && r.probability > 0) ? r.probability : 1;
        return { text, weight };
    });

    const total = items.reduce((s, it) => s + it.weight, 0);
    if (total <= 0) {
        const idx = Math.floor(Math.random() * items.length);
        return items[idx].text;
    }

    let r = Math.random() * total;
    for (const it of items) {
        r -= it.weight;
        if (r <= 0) return it.text;
    }
    return items[items.length - 1].text;
}
async function processPrompt(prompt, conversationHistory = [], persona) {
    const lowerPrompt = prompt.toLowerCase();

    // Find the best matching topic
    let bestMatch = null;
    let maxMatches = 0;

    for (const [topic, keywords] of Object.entries(persona.topics)) {
        // Count how many keywords match
        const matchCount = keywords.filter(word => lowerPrompt.includes(word)).length;

        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = topic;
        }
    }

    // If we found a good match, use it
    if (bestMatch && maxMatches > 0) {
        const responses = persona.responses[bestMatch] || persona.responses.default;
        // Use probabilistic selection for greetings, deterministic elsewhere
        const chosenResponse = (bestMatch === 'greetings') ? pickWeightedRandom(responses) : pickWeightedResponse(responses);
        return {
            reply: chosenResponse,
            updatedConversationHistory: [
                ...conversationHistory,
                { role: 'user', content: prompt },
                { role: 'assistant', content: chosenResponse },
            ],
        };
    }

    // No match found, use default
    const defaultResponses = persona.responses.default;
    const chosenResponse = pickWeightedResponse(defaultResponses);
    return {
        reply: chosenResponse,
        updatedConversationHistory: [
            ...conversationHistory,
            { role: 'user', content: prompt },
            { role: 'assistant', content: chosenResponse },
        ],
    };
}

module.exports = { processPrompt };