import isLocalhost from "utils/isLocalhost";
import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const local = isLocalhost();

console.log(local);

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
};
