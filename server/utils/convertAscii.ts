export default function (str) {
  // Replace non-ASCII characters with their closest ASCII equivalents or remove them
  return str.replace(/[^\x00-\x7F]/g, function (char) {
    const asciiMap = {
      'á': 'a\'', 'é': 'e\'', 'í': 'i\'', 'ó': 'o\'', 'ú': 'u\'', 'ñ': 'n',
      'Á': 'A\'', 'É': 'E\'', 'Í': 'I\'', 'Ó': 'O\'', 'Ú': 'U\'', 'Ñ': 'N',
      'à': 'a\'', 'è': 'e\'', 'ì': 'i\'', 'ò': 'o\'', 'ù': 'u\'',
      'À': 'A\'', 'È': 'E\'', 'Ì': 'I\'', 'Ò': 'O\'', 'Ù': 'U\''
      // Add more mappings as needed
    };
    return asciiMap[char] || '';
  });
}