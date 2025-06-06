
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateStory(title, genre, language) {
  const prompt = `Write a unique ${genre} story titled "${title}" in ${language}. Make sure it is not similar to any known film or book.`;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 600,
  });
  return response.data.choices[0].message.content.trim();
}

module.exports = { generateStory };
