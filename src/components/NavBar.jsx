import "../index.css";
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
    <nav className={`sticky top-0 flex flex-row items-center justify-between border-b ${styles.bgBackground} ${styles.borderPrimary} shadow-sm px-8 md:px-14 py-4 w-full z-50 mx-4`}>
      {/* Logo */}
      <div className={`text-2xl font-bold`}><span className={`${styles.textSecondary} hover:cursor-pointer hover:shadow-[#8EACCD]`}>LOGO</span></div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-4">
        <li>
          <ButtonOutline
            name="Log in"
            className={`${styles.textPrimary} border-1 ${styles.borderPrimary} rounded-3xl w-25 h-10 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300`}
          />
        </li>
        <li>
          <ButtonDemo
            name="Sign up"
            className={`${styles.textBackground} ${styles.bgPrimary} border ${styles.borderPrimary} rounded-3xl w-25 h-10 hover:cursor-pointer hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300`}
          />
        </li>
      </ul>

      {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <box-icon name='menu' size="lg" color={`${styles.iconPrimary}`} className="hover:scale-110 transition-transform duration-200"></box-icon>
        </button>

        {/* Mobile Menu */}
      {isOpen && (
        <ul className={`absolute top-[100%] left-0 ${styles.bgBackground} border-y-1 ${styles.borderPrimary} shadow-md px-6 py-10 flex flex-col gap-6 md:hidden w-full z-50`}>
          <li>
            <ButtonOutline
              name="Log in"
              className={`text-lg ${styles.textPrimary} border ${styles.borderPrimary} rounded-3xl w-full h-13 hover:cursor-pointer hover:scale-101 hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300`}
            />
          </li>
          <li>
            <ButtonDemo
              name="Sign up"
              className={`text-lg ${styles.textBackground} ${styles.bgPrimary} border ${styles.borderPrimary} rounded-3xl w-full h-13 hover:cursor-pointer hover:scale-101 hover:shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5 transition-transform duration-300`}
            />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
