import React, { memo, useState } from "react";
import getFirestoreCollection, {
  batchQuery,
} from "utils/auth/getFirestoreCollection";
import { useUser } from "utils/auth/useUser";
import ThreeLineDotted from "./Loaders/ThreeLineDotted";

type Props = {
  onClose: () => void;
  title: string;
  pollId: string;
  answers: Array<any>;
};

const MemberVoteModal = memo(({ onClose, title, pollId, answers }: Props) => {
  const [voteLoading, setVoteLoading] = useState(false);
  const { user } = useUser();
  const onAnswer = async (id: string) => {
    setVoteLoading(true);

    const batch = batchQuery();
    const answerRef = getFirestoreCollection("answers").doc();
    const pollsRef = getFirestoreCollection("polls").doc(pollId);

    const temp = [...answers].map((jac) => {
      if (jac.memberId === id) {
        return {
          ...jac,
          voteCount: jac.voteCount + 1,
        };
      } else {
        return jac;
      }
    });

    batch.set(answerRef, {
      pollId,
      answerId: id,
      userId: user.id,
    });

    batch.set(
      pollsRef,
      {
        answers: temp,
      },
      { merge: true }
    );

    batch.commit().then(() => setVoteLoading(false));
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          ></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-3/4 w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-gray-900 text-2xl">
                    {title}
                  </span>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {answers.map(({ answer, memberId }, i) => (
                  <li
                    key={i}
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                  >
                    <div className="flex-1 flex flex-col p-8">
                      <img
                        style={{ maxHeight: "250px" }}
                        className=" flex-shrink-0 mx-auto bg-black"
                        src={`/images/members/${answer.toLowerCase()}.jpg`}
                        alt=""
                      />
                      <h3 className="mt-6 text-gray-900 text-sm font-medium"></h3>
                      <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dd>
                          {!voteLoading ? (
                            <button
                              disabled
                              type="button"
                              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none "
                            >
                              <ThreeLineDotted />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => onAnswer(memberId)}
                              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none "
                            >
                              Vote for {answer}
                            </button>
                          )}
                        </dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 text-right">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-white  focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MemberVoteModal;
