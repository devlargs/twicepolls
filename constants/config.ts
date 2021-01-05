import isLocalhost from "utils/isLocalhost";
import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const local = isLocalhost();

const bg = () => {
  const items = [
    "https://image.kpopmap.com/2019/04/ESTEE-LAUDER-TWICE-QUIZ-COVER.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-twice-1-1579279628.jpg?crop=1.00xw:0.703xh;0,0.204xh&resize=1200:*",
    "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/twice-5_0.jpg?itok=AXQ23M9z&mtime=1506487589",
    "https://www.allkpop.com/upload/2020/06/content/052155/1591408535-20200605-twice.jpg",
    "https://lh3.googleusercontent.com/GcKoh37h0qpSJM2IIMXLfNwUIjP5fMdG8R94VVmsyNLKj16JCh2f9hQ4wqr6RhXUOqsTcPSzYoA-XjFPoVO1jJwnk9O7570e2g=w1200-h630-rj-pp-e365",
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
