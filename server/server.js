require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { processPrompt } = require('./engine/scriptingEngine');
const { teslaEducationPersona } = require('./persona/TeslaEducationPersona');

// Initialize Express app - Enviroment variables for client origin and port

const app = express();
const PORT = 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

// Hugging Face API configuration

// We receive messages from the frontend to this endpoint, which securely calls the Hugging Face Inference API. 
// This prevents exposing the API key and allows prompt control.
const HF_API_URL =
  "https://api-inference.huggingface.co/models/google/flan-t5-small";

// Basic health check endpoint / Returns server status / Testing that our frontend can connect to backend 
// Using a get request to not interfere with our main chat endpoint (POST)
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is healthy' });
})


// Main chat endpoint / Handles user prompts and returns bot responses using our scripting engine, verification, persona and (calls HuggingFace)
app.post('/api/chat', async (req, res) => {
    try {
        const { prompt, conversationHistory } = req.body;
        
        // Basic error handling, prompt isnt string / whitespaces/ no prompt at all
        if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) { 
            return res.status(400).json({ error: 'Valid prompt is required' });
        }

        let response = await processPrompt(prompt, conversationHistory, teslaEducationPersona);

        // HF verifier temporarily disabled to fix server hang
        // TODO: Re-enable with non-blocking async call after confirming base server works

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
