const express = require('express');
const cors = require('cors');
const storyRoutes = require('./routes/story');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use('/generate-story', storyRoutes);

app.get('/', (req, res) => {
  res.send('🧠 StoryMind AI Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
