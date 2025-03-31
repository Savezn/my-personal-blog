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

function BlogCard({ index, image, category, title, description, author, date }) {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-6 rounded-xl w-full bg-[#c0c3bd] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-6 md:px-10 md:py-6 hover:cursor-pointer`}
      key={index}
    >
      <a href="#" className={`relative h-[212px] sm:h-[360px]`}>
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span
            className={`${styles.bgSecondary} ${styles["text-200"]} rounded-full px-3 py-1 text-sm font-semibold shadow shadow:md mb-2`}
          >
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="exceeds-2-lines text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt={author}
          />
          <span className="font-semibold">{author}</span>
          <span className="mx-2">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
