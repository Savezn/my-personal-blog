import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-text font-sans mx-auto m-0 p-0 max-w-full">
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
