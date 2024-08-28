import React from "react";
import gameplay from "./assets/img/gameplay-border.png";
import video from "./assets/video/MetaTanks Video.mp4";

const Gameplay = () => {
  return (
    <>
      <section className="gameplay-bg py-sm-5 py-4 scroll-snap" id="gameplay">
        <div className="container pb-5">
          <div className="row">
            <div className="col-12 text-center px-sm-5">
              <p className="normal-para py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="position-relative ">
                <div className="">
                  <video
                    className="w-100 h-100  p-2  z-1 object-fit-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  >
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                  </video>
                </div>
                <h2 className="font-xxl ff-normandia font-xs-19 text-white position-absolute gameplay-heading">
                  gameplay
                </h2>
                <div className="py-1">
                  <img
                    className="w-100 position-absolute top-0 left-0"
                    src={gameplay}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gameplay;
