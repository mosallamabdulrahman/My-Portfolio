import { useEffect, useRef, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  const modalRef = useRef();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setshowModal(false);
      }
    };

    const handleClickOutside = (e) => {
      // @ts-ignore
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setshowModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex">
      <button onClick={() => setshowModal(true)} className="menu icon-menu flex" />

      <div />

      <nav>
        <ul className="flex">
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">MySkills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          localStorage.setItem("currentMode", newTheme);
          setTheme(newTheme);
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <ul ref={modalRef} className="modal">
            <li>
              <button className="icon-close" onClick={() => setshowModal(false)} />
            </li>
            <li><a href="#hero">About</a></li>
            <li><a href="#skills">MySkills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
