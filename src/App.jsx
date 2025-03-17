import "./App.css";
import "./index.css";
import NavBar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEF9D9] text-blue-500 font-sans mx-auto m-0 p-0 max-w-full">
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
