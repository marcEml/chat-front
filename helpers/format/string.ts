export function capitalizeFirstLetter(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeFirstWordLetter(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeLetters(word: string): string {
  if (!word) return "";
  return word.toUpperCase();
}

export function formatName(fullName: string): string {
  // Normalize spaces and split the string by space
  const words = fullName.trim().replace(/\s+/g, " ").split(" ");

  const formattedName = words.map((word, index) => {
    if (index === 0) {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    } else if (index === words.length - 1 && fullName.replace(/\s+/g, " ").length > 16) {
      return word.charAt(0).toUpperCase() + ".";
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  const result = formattedName.join(" ");

  // Check length again after formatting and potentially abbreviate the last word
  if (result.length > 16) {
    const lastWord = words[words.length - 1];
    formattedName[formattedName.length - 1] = lastWord.charAt(0).toUpperCase() + ".";
    return formattedName.join(" ");
  }

  return result;
}

export function getInitials(name: string): string {
  // Normalize spaces and split the string by space
  const words = name.trim().replace(/\s+/g, " ").split(" ");

  // Get the first letter of the first two words, and convert them to uppercase
  const initials = words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return initials;
}
