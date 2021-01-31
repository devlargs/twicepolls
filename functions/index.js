const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.newUserSignup = functions.auth.user().onCreate((user) => {
  return admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    displayName: user.displayName,
    disabled: user.disabled,
    photoURL: user.photoURL,
  });
});

// exports.userDeleted = functions.auth.user().onDelete((user) => {
//   const doc = admin.firestore().collection("users").doc(user.uid);
//   return doc.delete();
// });
