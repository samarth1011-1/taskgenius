const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv')

dotenv.config()

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function predictTasks(tasks) {
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: tasks.join(', ') }],
            }
        ],
        generationConfig: {
            maxOutputTokens: 200,
            temperature: 0,
            topK: 18,
            topP: 0.1
        },
    });

    const msg = process.env.GEMINI_PROMPT;

    try {
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = await response.text();
        const history = await chat.getHistory();
        const msgContent = { role: "user", parts: [{ text: msg }] };
        const contents = [...history, msgContent];
        const { totalTokens } = await model.countTokens({ contents });
        console.log(totalTokens);

        return text;
    } catch (error) {
        console.error('Error predicting tasks:', error);
        throw new Error('Failed to predict tasks');
    }
}

module.exports = predictTasks;
