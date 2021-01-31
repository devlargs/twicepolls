import React, { memo } from "react";
import toOrdinal from "utils/toOrdinal";

const Leaderboard = memo(({ answers }: any) => {
  const votes = [...answers].sort((a, b) =>
    a.voteCount < b.voteCount ? 1 : -1
  );
  const sliced = [...votes].splice(0, 4);

  return (
    <div className="max-w-full w-full">
      <div className="flow-root mt-6">
        <ul className="-my-5 divide-y divide-gray-200">
          {sliced.map((q, i) => (
            <li className="py-4" key={i}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={`/images/members/${q.answer.toLowerCase()}.jpg`}
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {q.answer} ({q.voteCount}{" "}
                    {q.voteCount === 1 ? "Vote" : "Votes"})
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {toOrdinal(i + 1)}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Details
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  );
});

export default Leaderboard;
