import "../styles/globals.css";
import { signIn, signOut, useSession, signout } from "next-auth/client";
import { sign } from "crypto";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={async () => {
              const a = await signIn();
              console.log(a);
            }}
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          <>
            {loading ? (
              <>Loading</>
            ) : (
              <>
                Signed in as {session.user.email} <br />
              </>
            )}
          </>
          <button
            onClick={async () => {
              signOut();
            }}
          >
            Sign out
          </button>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
