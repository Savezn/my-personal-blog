import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import BlogCard from "./BlogCard";
import "boxicons";

// declare categories for filtering
const categories = [
  { value: "Highlight", label: "Highlight" },
  { value: "Cat", label: "Cat" },
  { value: "Inspiration", label: "Inspiration" },
  { value: "General", label: "General" },
];

// declare styles from index.css
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

// ArticleSection component
export function ArticleSection() {
  // declare state for selected tab
  const [selectedTab, setSelectedTab] = useState("Highlight");

  // declare state for search input
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // function to handle tab click event
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // useEffect to fetch suggestions
  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }
    
    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(
          "https://blog-post-project-api.vercel.app/posts"
        );
        const allPosts = res.data.posts || [];

        // Filter posts based on whether the search term matches the title or description
        const filteredSuggestions = allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 5); // Limit to 5 suggestions

        setSuggestions(filteredSuggestions);
        setShowSuggestions(filteredSuggestions.length > 0); // Show only if there are suggestions
      } catch (error) {
        console.error(error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };
    fetchSuggestions();
  }, [searchTerm]);


  return (
    <section className={`flex flex-col gap-4 md:gap-6 w-full md:px-14 py-5`}>
      <h2 className={`text-2xl ${styles.textSecondary} font-bold pl-4`}>
        Lastest articles
      </h2>
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center gap-6 ${styles.bgSecondary} px-4 py-6 md:py-4 md:px-10  md:rounded-3xl w-full`}
      >
        {/* Search Input */}
        <div className={`relative md:order-2 z-50 w-full md:w-1/3 px-4 md:px-0 hover:shadow-lg rounded-2xl transform hover:scale-101 transition duration-300 ease-in-out`}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${styles.textSecondary} ${styles.bgBackground} ${styles.borderSecondary} ${styles.placeholderSecondary} text-sm pl-5 w-full h-12 md:h-10 rounded-2xl px-10 py-3 pr-12 focus:outline-none`}
          />

          {/* Search Icon */}
          <div className={`absolute right-8 md:right-4 top-1/2 transform -translate-y-2/5`}>
            <box-icon name="search-alt-2" color={styles.iconPrimary}></box-icon>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-background border rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto scollbar-hide">
              {suggestions.map((post) => (
                <li
                  key={post.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => window.location.href = `/post/${post.id}`}
                >
                  {post.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Category List */}
        <div
          className={`hidden md:flex flex-row just items-center md:order-1 px-2 w-full md:w-1/2 h-12 rounded-2xl`}
        >
          <CategoryFilterTabs setTab={handleTabClick} />
        </div>

        {/* Mobile Category List */}
        <div
          className={`md:hidden flex flex-row items-center w-full h-12 px-4 md:px-0 md:order-1 rounded-2xl`}
        >
          <CategoryFilterSelect setTab={handleTabClick} />
        </div>
      </div>

      {/* Article Card */}
      <div>
        <BlogCardArticle
          activeTab={selectedTab}
          className={`grid grid-cols-1 md:grid-cols-2 items- gap-10 px-8 md:px-0 py-4 w-full`}
        />
      </div>
    </section>
  );
}

// CategoryFilterTabs component for desktop view
export function CategoryFilterTabs({ setTab }) {
  return (
    // Tabs component from Radix UI
    <Tabs defaultValue="Highlight" onValueChange={setTab} className="w-full">
      <TabsList
        className={`flex justify-around items-center gap-2 w-full h-12 ${styles.bgSecondary} rounded-2xl`}
      >
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className={`data-[state=active]:bg-[#d4dbc9] data-[state=active]:text-[#5FA7A7] data-[state=active]:shadow-md hover:bg-[#609e9e] hover:text-[#8EACCD] text-[#b2d4d4] hover:cursor-pointer hover:scale-102 hover:shadow-sm hover:shadow-[#8EACCD] hover:-translate-y-0.5 transition-transform duration-300 px-4 py-2 text-sm font-bold rounded-2xl`}
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

// CategoryFilterSelect component for mobile view
export function CategoryFilterSelect({ setTab }) {
  // function to handle tab click event
  const e = (e) => {
    setTab(e.target.value);
  };

  return (
    // Select component
    <select
      onChange={e}
      className={`${styles.bgBackground} ${styles.borderSecondary} ${styles.textSecondary} text-sm rounded-2xl w-full h-12 px-5 focus:outline-none appearance-none hover:cursor-pointer`}
    >
      {/* Options */}
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}

// BlogCardArticle component
export function BlogCardArticle({ activeTab, ...props }) {
  // declare state
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // function to handle tab click event
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // increment page
  };

  // function to fetch posts when page or activeTab changes
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, activeTab]);

  // function to reset posts when activeTab changes
  useEffect(() => {
    setPosts([]);
    setPage(1);
  }, [activeTab]);

  // function to fetch posts
  const fetchPosts = async () => {
    try {
      // define category parameter
      const categoryParam = activeTab === "Highlight" ? "" : activeTab;

      // set loading state
      setIsLoading(true);

      // fetch data
      const response = await axios.get(
        "https://blog-post-project-api.vercel.app/posts",
        {
          params: {
            page: page,
            limit: 6,
            category: categoryParam,
          },
        }
      );

      // if page is 1, replace existing posts with new posts
      if (page === 1) {
        setPosts(response.data.posts);
      } else {
        // if page is not 1, append new posts to existing posts
        setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
      }

      // check if there are more posts
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }

      // set error state
      setIsError(false);
    } catch (error) {
      // handle error
      console.error("Error fetching posts:", error);
      setIsError(true);
    } finally {
      // set loading state
      setIsLoading(false);
    }
  };

  // function to format date
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <div className={props.className}>
        {/* Render Blog cards */}
        {posts
          .filter((post) =>
            activeTab === "Highlight" ? true : post.category === activeTab
          )
          .map((post, index) => (
            <BlogCard
              key={index} // for unique key
              postId={post.id} // use post.id for navigation to the specific post
              image={post.image}
              category={post.category}
              topic={post.title}
              description={post.description}
              author={post.author}
              date={formatDate(post.date)}
            />
          ))}
      </div>
      {/* Loading indicator */}
      {isLoading && (
        <div
          className={`w-full flex flex-col justify-center items-center my-40`}
        >
          <box-icon
            name="loader-alt"
            color="#6AB7B7"
            size="lg"
            animation="spin"
          ></box-icon>
          <p className={`text-center text-lg ${styles.textSecondary}`}>
            Loading...
          </p>
        </div>
      )}

      {/* Error message */}
      {isError && <p>Error</p>}

      {/* View more button */}
      {hasMore && (
        <div className={`w-full flex justify-center items-center my-8`}>
          <button
            onClick={handleLoadMore}
            className={`font-medium text-lg underline ${styles.textSecondary} hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105`}
          >
            View more
          </button>
        </div>
      )}
    </>
  );
}
