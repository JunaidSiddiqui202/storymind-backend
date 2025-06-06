const express = require('express');
const router = express.Router();
const { generateStory } = require('../utils/openai');
const { checkOriginality } = require('../utils/originalityCheck');

router.post('/', async (req, res) => {
  const { title, genre, language } = req.body;

  if (!title || !genre || !language) {
    return res.status(400).json({ error: 'Missing title, genre, or language' });
  }

  try {
    const story = await generateStory(title, genre, language);
    const warning = checkOriginality(title);
    res.json({ story, warning });
  } catch (error) {
    console.error('🔥 Story generation failed:', error.response?.data || error.message);
    res.status(500).json({ error: 'Story generation failed' });
  }
});

module.exports = router;
