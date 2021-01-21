import SEO from "components/SEO";
import config from "constants/config";
import Link from "next/link";

const Lists = () => {
  return (
    <div className="bg-white">
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
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              - CREATED BY ONCES -
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Link href="/polls/who-is-the-one-who-stood-out-the-most-in-breakthrough">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://wallpaperaccess.com/full/1097676.jpg"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        Who is the one who stood out the most in breakthrough?
                      </p>
                    </a>
                  </div>

                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Twice Polls</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://qph.fs.quoracdn.net/main-thumb-19294-200-gWf2Svksy82jLiNham4p8GUe9PFkIwLu.jpeg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a>Twice Polls</a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>578 user voted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://kpopthing.com/wp-content/uploads/2020/12/nayeonb.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Who is the prettiest member of Twice?
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">Twice Polls</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://qph.fs.quoracdn.net/main-thumb-19294-200-gWf2Svksy82jLiNham4p8GUe9PFkIwLu.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a>Twice Polls</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">Mar 18, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>69 user voted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://pbs.twimg.com/media/EY39y9jU8AIWlR8.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Who's the best dancer in Twice?
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">Twice Polls</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://qph.fs.quoracdn.net/main-thumb-19294-200-gWf2Svksy82jLiNham4p8GUe9PFkIwLu.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a>Twice Polls</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">Mar 18, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>118 user voted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://0.soompi.io/wp-content/uploads/2017/02/19064750/TWICE-Jihyo-Nayeon.jpg?s=900x600&e=t"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Who's the better singer? Jihyo or Nayeon?
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">Twice Polls</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://qph.fs.quoracdn.net/main-thumb-19294-200-gWf2Svksy82jLiNham4p8GUe9PFkIwLu.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a>Twice Polls</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">Mar 18, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>720 user voted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
