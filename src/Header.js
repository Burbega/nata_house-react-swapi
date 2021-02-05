import "./Header.css";
import logo from "./img/star-wars-logo.png";
import skyrunner from "./img/skyrunner-logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="intro">
        A long time ago, in a galaxy far,<br></br> far away....
      </div>
      <img className="logo" src={logo} alt="Star Wars yellow logo" />
      <img className="skyrunner" src={skyrunner} alt="Skyrunner yellow logo" />
    </nav>
  );
};

export default Header;
