function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-2 space-y-8 md:space-y-0 md:space-x-8 w-full px-4 md:px-14 py-10">
      {/* Left Text Section */}
      <article className="flex flex-col gap-4 md:w-1/3 text-center md:text-right">
        <h1 className="text-5xl font-bold text-left md:text-right border-l-4 pl-3 md:border-l-0 md:border-r-4 md:pr-4">
          Stay Informed, <br />
          Stay Inspired
        </h1>
        <p className="mt-4 text-[#3F72AF]">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </article>

      {/* Image Section */}
      <article className="w-80 max-w-full h-100 overflow-hidden p-2">
        <img
          src="src\assets\img\a-man-with-cat.jpg"
          alt="Author"
          className="object-cover object-center w-full h-full"
        />
      </article>

      {/* Right Text Section */}
      <article className="flex flex-col gap-2 md:w-100 md:text-left">
        <p className="text-sm">- Author</p>
        <h2 className="text-2xl font-bold">Thompson P.</h2>
        <p className="mt-2 text-[#3F72AF]">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="mt-2 text-[#3F72AF]">
          When I’m not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </article>
    </section>
  );
}

export default HeroSection;
