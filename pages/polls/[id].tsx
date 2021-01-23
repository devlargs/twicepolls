import SEO from "components/SEO";
import VoteModal from "components/VoteModal";
import config from "constants/config";
import { NextPageContext } from "next";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const ListById = ({ title }) => {
  const [dataset] = useState([13, 14, 11, 11, 13, 11, 12, 12, 12]);
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    labels: [
      "Jihyo",
      "Mina",
      "Nayeon",
      "Jeongyeon",
      "Chaeyoung",
      "Tzuyu",
      "Dahyun",
      "Momo",
      "Sana",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: dataset,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <SEO title={`${title} | ${config.appTitle}`} />

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
                  {title.toUpperCase()}
                </h2>
                <p className="mt-1 max-w-2xl text-md text-gray-500">
                  Created by @devlargs
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
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div>
                  <h1>Based on Votes: Mina</h1>
                  <Bar
                    data={data}
                    width={400}
                    height={200}
                    // options={{
                    //   maintainAspectRatio: false,
                    // }}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-5" />

          <section aria-labelledby="notes-title">
            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Comments
                  </h2>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul className="space-y-8">
                    <li>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium text-gray-900">
                              Harry Angelo Soer
                            </a>
                          </div>
                          <div className="mt-1 text-sm text-gray-700">
                            <p>Nayeon is so gorgeous</p>
                          </div>
                          <div className="mt-2 text-sm space-x-2">
                            <span className="text-gray-500 font-medium">
                              4d ago
                            </span>
                            <span className="text-gray-500 font-medium">
                              &middot;
                            </span>
                            <button
                              type="button"
                              className="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium text-gray-900">
                              Harry Roque
                            </a>
                          </div>
                          <div className="mt-1 text-sm text-gray-700">
                            <p>Im not impressed</p>
                          </div>
                          <div className="mt-2 text-sm space-x-2">
                            <span className="text-gray-500 font-medium">
                              4d ago
                            </span>
                            <span className="text-gray-500 font-medium">
                              &middot;
                            </span>
                            <button
                              type="button"
                              className="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium text-gray-900">
                              Dries Vincent
                            </a>
                          </div>
                          <div className="mt-1 text-sm text-gray-700">
                            <p>
                              Expedita consequatur sit ea voluptas quo ipsam
                              recusandae. Ab sint et voluptatem repudiandae
                              voluptatem et eveniet. Nihil quas consequatur
                              autem. Perferendis rerum et.
                            </p>
                          </div>
                          <div className="mt-2 text-sm space-x-2">
                            <span className="text-gray-500 font-medium">
                              4d ago
                            </span>
                            <span className="text-gray-500 font-medium">
                              &middot;
                            </span>
                            <button
                              type="button"
                              className="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label htmlFor="comment" className="sr-only">
                          About
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows={3}
                          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Add a note"
                        ></textarea>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {isOpen && <VoteModal />}
      </div>
    </div>
  );
};

ListById.getInitialProps = (ctx: NextPageContext) => {
  const temp = `${ctx.query.id}`.split("-");

  return {
    title: temp.join(" "),
    slug: ctx.query.id,
  };
};

export default ListById;
