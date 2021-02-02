import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "next/router";
import initFirebase from "../utils/auth/initFirebase";
import { setUserCookie } from "../utils/auth/userCookies";
import { mapUserData } from "../utils/auth/mapUserData";

// Init the Firebase app.
initFirebase();

const firebaseAuthConfig = (signInSuccessUrl?: string) => ({
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: signInSuccessUrl || "/polls",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
      return false;
    },
  },
});

const FirebaseAuth = () => {
  const { asPath } = useRouter();

  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig(asPath) as any}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default FirebaseAuth;
