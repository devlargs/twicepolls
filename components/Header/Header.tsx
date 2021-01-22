import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "utils/auth/useUser";
import { useHover } from "react-hookedup";
import { Mobile } from "./Nav";
import LoginModal from "components/LoginModal";
import { useRouter } from "next/router";

const Header = () => {
  const { logout, user } = useUser();
  const { hovered, bind } = useHover();
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setMenuVisibility(hovered);
  }, [hovered, setMenuVisibility]);

  const getHeaderClass = (path: string) =>
    pathname === path
      ? "border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";

  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/images/logo.png"
                  alt="TwicePolls"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/images/logo.png"
                  alt="TwicePolls"
                />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link href="/">
                  <a className={getHeaderClass("/")}>Home</a>
                </Link>
                <Link href="/polls">
                  <a className={getHeaderClass("/polls")}>Polls</a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {!(user && user?.id) ? (
                  <button
                    onClick={() => setModalVisibility(true)}
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Login</span>
                  </button>
                ) : (
                  <>{user.name}</>
                )}
              </div>

              {user && user?.id ? (
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <div className="ml-3 relative" {...bind}>
                    <div>
                      <button
                        className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.avatar}
                          alt=""
                        />
                      </button>
                    </div>

                    {menuVisibility && (
                      <div
                        className="origin-top-right absolute right-0 mt-0 ml-5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>
                        <a
                          onClick={logout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <Mobile />
      </nav>
      <LoginModal
        visible={modalVisibility}
        close={() => setModalVisibility(false)}
      />
    </>
  );
};

export default Header;
