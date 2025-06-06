import express from 'express';
import generateStoryRoute from './routes/generateStory.js';

const app = express();

app.use(express.json());
app.use('/generate-story', generateStoryRoute);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
