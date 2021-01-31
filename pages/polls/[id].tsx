import MembersBarChart from "components/Charts/MembersBarChart";
import Leaderboard from "components/Leaderboard";
import PollComments from "components/PollComments";
import SEO from "components/SEO";
import VoteModal from "components/VoteModal";
import config from "constants/config";
import { NextPageContext } from "next";
import { useState } from "react";

import getFirestoreCollection from "utils/auth/getFirestoreCollection";

const ListById = ({ details, slug }) => {
  console.log(details, slug);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SEO title={`${details.question} | ${config.appTitle}`} />

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
                  Created by {details.createdBy}
                </p>
                <br />
                <button
                  type="button"
                  className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                  onClick={() => setIsOpen((e: boolean) => !e)}
                >
                  Vote Now
                </button>
              </div>
              <div className="border-gray-200 px-4 py-5 sm:px-6">
                <div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      {details.type === "members" ? (
                        <MembersBarChart answers={details.answers} />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <Leaderboard />
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
      {isOpen && (
        <VoteModal title={details.question} onClose={() => setIsOpen(false)} />
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

  return {
    slug: ctx.query.id,
    details: data.length ? data[0] : {},
  };
};

export default ListById;
