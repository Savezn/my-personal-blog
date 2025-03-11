import "./App.css";

function NavBar() {
  return (
    <nav className="flex direction-row items-center justify-between border-b border-gray-300 px-20 py-1 w-full">
      <img src="src\assets\img\logo.svg" alt="PageLogo" className="w-20" />
      <ul className="flex direction-row">
        <li>
          <button className="border border-gray-400 rounded-3xl px-8 py-2">
            Log in
          </button>
        </li>
        <li>
          <button className="text-white bg-black border border-gray-400 rounded-3xl px-8 py-2 ml-4">
            Sign up
          </button>
        </li>
      </ul>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-8 space-y-8 md:space-y-0 md:space-x-8 w-full">
      {/* Left Text Section */}
      <div className="md:w-100 text-center md:text-right">
        <h1 className="text-6xl font-bold md:border-r-4 border-gray-600 pr-4">
          Stay Informed, <br />
          Stay Inspired
        </h1>
        <p className="mt-4 text-gray-600">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/4 text-center">
        <img
          src="src\assets\img\coding.svg"
          alt="Author"
          className="rounded-xl"
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-100 text-center md:text-left">
        <p className="text-gray-500 text-sm">- Author</p>
        <h2 className="text-2xl font-bold">Thompson P.</h2>
        <p className="mt-2 text-gray-600">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="mt-2 text-gray-600">
          When I’m not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
