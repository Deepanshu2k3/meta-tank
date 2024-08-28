import React from "react";
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
import NftSlider from "./NftSlider";

const Nft = () => {
  return (
    <section className="nft_background pt-5 scroll-snap" id="nfts">
      <div className="d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="nft_heading">NFTS</h2>
              <p className="nft_para">
                Here is a showcase display of some of the playable troops, a
                small sample taken from the different army factions:
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftfirstimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftsecondimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftthirdimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftfourth} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftfiveimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftsixthimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftsevenimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nfteightimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftnineimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nfttenimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img className="w-100 nft_img_hover " src={Nftelevenimg} alt="" />
            </div>
            <div className="col-xxl-2 col-3 pt-4">
              <img
                className="w-100 nft_img_hover "
                src={Nftimgtweleimg}
                alt=""
              />
            </div>
          </div>
        </div>{" "}
        <div className="position-relative pt-5 mt-5">
          <p className="border-text">
            <a href="">view more in marketplace</a>
          </p>
          <img className="w-100" src={bottomborder} alt="" />
        </div>
      </div>
      <div className="d-md-none">
        <NftSlider />
      </div>
    </section>
  );
};

export default Nft;
