import initFirebase from "./initFirebase";
import firebase from "firebase/app";

initFirebase();

if (process.env.NODE_ENV === "development") {
  firebase.firestore().settings({
    host: "localhost:8080",
    ssl: false,
  });
}

const getFirestoreCollection = (name: string) =>
  firebase.firestore().collection(name);

export default getFirestoreCollection;
