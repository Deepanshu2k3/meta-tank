import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "./assets/img/second-slider-img-1.png";
import border from "./assets/img/second-slider-border.png";
import border2 from "./assets/img/second-slider-bg-2.png";
import img2 from "./assets/img/lore-img-1.png";
import img3 from "./assets/img/lore-img-2.png";
import img4 from "./assets/img/lore-img-3.png";
import newimg from "./assets/img/EXTERNAL-IMG.png";

const Lore = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        infinite: true,
        dots: false,
        arrows: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [loreTab, setLoreTab] = useState(1);

  console.log(loreTab);
  return (
    <>
      <div className=" position-relative lore scroll-snap" id="lore">
        <div className="container-fluid min-height-300 py-sm-4 py-3 px-0 px-md-2">
          <div className="row justify-content-center mx-0">
            <div className="col-md-12 col-md-10 col-12 px-0 px-md-2">
              <div>
                <h2 className="lore-heading text-uppercase lore-heading-fs mb-0">
                  lore
                </h2>
                <button
                  className="lore-text-1 text-uppercase lore-fs-custom bg-transparent border-0"
                  onClick={() => setLoreTab(1)}
                >
                  history
                </button>
                <button
                  className="lore-text-2 text-uppercase lore-fs-custom bg-transparent border-0"
                  onClick={() => setLoreTab(2)}
                >
                  factions
                </button>
                <button
                  className="lore-text-3 text-uppercase lore-fs-custom bg-transparent border-0"
                  onClick={() => setLoreTab(3)}
                >
                  Map
                </button>
              </div>
              <div>
                <img
                  className="w-100 position-absolute z-positive-1 left-0 top-0 d-none d-md-block"
                  src={border}
                  alt=""
                />
                <img
                  className="w-100 h-100 position-absolute z-positive-1 left-0 top-0 d-md-none"
                  src={border2}
                  alt=""
                />
              </div>
              <div>
                <div className="">
                  {loreTab === 1 && (
                    <div className="p-md-2 ">
                      <img
                        className="w-100 lore-img-custom-padding min-height-300 object-fit-cover"
                        src={img3}
                        alt=""
                      />
                    </div>
                  )}

                  {loreTab === 2 && (
                    <div className="p-md-2 ">
                      <img
                        className="w-100 lore-img-custom-padding min-height-300 object-fit-cover"
                        src={img4}
                        alt=""
                      />
                    </div>
                  )}

                  {loreTab === 3 && (
                    <div className="p-md-2 ">
                      <img
                        className="w-100 lore-img-custom-padding min-height-300 object-fit-cover"
                        src={img2}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lore;
