function HeroSection() {
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
    <section className="flex flex-col md:flex-row items-center justify-center gap-2 space-y-8 md:space-y-0 md:space-x-8 w-full px-4 md:px-14 py-10">
      {/* Left Text Section */}
      <article className="flex flex-col gap-4 md:w-100 text-center md:text-right">
        <h1 className={`text-5xl ${styles.textSecondary} font-bold text-left md:text-right border-l-4 pl-3 md:border-l-0 md:border-r-4 md:pr-4`}>
          Stay Informed, <br />
          Stay Inspired
        </h1>
        <p className={`text-sm mt-4 ${styles.textPrimary}`}>
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </article>

      {/* Image Section */}
      <article className="w-100 min-w-content max-w-full h-100 overflow-hidden p-2 md:p-0">
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Author"
          className={`object-cover object-center w-full h-full border ${styles.borderPrimary} border-2 rounded-xl shadow-md md:shadow-lg md:w-100 md:h-100`}
        />
      </article>

      {/* Right Text Section */}
      <article className="flex flex-col gap-2 md:w-100 md:text-left">
        <p className={`text-sm" ${styles.textPrimary}`}>- Author</p>
        <h2 className={`text-2xl font-bold ${styles.textSecondary}`}>Thompson P.</h2>
        <p className={`mt-2 ${styles.textPrimary}`}>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className={`mt-2 ${styles.textPrimary}`}>
          When I’m not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </article>
    </section>
  );
}

export default HeroSection;
