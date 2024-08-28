import React from "react";
import { useScreenFixedProvider } from "./ScreenFix";
import { useMediaQuery } from "react-responsive";
import navbarbg from "./assets/img/navbar-bg.png";
import logo2 from "./assets/img/meta-tank-logo.png";
const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 1399.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1400 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper mt-xxl-4 flex-xxl-column  justify-content-center">
        <div className="position-relative navbar-position container mt-negative d-none d-xxl-block">
          <img
            className="w-100 navbar-bg z-1 d-none d-xxl-block"
            src={navbarbg}
            alt=""
          />
          <Desktop>
            <div className="container text-center  custom-padding-2">
              <div className="   ">
                <div className="d-flex  align-items-center justify-content-xxl-center justify-content-between navbar-text-position">
                  <div className="d-flex  ">
                    <li className=" mx-1 nav-list-items p-2 d-inline-block cursor-pointer navbar-btn-bg ">
                      <a href="#home">Home</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#docs">docs</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#gameplay">Gameplay</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#lore">lore</a>
                    </li>
                  </div>
                  <div className="padding-left-custom  d-flex">
                    <li className=" mx-1 nav-list-items p-2 d-inline-block cursor-pointer navbar-btn-bg ">
                      <a href="#nfts">nfts</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#roadmap">roadmap</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#team">team</a>
                    </li>

                    <li className=" mx-1 nav-list-items navbar-btn-bg p-2 d-inline-block cursor-pointer  ">
                      <a href="#partners">partners</a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </Desktop>
        </div>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen position-relative">
              <div className="d-flex flex-column text-center padding-in-vh position-absolute h-100 justify-content-center text-position mw-400 w-100">
                <ul className="p-0  d-flex flex-column justify-content-center nav-custom-height mx-sm-auto mx-md-0 pt-xl-5 mt-5 mt-sm-0 mt-lg-5">
                  <li className=" transition-0_3sEase navbar-btn-bg-2 mt-lg-5 mt-xl-4  mt-4 mt-sm-2 overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#about"
                        className="nav-link    text-decoration-none"
                      >
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase navbar-btn-bg-2 mt-3 mt-xl-2  overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#docs"
                        className="nav-link    text-decoration-none"
                      >
                        docs
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2  navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#gameplay"
                        className="nav-link    text-decoration-none"
                      >
                        Gameplay
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2 navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#lore"
                        className="nav-link    text-decoration-none"
                      >
                        lore
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2  navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#nfts"
                        className="nav-link    text-decoration-none"
                      >
                        nfts
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2  navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link    text-decoration-none"
                      >
                        roadmap
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2  navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#team"
                        className="nav-link    text-decoration-none"
                      >
                        team
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-2  navbar-btn-bg-2 transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#partners"
                        className="nav-link    text-decoration-none"
                      >
                        partners
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-4 mt-lg-3  transition-0_3sEase overflow-hidden">
                    <span
                      className="pb-sm-2  d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#"
                        className="nav-link nav-custom-padding text-white common-btn  text-decoration-none"
                      >
                        Enter game
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar  navbar_bg_color navbar-expand-lg navbar-light p-3 w-100 px-sm-5">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <a href="#">
                <img className="logo-img" src={logo2} alt="" />
              </a>

              <div
                className={`${
                  showOverlay ? "animate navbarwrapper-cross-icon" : ""
                } position-relative navbarwrapper  ms-auto hamburger-icon d-flex flex-column d-xxl-none`}
                onClick={() => setShowOverlay(!showOverlay)}
              >
                <span className="first d-inline-block"></span>
                <span className="second d-inline-block"></span>
                <span className="third d-inline-block"></span>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
      </section>
    </>
  );
};

export default Header;
