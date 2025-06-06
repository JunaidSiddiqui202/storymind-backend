
function checkOriginality(title) {
  const knownTitles = ["Sholay", "Namak Halaal", "Sarkar", "Baahubali", "Pushpa"];
  return knownTitles.includes(title.trim())
    ? "⚠️ This title may resemble a well-known film. Consider modifying it."
    : "";
}

module.exports = { checkOriginality };
