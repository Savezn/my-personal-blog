import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ArticleFilter({ setTab }) {
  return (
    <Tabs defaultValue="highlight" onValueChange={setTab} className="w-full">
      {/* ปุ่มหมวดหมู่ */}
      <TabsList className="flex justify-start">
        <TabsTrigger
          value="highlight"
          className="data-[state=active]:bg-[#bcc4b0] data-[state=active]:text-blue-600 hover:bg-[#d4dbc9] px-4 py-4"
        >
          Highlight
        </TabsTrigger>
        <TabsTrigger
          value="cat"
          className="data-[state=active]:bg-[#bcc4b0] data-[state=active]:text-blue-600 hover:bg-[#d4dbc9] px-4 py-4"
        >
          Cat
        </TabsTrigger>
        <TabsTrigger
          value="inspiration"
          className="data-[state=active]:bg-[#bcc4b0] data-[state=active]:text-blue-600 hover:bg-[#d4dbc9] px-4 py-4"
        >
          Inspiration
        </TabsTrigger>
        <TabsTrigger
          value="general"
          className="data-[state=active]:bg-[#bcc4b0] data-[state=active]:text-blue-600 hover:bg-[#d4dbc9] px-4 py-4"
        >
          General
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export function ArticleCard({ activeTab }) {
  const articles = {
    highlight: "แสดงบทความหมวด Highlight",
    cat: "แสดงบทความหมวด Cat",
    inspiration: "แสดงบทความหมวด Inspiration",
    general: "แสดงบทความหมวด General",
  };

  return (
    <div>
      <p>{articles[activeTab]}</p>
    </div>
  );
}
