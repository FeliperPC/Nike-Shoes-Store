import { useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

function DarkModeBtn() {
  function toggleDarkMode() {
    const isDarkMode = window.document.documentElement.classList.toggle("dark"); // this function returns boolean
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }
  useEffect(() => {
    const isDarMode = localStorage.getItem("isDarkMode");
    if (isDarMode) {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night"
        onClick={toggleDarkMode}
      >
        <BiSun className="hidden dark:block" />
        <BiMoon className="dark:hidden" />
      </button>
    </div>
  );
}

export default DarkModeBtn;
