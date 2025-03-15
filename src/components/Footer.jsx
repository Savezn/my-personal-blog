function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 border-t text-[#F9F7F7] bg-[#112D4E] px-20 py-1 w-full h-40 md:h-20">
      {/* get in touch + button icon ( linkedin, GitHub, Gmail )*/}
      <div className="flex flex-row gap-6">
        <p>Get in touch</p>
        <div className="flex flex-row gap-4">
          <box-icon type='logo' name='linkedin-square' color='white' ></box-icon>
          <box-icon type='logo' name='github' color='white'></box-icon>
          <box-icon type='logo' name='google-plus-circle' color='white'></box-icon>
        </div>
      </div>
      {/* button link Home page*/}
      <div>
        <p><u>Home page</u></p>
      </div>
    </footer>
  );
}

export default Footer;
