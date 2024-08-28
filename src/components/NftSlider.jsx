import React from "react";
import Slider from "react-slick";
import Nftfirstimg from "../components/assets/img/Nftimgfirst.png";
import Nftsecondimg from "../components/assets/img/Nftimgsecond.png";
import Nftthirdimg from "../components/assets/img/Nftimgthird.png";
import Nftfourth from "../components/assets/img/Nftimgfourth.png";
import Nftfiveimg from "../components/assets/img/nftimgfivth.png";
import Nftsixthimg from "../components/assets/img/nftimgsixth.png";
import Nftsevenimg from "../components/assets/img/nftimgseven.png";
import Nfteightimg from "../components/assets/img/nftimgeight.png";
import Nftnineimg from "../components/assets/img/nftimgnine.png";
import Nfttenimg from "../components/assets/img/nftimgten.png";
import Nftelevenimg from "../components/assets/img/nftimgeleven.png";
import Nftimgtweleimg from "../components/assets/img/nftimgtwele.png";
import bottomborder from "./assets/img/nft-bottom-border.png";

const NftSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        infinite: true,
        dots: true,
        arrows: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="nft_background scroll-snap">
        <div className="container  py-sm-4 py-3">
          <h2 className="nft_heading text-center pt-4">NFTS</h2>
          <p className="text-brown text-center font-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-12 col-10">
              <Slider {...settings}>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover "
                    src={Nftfirstimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftsecondimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftthirdimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover "
                    src={Nftfourth}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftfiveimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftsixthimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftsevenimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nfteightimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftnineimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img className="w-100 nft_img_hover" src={Nfttenimg} alt="" />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftelevenimg}
                    alt=""
                  />
                </div>
                <div
                  className="p-sm-3 p-2 "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-100 nft_img_hover"
                    src={Nftimgtweleimg}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="position-relative pt-5 mt-sm-5">
          <p className="border-text">
            <a href="">view more in marketplace</a>
          </p>
          <img className="w-100" src={bottomborder} alt="" />
        </div>
      </div>
    </>
  );
};

export default NftSlider;
