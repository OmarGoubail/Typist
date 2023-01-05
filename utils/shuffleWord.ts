import easy_en from "./eng_1.json";
import en from "./eng_2.json";

export const shuffleWord = (maxWord: number, language: string) => {
  let shuffledWord;
  switch (language) {
    case "en":
      shuffledWord = en.slice(0);
      break;
    default:
      shuffledWord = easy_en.slice(0);
      break;
  }
  for (let i = shuffledWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledWord[i];
    shuffledWord[i] = shuffledWord[j];
    shuffledWord[j] = temp;
  }
  return shuffledWord.slice(0, maxWord);
};
