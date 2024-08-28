import React from "react";
import video from "./assets/video/MetaTanks Video.mp4";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="scroll-snap">
        <div className="w-100 h-100 " id="home">
          <video
            className="w-100 h-100 min-height-custom z-1 position-absolute  object-fit-cover"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
          </video>
        </div>

        <div className=" pt-xxl-3 pb-xxl-5  hero-overlay hero-section-height d-flex flex-column justify-content-between">
          <div className="text-end px-5 pt-3 z-positive-1 d-none d-xxl-block">
            <button className="common-btn">Enter game</button>
          </div>
          <div className="">
            <Header />
          </div>
          <div className="container d-flex flex-column flex-grow-1 h-100 justify-content-between pb-4 pb-md-0">
            <div className="row justify-content-center justify-content-xl-start">
              <div className="col-lg-8 col-12 text-center">
                <p className="normal-para pe-xl-5 pt-5 pt-xxl-3">
                  Welcome to MetaTank, the play-to-earn story-driven wargame set
                  in an ever-expansive universe. The battle for supremacy and
                  control over compound-U has begun. Choose your faction, rise
                  through the ranks and forge your legend in the Theatre of War.
                </p>
                <p className="normal-para pe-xl-5 pt-sm- 3 ">
                  Using blockchain technology, players can earn and participate
                  in an ecosystem that will continue to evolve over time.
                </p>
              </div>
            </div>
            <div className="row pt-4 pt-lg-0">
              <div className="col-12 pt-4 pb-4 pb-xxl-0 ">
                <div className="row mw-700 mx-auto  mx-xl-0 align-items-center custom-border text-center text-xl-start ">
                  <div className="col-xl-4 col-12 px-0">
                    <div className="custom-border-right ">
                      <p className="small-para mb-0 custom-border-bottom px-2 py-3 py-xl-2 custom-padding">
                        Ticker Symbol: SMTNK{" "}
                        <span className="d-xl-none d-block fs-xs-14">
                          BEP-20 Address:
                          Ox98w9abeawn987awhe9nawd9jaw9..nhjhH982
                        </span>
                      </p>
                      <p className="small-para mb-0 px-2 py-3 py-xl-2 custom-padding">
                        Telegram: Metatank Offical
                        <span className="d-xl-none d-block fs-xs-14">
                          Discord @MetaTank_Officail
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-12 px-0">
                    <div className="custom-border-right ">
                      <p className="small-para mb-0 px-2 py-3 py-xl-2  custom-border-bottom d-none d-xl-block">
                        BEP-20 Address: Ox98w9abeawn987awhe9nawd9jaw9..nhjhH982
                      </p>
                      <p className="small-para mb-0 px-2 py-3 py-xl-2  d-none d-xl-block">
                        Discord @MetaTank_Officail
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-12 px-0">
                    <div className="  custom-border-top pt-3 px-2">
                      <button className="text-uppercase common-btn">
                        trade now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
