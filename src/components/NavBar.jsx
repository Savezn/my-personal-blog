import { Button } from "./ui/button";
import "boxicons";
import { useState } from "react";

export function ButtonDemo({ name, className }) {
  return <Button className={className}>{name}</Button>;
}

export function ButtonOutline({ name, className }) {
  return (
    <Button variant="outline" className={className}>
      {name}
    </Button>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex flex-row items-center justify-between bg-[#FEF9D9] border-b border-x border-[#D2E0FB] shadow-sm px-8 md:px-14 py-4 w-full z-50 mx-2">
      {/* Logo */}
      <div>LOGO</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-4">
        <li>
          <ButtonOutline
            name="Log in"
            className="text-[#699bd0] border-1 border-[#8EACCD] rounded-3xl w-25 h-10 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300"
          />
        </li>
        <li>
          <ButtonDemo
            name="Sign up"
            className="text-[#F9F7F7] bg-[#6299d4] border border-[#8EACCD] rounded-3xl w-25 h-10 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300"
          />
        </li>
      </ul>

      {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <box-icon name='menu' size="lg" color="#8EACCD" className="hover:scale-110 transition-transform duration-200"></box-icon>
        </button>

        {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[100%] left-0 bg-[#FEF9D9] border-y-1 border-[#8EACCD] shadow-md px-6 py-10 flex flex-col gap-6 md:hidden w-full">
          <li>
            <ButtonOutline
              name="Log in"
              className="text-lg text-[#699bd0] border border-[#8EACCD] rounded-3xl w-full h-13 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300"
            />
          </li>
          <li>
            <ButtonDemo
              name="Sign up"
              className="text-lg text-[#F9F7F7] bg-[#8EACCD] border border-[#8EACCD] rounded-3xl w-full h-13 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300"
            />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
