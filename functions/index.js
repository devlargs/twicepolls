const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.newUserSignup = functions.auth.user().onCreate((user) => {
  console.log(user);
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      ...user,
    });
});

// exports.userDeleted = functions.auth.user().onDelete((user) => {
//   const doc = admin.firestore().collection("users").doc(user.uid);
//   return doc.delete();
// });
