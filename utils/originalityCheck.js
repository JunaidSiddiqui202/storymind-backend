function checkOriginality(title) {
  // Basic keyword check – you can later upgrade with plagiarism API
  const knownTitles = ['Titanic', 'Avengers', 'Harry Potter'];

  if (knownTitles.includes(title.trim())) {
    return '⚠️ This title may resemble existing work';
  }

  return null;
}

module.exports = { checkOriginality };
