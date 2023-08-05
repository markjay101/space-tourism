import logo from "../assets/shared/logo.svg";
import navIcon from "../assets/shared/icon-hamburger.svg";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-transparent fixed-top mt-4 mt-sm-0 mt-md-0 mt-lg-4 ps-4 pe-4 pe-sm-0 pe-md-0 pe-lg-0 py-1 py-sm-0 py-md-0 py-lg-0">
        <div className="container-fluid pe-0">
          <div className="logo-container d-flex d-flex align-items-center position-relative">
            <img src={logo} className=""></img>
            <div className="line border brc-white d-none d-md-none d-lg-inline-block position-absolute"></div>
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img src={navIcon}></img>
          </button>
          <div
            className="offcanvas offcanvas-end w-75 bg-transparent"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header pt-0">
              <div></div>
              <button
                type="button"
                className="btn text-white p-0 fs-1 fw-bolder border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline justify-content-end flex-grow-1 ps-0 ps-sm-2 ps-md-3 ps-lg-3 pe-0 pe-sm-5 pe-md-5 pe-lg-5">
                <li className="nav-item px-2 px-md-2 px-lg-3">
                  <Link
                    to="/"
                    className={`nav-link py-2 py-sm-4 py-md-4 py-lg-4 fw-normal ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <span className="fw-bold d-none d-lg-inline-block d-md-none me-3">
                      00
                    </span>
                    Home
                  </Link>
                </li>
                <li className="nav-item px-2 px-md-2 px-lg-3">
                  <Link
                    to="/destination"
                    className={`nav-link py-2 py-sm-4 py-md-4 py-lg-4 fw-normal ${
                      location.pathname === "/destination" ? "active" : ""
                    }`}
                  >
                    <span className="fw-bold d-none d-lg-inline-block d-md-none me-3">
                      01
                    </span>
                    Destination
                  </Link>
                </li>
                <li className="nav-item px-2 px-md-2 px-lg-3">
                  <Link
                    to="/crew"
                    className={`nav-link py-2 py-sm-4 py-md-4 py-lg-4 fw-normal ${
                      location.pathname === "/crew" ? "active" : ""
                    }`}
                  >
                    <span className="fw-bold d-none d-lg-inline-block d-md-none me-3">
                      02
                    </span>
                    Crew
                  </Link>
                </li>
                <li className="nav-item px-2 px-md-2 px-lg-3 me-0 me-md-0 me-lg-5 pe-0 pe-md-0 pe-lg-5">
                  <Link
                    to="/technology"
                    className={`nav-link py-2 py-sm-4 py-md-4 py-lg-4 fw-normal ${
                      location.pathname === "/technology" ? "active" : ""
                    }`}
                  >
                    <span className="fw-bold d-none d-lg-inline-block d-md-none me-3">
                      03
                    </span>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
