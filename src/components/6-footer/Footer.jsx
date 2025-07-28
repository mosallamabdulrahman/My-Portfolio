import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#skills">MySkills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p>
        Designed by{" "}
        <a className="a-Footer" href="https://github.com/mosallamabdulrahman">
          Abdelrahman Rafat
        </a>
      </p>
    </footer>
  );
};

export default Footer;
