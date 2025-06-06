const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateStory(title, genre, language) {
  const prompt = `Write a ${genre} story in ${language} based on the title: "${title}"`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a professional story writer' },
      { role: 'user', content: prompt },
    ],
    max_tokens: 1000,
    temperature: 0.8,
  });

  return response.choices[0].message.content.trim();
}

module.exports = { generateStory };
