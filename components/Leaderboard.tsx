import React, { memo } from "react";

const Leaderboard = memo(() => {
  return (
    <div className="max-w-full w-full">
      <div className="flow-root mt-6">
        <ul className="-my-5 divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pinimg.com/originals/5b/c9/d6/5bc9d67bb4929c1126c88b1424b55855.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Mina Sharon Myoi
                </p>
                <p className="text-sm text-gray-500 truncate">1st</p>
              </div>
              <div>
                {/* <a
                  href="#"
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a> */}
              </div>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Park_Jihyo_at_the_Golden_Disc_Awards_2019.png"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Park Ji-hyo
                </p>
                <p className="text-sm text-gray-500 truncate">2nd</p>
              </div>
              <div>
                {/* <a
                  href="#"
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a> */}
              </div>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/52/Chaeyoung_at_Gaon_Awards_red_carpet_on_January_23%2C_2019.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Son Chae-young
                </p>
                <p className="text-sm text-gray-500 truncate">3rd</p>
              </div>
              <div>
                {/* <a
                  href="#"
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a> */}
              </div>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pinimg.com/736x/a6/48/92/a6489296dcc706e41f5ef10b6567a2df.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Im Na-yeon
                </p>
                <p className="text-sm text-gray-500 truncate">4th</p>
              </div>
              <div>
                {/* <a
                  href="#"
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a> */}
              </div>
            </div>
          </li>
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
