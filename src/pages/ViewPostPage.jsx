import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "@/components/NavBar";
import axios from "axios";
import "boxicons";
import AuthRequiredModal from "@/components/AuthRequiredModal";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

const ViewPostPage = () => {
  // declare state for storing data
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // decalare state for storing comment
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // declare state for authentication
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(true);

  // fetch data on page load
  useEffect(() => {
    fetchPost();
  }, []);

  // function to fetch data
  const fetchPost = async () => {
    // set state
    setLoading(true);
    setError(false);

    try {
      // fetch data
      const response = await axios.get(
        "https://blog-post-project-api.vercel.app/posts"
      );

      // find post by id
      const post = response.data.posts.find(
        (post) => post.id === parseInt(window.location.pathname.split("/")[2])
      );

      // set state
      setPost(post);
      setComments(post.comments);
      setLoading(false);
    } catch (error) {
      // handle error
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  // function to handle like
  const handleLike = () => {
    if (isLoggedIn) {
      setPost({ ...post, likes: post.likes + 1 });
      // send like to API
    } else {
      setShowAuthRequiredModal(true);
    }
  };

  // function to handle comment
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      const newCommentObject = {
        id: Date.now(),
        comment: newComment,
      };
      setComments([...comments, newCommentObject]);
      setNewComment(""); // clear input
      // send comment to API
    } else {
      setShowAuthRequiredModal(true);
    }
  };


  // declare state for closing auth required modal
  const closeAuthRequiredModal = () => {
    setShowAuthRequiredModal(false);
  };

  // function to handle create account click
  const handleCreateAccountClick = () => {
    // navigate user to create account page
    console.log("go to create account page");
    setShowAuthRequiredModal(false);
  };

  // function to handle login click
  const handleLoginClick = () => {
    // navigate user to login page
    console.log("go to login page");
    setShowAuthRequiredModal(false);
  };

  // declare styles
  const styles = {
    bgPrimary: "bg-primary",
    bgSecondary: "bg-secondary",
    bgTertiary: "bg-tertiary",
    bgBackground: "bg-background",
    bgAccent: "bg-accent",
    bgAccent2: "bg-accent-2",
    bgAccent3: "bg-accent-3",
    bgAccent4: "bg-accent-4",
    bgAccent5: "bg-accent-5",
    borderPrimary: "border-primary",
    borderSecondary: "border-secondary",
    borderTertiary: "border-tertiary",
    borderBackground: "border-background",
    borderAccent: "border-accent",
    borderAccent2: "border-accent-2",
    borderAccent3: "border-accent-3",
    borderAccent4: "border-accent-4",
    borderAccent5: "border-accent-5",
    "text-50": "text-50",
    "text-100": "text-100",
    "text-200": "text-200",
    "text-300": "text-300",
    "text-400": "text-400",
    "text-500": "text-500",
    "text-600": "text-600",
    "text-700": "text-700",
    "text-800": "text-800",
    "text-900": "text-900",
    textPrimary: "text-primary",
    textSecondary: "text-secondary",
    textTertiary: "text-tertiary",
    textBackground: "text-background",
    textAccent: "text-accent",
    textAccent2: "text-accent-2",
    textAccent3: "text-accent-3",
    textAccent4: "text-accent-4",
    textAccent5: "text-accent-5",
    placeholderPrimary: "placeholder-primary",
    placeholderSecondary: "placeholder-secondary",
    placeholderTertiary: "placeholder-tertiary",
    iconPrimary: "#5FA7A7",
  };

  return (
    // return JSX
    <div className="flex flex-col items-center min-h-screen bg-background text-text font-sans mx-auto m-0 p-0 max-w-full">
      <NavBar />
      {/* conditional rendering */}
      {loading ? (
        <p className="text-2xl">Loading...</p>
      ) : error ? (
        <p className="text-2xl">Error</p>
      ) : (
        <div className="flex flex-col items-center min-h-screen bg-background text-text font-sans mx-auto m-0 p-0 max-w-full">
          {/* post details */}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-w-md mb-4"
          />
          <p className="text-lg mb-4">Category: {post.category}</p>
          <p className="text-lg mb-4">Author: {post.author}</p>
          <p className="text-lg mb-4">Date: {post.date}</p>
          <p className="text-lg mb-4">{post.description}</p>
          <div>{post.likes}</div>
          {/* markdown content */}
          <div className="markdown">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          {/* like button */}.
          <button
            className={`bg-primary text-white px-4 py-2 rounded-md mt-4 hover:bg-secondary hover:cursor-pointer ${
              !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              handleLike();
            }}
          >
            🙂 <span>{post.likes}</span>
          </button>
          {/* share section */}
          <div className="flex items-center mt-4">
            {/* copy link button */}
            <Toaster />
            <button
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:cursor-pointer"
              onClick={() => {
                // copy link
                toast.message("Copied!", {
                  description: "This article has been copied to your clipboard.",
                  }
                );
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              Copy Link
            </button>

            {/* share button */}
            <div className="flex items-center ml-4">
              {/* facebook */}
              <box-icon
                type="logo"
                name="facebook-circle"
                size="md"
                color="#5FA7A7"
                className="mr-2 hover:cursor-pointer"
              ></box-icon>

              {/* linkedin */}
              <box-icon
                name="linkedin"
                type="logo"
                size="sm"
                color="#5FA7A7"
                className="mr-2 hover:cursor-pointer"
              ></box-icon>

              {/* twitter */}
              <box-icon
                name="twitter"
                type="logo"
                size="md"
                color="#5FA7A7"
                className="mr-2 hover:cursor-pointer"
              ></box-icon>
            </div>
          </div>
          {/* comments section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>

            {/* comment list */}
            {comments?.map((comment) => (
              <div key={comment.id} className="mb-4">
                <p className="text-lg">{comment.comment}</p>
              </div>
            ))}

            {/* comment form */}
            {/* when form is submitted, add new comment */}
            <form
              onSubmit={(e) => {
                handleSubmitComment(e);
              }}
            >
              {/* input field */}
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="What are your thoughts?"
                className={`w-full border ${styles.borderSecondary} rounded-md p-2 mb-4 ${styles.bgBackground} ${styles.textSecondary}`}
              />

              {/* submit button */}
              <button
                type="submit"
                className={`bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition duration-300 ease-in-out ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* show auth required modal when showAuthRequiredModal is true */}
      {showAuthRequiredModal && (
        <AuthRequiredModal
          onClose={closeAuthRequiredModal}
          onCreateAccount={handleCreateAccountClick}
          onLogin={handleLoginClick}
        />
      )}
    </div>
  );
};

export default ViewPostPage;
