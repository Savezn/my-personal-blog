import "boxicons";
import { CategoryCombobox } from "./CategoryCombobox";
import { ArticleCard, ArticleFilter } from "./ArticleFilter";
import { useState } from "react";

function ArticleSection() {
  const [selectedTab, setSelectedTab] = useState("highlight");

  return (
    <section className="flex flex-col gap-4 md:gap-6 w-full md:px-14 py-5">
      <h2 className="text-2xl font-bold pl-4">Lastest articles</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-[#DEE5D4] px-4 py-6 md:py-4 rounded-2xl w-full">

        {/* search */}
        <div className="relative md:order-2 w-full md:w-[40%] px-4">
          <input
            type="text"
            placeholder="Search"
            className=" placeholder-[#8EACCD] placehold:pl-5 bg-[#FEF9D9] w-full h-12 md:h-10 rounded-full px-10 py-3 pr-12 focus-outline-none"
          />
          <div className="absolute right-8 top-1/2 transform -translate-y-2/5">
            <box-icon name="search-alt-2" color="#8EACCD"></box-icon>
          </div>
        </div>

        {/* desktop category list */}
        <div className="hidden md:flex flex-row items-center px-2 gap-10 w-4/10 h-12">
            <ArticleFilter setTab={setSelectedTab} />
        </div>

        {/* mobile category list*/}
        <div className="relative md:hidden w-full h-12 px-4">
          <CategoryCombobox />
        </div>
      </div>          
      <div>
        <ArticleCard activeTab={selectedTab} />
      </div>
    </section>
  );
}

export default ArticleSection;
