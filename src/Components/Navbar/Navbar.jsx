import "./Navbar.css";
import logo from "../../assets/logo.png";
import Rectangle from "../../assets/Rectangle.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top header-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="nav-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav px-md-5  ms-md-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#gallary"
                >
                  Gallary
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                >
                  Projects
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#team-main-container"
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  <img src={Rectangle} alt="" width="23px" height="26px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
