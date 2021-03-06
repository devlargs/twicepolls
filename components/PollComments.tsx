import { useEffect } from "react";
import Swal from "sweetalert2";
import { useUser } from "utils/auth/useUser";

const PollComments = ({ pollId }: { pollId: string }) => {
  const { user } = useUser();

  useEffect(() => {
    console.log(pollId);
  }, []);

  return (
    <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
      <div className="divide-y divide-gray-200">
        <div className="px-4 py-5 sm:px-6">
          <h2 id="notes-title" className="text-lg font-medium text-gray-900">
            Comments (in progress)
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
                    <p>asd</p>
                  </div>
                  <div className="mt-2 text-sm space-x-2">
                    <span className="text-gray-500 font-medium">4d ago</span>
                    <span className="text-gray-500 font-medium">&middot;</span>
                    <button type="button" className="text-gray-900 font-medium">
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
            <img className="h-10 w-10 rounded-full" src={user?.avatar} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <form>
              <div>
                <label htmlFor="comment" className="sr-only">
                  About
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add a comment"
                ></textarea>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    Swal.fire(
                      "Beta Version",
                      "Comment section is currently in progress",
                      "info"
                    );
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollComments;
