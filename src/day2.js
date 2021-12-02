const letter = "bici coche balón _playstation bici coche peluche";

export default function listGifts(letter) {
  return letter
    .split(" ")
    .filter((word) => word !== "" && word.startsWith("_") !== true)
    .reduce((acc, word) => {
      if (word in acc) {
        acc[word]++;
      } else {
        acc[word] = 1;
      }
      return acc;
    }, {});
}

const numberOfGifts = listGifts(letter);
