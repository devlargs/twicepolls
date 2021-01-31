import Leaderboard from "components/Leaderboard";
import PollComments from "components/PollComments";
import SEO from "components/SEO";
import VoteModal from "components/VoteModal";
import config from "constants/config";
import { NextPageContext } from "next";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const ListById = ({ title }) => {
  const [dataset] = useState([13, 14, 12.5, 11, 13, 11, 12, 12, 12]);
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
                  {title}?
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
              <div className="border-gray-200 px-4 py-5 sm:px-6">
                <div>
                  {/* <h1 className="text-2xl">Leaderboard</h1> */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <Bar
                        data={data}
                        width={400}
                        height={200}
                        // options={{
                        //   maintainAspectRatio: false,
                        // }}
                      />
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
      {isOpen && <VoteModal title={title} onClose={() => setIsOpen(false)} />}
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
