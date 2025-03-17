"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts } from "@/data/blogPosts.js";
import BlogCard from "./BlogCard";

const categories = [
  { value: "Highlight", label: "Highlight" },
  { value: "Cat", label: "Cat" },
  { value: "Inspiration", label: "Inspiration" },
  { value: "General", label: "General" },
];

export function ArticleSection() {
  const [selectedTab, setSelectedTab] = useState("Highlight");

  return (
    <section className="flex flex-col gap-4 md:gap-6 w-full md:px-14 py-5">
      <h2 className="text-2xl font-bold pl-4">Lastest articles</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-[#DEE5D4] px-4 py-6 md:py-4 rounded-2xl w-full">
        {/* Search input */}
        <div className="relative md:order-2 w-full md:w-[40%] px-4">
          <input
            type="text"
            placeholder="Search"
            className="placeholder-[#8EACCD] pl-5 bg-[#FEF9D9] w-full h-12 md:h-10 rounded-full px-10 py-3 pr-12 focus:outline-none"
          />
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <box-icon name="search-alt-2" color="#8EACCD"></box-icon>
          </div>
        </div>

        {/* Desktop Category List */}
        <div className="hidden md:flex flex-row items-center px-2 gap-10 w-4/10 h-12">
          <CategoryFilterTabs setTab={setSelectedTab} />
        </div>

        {/* Mobile Category List */}
        <div className="relative md:hidden w-full h-12 px-4">
          
        </div>
      </div>

      {/* Article Card */}
      <div>
        <BlogCardArticle
          activeTab={selectedTab}
          className="grid grid-cols-1 md:grid-cols-2 items- gap-10 px-8 md:px-0 py-4 w-full"
        />
      </div>
    </section>
  );
}

export function CategoryFilterTabs({ setTab }) {
  return (
    <Tabs defaultValue="Highlight" onValueChange={setTab} className="w-full">
      <TabsList className="flex justify-start">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className="data-[state=active]:bg-[#bcc4b0] data-[state=active]:text-blue-600 hover:bg-[#d4dbc9] px-4 py-4"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export function BlogCardArticle({ activeTab, ...props }) {
  return (
    <div className={props.className}>
      {blogPosts
        .filter((post) =>
          activeTab === "Highlight" ? true : post.category === activeTab
        )
        .map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            category={post.category}
            topic={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
          />
        ))}
    </div>
  );
}
