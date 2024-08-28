import React from "react";
import Slider from "react-slick";
import img1 from "./assets/img/team-1.png";
import border2 from "./assets/img/team-slider-bg-2.png";
import left from "./assets/img/slider-left-arrow.png";
import right from "./assets/img/slider-right-arrow.png";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,

        settings: {
          infinite: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 400,

        settings: {
          infinite: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <div className=" position-relative bg-black  py-2 scroll-snap" id="team">
        <div className="container-fluid d-none d-md-block  pt-sm-4 pt-3 mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-10">
              <div>
                <button className="team-heading bg-transparent border-0">
                  team
                </button>
                <img
                  className="w-100 position-absolute d-none d-md-block  team-img-bg left-0 top-0"
                  src={border2}
                  alt=""
                />
              </div>
              <div className="container h-100">
                <div className="team-mt-custom px-5">
                  <Slider {...settings}>
                    <div
                      className="p-sm-3 p-2 "
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      <div className="position-relative team-card">
                        <img
                          className="w-100 px-md-3 px-lg-4 px-xxl-2 pt-md-4 "
                          src={img1}
                          alt=""
                        />
                        <div className="team-card-text">
                          <h4 className="mb-0">insert name here</h4>
                          <p className="mb-0">Insert position here</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-sm-3 p-2 "
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      <div className="position-relative team-card">
                        <img
                          className="w-100 px-md-3 px-lg-4 px-xxl-2 pt-md-4 "
                          src={img1}
                          alt=""
                        />
                        <div className="team-card-text">
                          <h4 className="mb-0">insert name here</h4>
                          <p className="mb-0">Insert position here</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-sm-3 p-2 "
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      <div className="position-relative team-card">
                        <img
                          className="w-100 px-md-3 px-lg-4 px-xxl-2 pt-md-4 "
                          src={img1}
                          alt=""
                        />
                        <div className="team-card-text">
                          <h4 className="mb-0">insert name here</h4>
                          <p className="mb-0">Insert position here</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-sm-3 p-2 "
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      <div className="position-relative team-card">
                        <img
                          className="w-100 px-md-3 px-lg-4 px-xxl-2 pt-md-4 "
                          src={img1}
                          alt=""
                        />
                        <div className="team-card-text">
                          <h4 className="mb-0">insert name here</h4>
                          <p className="mb-0">Insert position here</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-sm-3 p-2 "
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      <div className="position-relative team-card">
                        <img
                          className="w-100 px-md-3 px-lg-4 px-xxl-2 pt-md-4 "
                          src={img1}
                          alt=""
                        />
                        <div className="team-card-text">
                          <h4 className="mb-0">insert name here</h4>
                          <p className="mb-0">Insert position here</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft_background d-md-none ">
          <div className="container  py-sm-4 py-3">
            <h2 className="nft_heading text-center pt-4">TEAM</h2>

            <div className="row justify-content-center">
              <div className="col-md-12 col-10">
                <Slider {...settings}>
                  <div
                    className="p-sm-3 p-2 "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <div className="position-relative">
                      <img
                        className="w-100 px-md-3 pt-md-4 "
                        src={img1}
                        alt=""
                      />
                      <div className="team-card-text">
                        <h4 className="mb-0">insert name here</h4>
                        <p className="mb-0">Insert position here</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-sm-3 p-2 "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <div className="position-relative">
                      <img
                        className="w-100 px-md-3 pt-md-4 "
                        src={img1}
                        alt=""
                      />
                      <div className="team-card-text">
                        <h4 className="mb-0">insert name here</h4>
                        <p className="mb-0">Insert position here</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-sm-3 p-2 "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <div className="position-relative">
                      <img
                        className="w-100 px-md-3 pt-md-4 "
                        src={img1}
                        alt=""
                      />
                      <div className="team-card-text">
                        <h4 className="mb-0">insert name here</h4>
                        <p className="mb-0">Insert position here</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-sm-3 p-2 "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <div className="position-relative">
                      <img
                        className="w-100 px-md-3 pt-md-4 "
                        src={img1}
                        alt=""
                      />
                      <div className="team-card-text">
                        <h4 className="mb-0">insert name here</h4>
                        <p className="mb-0">Insert position here</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-sm-3 p-2 "
                    data-aos="flip-right"
                    data-aos-duration="2000"
                  >
                    <div className="position-relative">
                      <img
                        className="w-100 px-md-3 pt-md-4 "
                        src={img1}
                        alt=""
                      />
                      <div className="team-card-text">
                        <h4 className="mb-0">insert name here</h4>
                        <p className="mb-0">Insert position here</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="next-arrow-team"
      style={{ ...style, display: "inline-block" }}
      onClick={onClick}
    >
      <img className="w-90" src={right} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="prev-arrow-team"
      style={{ ...style, display: "inline-block" }}
      onClick={onClick}
    >
      <img className="w-90" src={left} alt="" />
    </div>
  );
}
