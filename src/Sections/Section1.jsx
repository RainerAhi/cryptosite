import React, { useEffect, useState } from "react";
import CanvasContainer from "../CanvasContainer";

export const Section1 = () => {

    return (
      <>
        <section className="one">
        <div className="background-element-one" />
        <div className="background-element-two" />
          <div className="one-content" >
            <div className="one-content-left" >
              <div className="one-texts" >
                <h1 className="small-description grey one-text-top" >Discover the Power of YTFIN</h1>
                <h1 className="medium-headline white one-text-center" >Harnessing Blockchain to<br/> Monetize YouTube</h1>
                <h1 className="small-description grey one-text-bottom" >Transforming YouTube ad revenue into direct earnings for token holders.</h1>
              </div>
              <div className="one-buttons" >
                <button className="button-join-now" >
                  <h1>Join Now</h1>
                </button>
                <button className="button-buy-now" >
                  <h1>Buy Now</h1>
                </button>
              </div>
            </div>
            <div className="one-content-right" >
              <CanvasContainer />
              <div className="mobile-scroll" />
            </div>
          </div>
          <div class="logos">
      <div class="logos-slide">
        <img src="./logos/logo1.png" />
        <img src="./logos/logo2.png" />
        <img src="./logos/logo3.png" />
        <img src="./logos/logo4.png" />
        <img src="./logos/logo1.png" />
        <img src="./logos/logo2.png" />
        <img src="./logos/logo3.png" />
        <img src="./logos/logo4.png" />
      </div>

      <div class="logos-slide">
        <img src="./logos/logo1.png" />
        <img src="./logos/logo2.png" />
        <img src="./logos/logo3.png" />
        <img src="./logos/logo4.png" />
        <img src="./logos/logo1.png" />
        <img src="./logos/logo2.png" />
        <img src="./logos/logo3.png" />
        <img src="./logos/logo4.png" />
      </div>
    </div>
        </section>
      </>
    )
}