import React from "react";

const Docs = () => {
  return (
    <>
      <section
        className="docs-section pb-sm-5 pt-sm-4 py-4 scroll-snap"
        id="docs"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-12 text-center px-xxl-5">
              <h2 className="heading mt-2">DOCS</h2>
              <p className="normal-para">
                For further details on MetaTank’s Tokenomics, Whitepaper, Lore
                and more, please click the button below:
              </p>
              <div className="mt-4">
                <button className="common-btn">VIEW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Docs;
