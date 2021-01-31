import initFirebase from "./initFirebase";
import firebase from "firebase/app";

initFirebase();

const getFirestoreCollection = (name: string) =>
  firebase.firestore().collection(name);

export const batchQuery = (): any => {
  return firebase.firestore().batch();
};

export default getFirestoreCollection;
