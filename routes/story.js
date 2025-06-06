import express from 'express';
import rateLimit from 'express-rate-limit';
import { generateStory } from '../utils/openai.js';
import { checkOriginality } from '../utils/originalityCheck.js';

const router = express.Router();

// Optional: basic rate limiter to protect abuse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many requests. Please try again later.'
});

router.use(limiter);

router.post('/', async (req, res) => {
  const { title, genre, language, skipCheck } = req.body;

  // Validate input
  if (!title?.trim() || !genre?.trim() || !language?.trim()) {
    return res.status(400).json({ error: 'Title, genre, and language are required.' });
  }

  try {
    const story = await generateStory(title, genre, language);
    const warning = skipCheck ? null : checkOriginality(title);
    
    console.log(`✅ Story generated for: ${title} (${language})`);
    res.json({ story, warning });
  } catch (error) {
    console.error('🔥 Story generation error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Story generation failed' });
  }
});

export default router;
