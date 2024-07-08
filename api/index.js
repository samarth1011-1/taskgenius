const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const predictTasks = require('./gemini');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/ai', async (req, res) => {
  try {
    console.log(process.env.PROMPT);
    const { tasks } = req.body;
    const taskTexts = tasks.map(task => task.text);
    console.log('Received tasks:', taskTexts);
    const predictedTasks = await predictTasks(taskTexts);
    res.json({ predictedTasks });
  } catch (error) {
    console.error('Error predicting tasks:', error);
    res.status(500).json({ error: 'Failed to predict tasks', details: error.message });
  }
});

module.exports = app;
