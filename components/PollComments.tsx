import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import getFirestoreCollection from "utils/auth/getFirestoreCollection";
import { useUser } from "utils/auth/useUser";
import ThreeLineDotted from "./Loaders/ThreeLineDotted";

const PollComments = ({ pollId }: { pollId: string }) => {
  const { user } = useUser();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(pollId);
  }, []);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const commentRef = getFirestoreCollection("comments").doc();
      await commentRef.set({
        userId: user.id,
        comment,
        pollId,
      });
      setLoading(false);
      setComment("");
    } catch (ex) {
      Swal.fire(
        "Error upon Commenting",
        "Something went wrong. Try again later.",
        "error"
      );
      setLoading(false);
      setComment("");
    }
  };

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

      {user && user?.id ? (
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="comment" className="sr-only">
                    About
                  </label>
                  <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    id="comment"
                    name="comment"
                    rows={3}
                    className="shadow-sm p-4 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Add a comment"
                  ></textarea>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-blue-700 focus:outline-none "
                  >
                    {loading ? (
                      <>
                        &nbsp; &nbsp;
                        <ThreeLineDotted />
                      </>
                    ) : (
                      <> Comment</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3 ml-14 flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              Swal.fire("Beta Version", "Functionality in progress", "info");
            }}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-blue-700 focus:outline-none mb-5"
          >
            Login to Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default PollComments;
