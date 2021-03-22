import SEO from "components/SEO";
import config from "constants/config";
import dayjs from "dayjs";
import Link from "next/link";
import { PollsProps } from "types";
import getFirestoreCollection from "utils/auth/getFirestoreCollection";

const Lists = (props: any) => {
  const { data } = props;

  return (
    <div className="">
      <SEO title={`Polls Lists | ${config.appTitle}`} />

      <div className="relative pt-8 pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Lists of Polls
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-3">
              - for onces -
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {data.map((q: PollsProps) => {
              return (
                <Link href={`/polls/${q.slug}`} key={q?.id}>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={q.imageCoverUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {q.question}
                          </p>
                        </a>
                      </div>

                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">Twice Polls</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://lh3.googleusercontent.com/a-/AOh14GiiFgyB9MhZtXcRmbEXAO4HxiENSVkuE7v_D8zF=s96-c"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a>Twice Polls</a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={q.dateCreated}>
                              {dayjs(`${q.dateCreated}`).format("MMM DD, YYYY")}
                            </time>
                            {/* <span aria-hidden="true">&middot;</span>
                            <span>578 user voted</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const querySnapshot = await getFirestoreCollection("polls")
    .where("approved", "==", true)
    .get();

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
      dateCreated: doc.data().dateCreated,
      dateUpdated: doc.data().dateUpdated,
    });
  });

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default Lists;
