import isLocalhost from "utils/isLocalhost";
import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const local = isLocalhost();

const bg = () => {
  const items = [
    "https://image.kpopmap.com/2019/04/ESTEE-LAUDER-TWICE-QUIZ-COVER.jpg",
  ];
  return items[Math.floor(Math.random() * items.length)];
};

export default {
  appTitle: local
    ? new LoremIpsum().generateWords(1).toUpperCase()
    : "Twice Polls",
  home: {
    img: local
      ? "https://via.placeholder.com/960x442"
      : "https://0.soompi.io/wp-content/uploads/2017/04/28061756/TWICE3.jpg?s=900x600&e=t",
    subtitle: local ? loremIpsum() : "Unofficial Fan Voting Site for Onces",
  },
  randomBackgroundImage: bg(),
};
