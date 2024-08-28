import React from "react";
import footerlogo from "./assets/img/footer-logo.png";
import facebook from "./assets/img/facebook.png";
import twitter from "./assets/img/TWITTER.png";
import telegram from "./assets/img/TELEGRAM.png";
import discord from "./assets/img/DISCORD.png";

export const Footer = () => {
  return (
    <>
      <div className="footer white_line_adjustment  py-5 scroll-snap">
        <div className="container py-sm-5 mt-5">
          <div className="row justify-content-sm-between justify-content-center">
            <div className="col-sm-3 text-center">
              <img className="w-100 footer-logo" src={footerlogo} alt="" />
              <p className="footer-small-para mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-lg-1 col-sm-3 col-4 text-center text-sm-start">
              <ul className="list-unstyled px-2">
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#home">
                    HOME
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#docs">
                    DOCS
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#gameplay">
                    GAMEPLAY
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#lore">
                    LORE
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-sm-3 col-4 text-center text-sm-start">
              <ul className="list-unstyled px-2">
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#nfts">
                    NFTS
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#roadmap">
                    ROADMAP
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#team">
                    TEAM
                  </a>
                </li>
                <li className="py-2 my-lg-1 my-xxl-3">
                  <a className="footer-link" href="#partners">
                    PARTNERS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12 mt-4 text-center">
              <h3>Join our community</h3>
              <div className="d-flex justify-content-lg-between justify-content-center mt-3">
                <div className="mx-1">
                  <a href="">
                    <img className="w-100 footer-icon" src={facebook} alt="" />
                  </a>
                </div>
                <div className="mx-1">
                  <a href="">
                    <img className="w-100 footer-icon" src={twitter} alt="" />
                  </a>
                </div>
                <div className="mx-1">
                  <a href="">
                    <img className="w-100 footer-icon" src={telegram} alt="" />
                  </a>
                </div>
                <div className="mx-1">
                  <a href="">
                    <img className="w-100 footer-icon" src={discord} alt="" />
                  </a>
                </div>
              </div>
              <p className="normal-para text-dark-green mt-4">
                2022©Metatank. All rights redserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
