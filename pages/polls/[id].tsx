import MembersBarChart from "components/Charts/MembersBarChart";
import Leaderboard from "components/Leaderboard";
import PollComments from "components/PollComments";
import SEO from "components/SEO";
import { NextPageContext } from "next";
import { useEffect, useMemo, useState } from "react";
import getFirestoreCollection from "utils/auth/getFirestoreCollection";
import { useUser } from "utils/auth/useUser";
import MemberVoteModal from "components/MemberVoteModal";
import ThreeLineDotted from "components/Loaders/ThreeLineDotted";

const ListById = ({ details: serverDetails, createdBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(serverDetails);
  const [voted, setVoted] = useState(false);
  const [checkIfVoted, setCheckIfVoted] = useState(false);
  const { user } = useUser();

  const propDetail = useMemo(() => details.answers, [details]);

  useEffect(() => {
    const unsubscribe = getFirestoreCollection("polls")
      .where("slug", "==", details.slug)
      .onSnapshot((snapshot) => {
        if (snapshot.docChanges) {
          snapshot.docChanges().forEach(function (change) {
            if (change.type === "modified") {
              setDetails((prev) => ({
                ...prev,
                answers: change.doc.data().answers,
              }));
            }
          });
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    (async () => {
      // TODO - Get all user vote details, run this code in app.tsx, use zustand instead
      if (user?.id) {
        setCheckIfVoted(true);
        const answerRef = getFirestoreCollection("answers");
        const querySnapshot = await answerRef
          .where("userId", "==", user.id)
          .where("pollId", "==", details.id)
          .get();
        if (querySnapshot.size) {
          setVoted(true);
        }

        setCheckIfVoted(false);
      }
    })();
  }, [user && user.id]);

  return (
    <div>
      <SEO title={`${details.question}`} imgCoverUrl={details.imageCoverUrl} />

      <div className="relative pt-8 pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <section aria-labelledby="applicant-information-title">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  className="text-3xl leading-6 font-medium text-gray-900"
                >
                  {details.question}
                </h2>
                <p className="mt-1 max-w-2xl text-md text-gray-500">
                  Created by {createdBy}
                </p>
                <br />

                {user?.id && (
                  <>
                    {checkIfVoted ? (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none"
                      >
                        &nbsp; &nbsp;
                        <ThreeLineDotted />
                      </button>
                    ) : (
                      <>
                        {voted ? (
                          <button
                            type="button"
                            disabled
                            className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none"
                          >
                            You already voted
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                            onClick={() => {
                              setIsOpen((e: boolean) => !e);
                            }}
                          >
                            Vote Now
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="border-gray-200 px-4 py-5 sm:px-6">
                <div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 hidden lg:flex">
                      {details.type === "members" && (
                        <MembersBarChart answers={propDetail} />
                      )}
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
                      {details.type === "members" && (
                        <Leaderboard
                          answers={[...details.answers].sort((a, b) =>
                            a.voteCount < b.voteCount ? 1 : -1
                          )}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-5" />

          <section aria-labelledby="notes-title">
            <PollComments />
          </section>
        </div>
      </div>
      {isOpen && details.type === "members" && (
        <MemberVoteModal
          setVoted={setVoted}
          title={details.question}
          answers={details.answers}
          onClose={() => setIsOpen(false)}
          pollId={details.id}
        />
      )}
    </div>
  );
};

ListById.getInitialProps = async (ctx: NextPageContext) => {
  const data = [];
  const pollRef = getFirestoreCollection("polls");
  const querySnapshot = await pollRef.where("slug", "==", ctx.query.id).get();

  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
      dateCreated: doc.data().dateCreated,
      dateUpdated: doc.data().dateUpdated,
    });
  });

  const userRef = await getFirestoreCollection("users")
    .doc(data[0].createdBy)
    .get();

  // TODO - Check user token on server
  // if (req && req.headers) {
  //   const cookies = req.headers.cookie;

  //   if (typeof cookies === "string") {
  //     const cookiesJSON = serverCookie.parse(cookies);
  //     if (cookiesJSON?.auth) {
  //       try {
  //         userId = JSON.parse(cookiesJSON?.auth)?.id;
  //       } catch (ex) {
  //         console.error("ERROR FROM LIST BY ID (getInitialProps)", ex);
  //       }
  //     }
  //   }
  // }

  return {
    slug: ctx.query.id,
    details: data.length ? data[0] : {},
    createdBy: userRef.data()?.displayName || userRef.data()?.email,
  };
};

export default ListById;
