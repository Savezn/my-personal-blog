function Footer() {
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
    <footer className={`flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 border-t ${styles.borderPrimary} ${styles.bgPrimary} px-20 py-1 w-full h-40 md:h-20`}>
      {/* get in touch + button icon ( linkedin, GitHub, Gmail )*/}
      <div className={`flex flex-row justify-center items-center text-sm gap-6 ${styles["text-50"]}`}>
        <p>Get in touch</p>
        <div className="flex flex-row justify-center items-center gap-4">
          <box-icon type='logo' name='linkedin-square' color='white' className='w-8 h-8 hover:scale-110 hover:cursor-pointer'></box-icon>
          <box-icon type='logo' name='github' color='white' className='w-8 h-8 hover:scale-110 hover:cursor-pointer'></box-icon>
          <box-icon type='logo' name='google-plus-circle' color='white' className='w-8 h-8 hover:scale-110 hover:cursor-pointer'></box-icon>
        </div>
      </div>
      {/* button link Home page*/}
      <div>
        <span className={`text-sm ${styles["text-50"]} hover:scale-110 hover:cursor-pointer`}><u>Home page</u></span>
      </div>
    </footer>
  );
}

export default Footer;
