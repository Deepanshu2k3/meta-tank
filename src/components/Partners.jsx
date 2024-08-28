import React from "react";
import Slider from "react-slick";
import tech from "./assets/img/techsmith.png";
import google from "./assets/img/google.png";
import teach from "./assets/img/teachradar.png";
import unity from "./assets/img/unitymix.png";

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        infinite: true,
        dots: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div className=" position-relative partners  scroll-snap" id="partners">
        <div className="container py-sm-5 py-4 px-0 px-md-2 mb-5 mt-4 mt-md-0 mb-md-0">
          <div className="col-12 text-center">
            <h2 className="nft_heading">partners</h2>
            <p className="nft_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row justify-content-center mx-0">
            <div className="col-md-12  col-10 px-0 px-md-2 py-md-5 pt-4 d-flex flex-column justify-content-center">
              <Slider {...settings}>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover px-sm-3 partner-mw-custom"
                    src={google}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover px-sm-3 partner-mw-custom"
                    src={tech}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover px-sm-3 partner-mw-custom"
                    src={teach}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover px-sm-3 partner-mw-custom"
                    src={unity}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Partners;
