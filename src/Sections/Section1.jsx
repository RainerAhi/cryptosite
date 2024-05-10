import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import CanvasContainer2 from "../CanvasContainer2";

export const Section1 = () => {

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);

  useEffect(() => {
      const observerOne = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisibleOne(true);
              observerOne.disconnect();
          }
      });

      const observerTwo = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisibleTwo(true);
              observerTwo.disconnect();
          }
      });

      const observerThree = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleThree(true);
            observerThree.disconnect();
        }
      });

      const observerFour = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleFour(true);
            observerFour.disconnect();
        }
      });

      const observerFive = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleFive(true);
            observerFive.disconnect();
        }
      });

      const observerSix = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleSix(true);
            observerSix.disconnect();
        }
      });

      if (oneRef.current) {
          observerOne.observe(oneRef.current);
      }

      if (twoRef.current) {
          observerTwo.observe(twoRef.current);
      }

      if (threeRef.current) {
        observerThree.observe(threeRef.current);
      }

      if (fourRef.current) {
        observerFour.observe(fourRef.current);
      }

      if (fiveRef.current) {
        observerFive.observe(fiveRef.current);
      }

      if (sixRef.current) {
        observerSix.observe(sixRef.current);
      }

      return () => {
          if (oneRef.current) {
              observerOne.unobserve(oneRef.current);
          }
          if (twoRef.current) {
              observerTwo.unobserve(twoRef.current);
          }
          if (threeRef.current) {
            observerThree.unobserve(threeRef.current);
          }
          if (fourRef.current) {
            observerFour.unobserve(fourRef.current);
          }
          if (fiveRef.current) {
            observerFive.unobserve(fiveRef.current);
          }
          if (sixRef.current) {
            observerSix.unobserve(sixRef.current);
          }
      };
  }, []);

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
                  <h1 className="small-description white" >Join Now</h1>
                </button>
                <button className="button-buy-now" >
                  <h1 className="small-description white" >Buy Now</h1>
                </button>
              </div>
            </div>
            <div className="one-content-right" >
              <CanvasContainer />
              <div className="mobile-scroll" />
            </div>
          </div>
          <div className="logos">
            <div className="logos-slide">
              <img src="./logos/logo1.png" />
              <img src="./logos/logo2.png" />
              <img src="./logos/logo3.png" />
              <img src="./logos/logo4.png" />
              <img src="./logos/logo1.png" />
              <img src="./logos/logo2.png" />
              <img src="./logos/logo3.png" />
              <img src="./logos/logo4.png" />
            </div>

            <div className="logos-slide">
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

        <section className="two" >
            <div className="two-content" >
                <div className={`two-top-text-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
                    <h1 className="medium-headline two-top-title white" >Unlocking the Potential of Community</h1>
                    <h1 className="small-description two-top-description grey" >At YTFIN, we harness the power of community to revolutionize content monetization. By supporting YouTube creators, our community members enhance revenue generation, which boosts rewards for everyone involved. YTFIN serves as a catalyst, empowering you to drive success and share in the collective profits. Together, we create a sustainable cycle of success.</h1>
                    <button className="button-start-earning" >
                        <h1 className="small-description white" >Start Earning with YTFIN</h1>
                    </button>
                </div>
                <div className={`two-containers ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
                    <h1 className="medium-headline white two-top-title" >Steps for Community Success</h1>
                    <div className="two-container-row" >
                        <div className="two-row-one" >
                            <i className="fa-regular fa-credit-card"></i>
                            <div className="row-text-content" >
                                <h1 className="smallest-headline white" >Buying Tokens</h1>
                                <h1 className="small-description grey" >Acquire YTFIN tokens, which will be used to invest a percentage into channels and content creators, amplifying their impact and fostering a thriving digital content community.</h1>
                            </div>
                        </div>
                        <div className="two-row-two" >
                            <div className="row-text-content" >
                                <h1 className="smallest-headline white" >Maximizing Engagement</h1>
                                <h1 className="small-description grey" >Delve into videos and ignite the buzz. Your engagement through likes, shares, and views isn't merely about grabbing attention; it fuels the revenue stream. Increased visibility translates to higher advertising earnings. Easy, isn't it?</h1>
                            </div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="two-container-one" >
                        <i className="fa-solid fa-arrow-trend-up"></i>
                        <div className="row-text-content" >
                            <h1 className="smallest-headline white" >Sustainable Ecosystem</h1>
                            <h1 className="small-description grey" >All advertising revenue is consolidated and distributed monthly in the form of YTFIN tokens. A fraction of this income is then reinvested into both new and established YouTube content, fostering a self-perpetuating loop of investment and yield.</h1>
                        </div>
                    </div>
                    <div className="two-container-two" >
                        <i className="fa-solid fa-globe"></i>
                        <div className="row-text-content" >
                            <h1 className="smallest-headline white" >Empowering Growth</h1>
                            <h1 className="small-description grey" >Each month, we consolidate all the advertising revenue generated and distribute it as YTFIN tokens among our dedicated contributors. But that’s not where the journey ends. We reinvest a portion of these funds to craft even more captivating YouTube content. It's a perpetual cycle of excellence, amplifying our impact with each turn—more videos, broader viewership, and increased prosperity for all involved!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="six" >
            <div className="six-content" >
                <CanvasContainer2 />
                <div className="mobile-scroll" />
            </div>
        </section>

        <section className="three" >
            <div className="three-content" >
                <div className={`three-top-text-content ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                    <h1 className="medium-headline three-top-title white" >Unleash the Power of <span className="headline-blue" >YTFIN</span></h1>
                    <h1 className="small-description three-top-description grey" >YTFIN revolutionizes content monetization by harnessing YouTube's ad revenue to directly enrich its token holders. Explore the thriving video streaming market landscape and secure a share in its expansion. With YTFIN, your engagement translates into earnings, fostering a vibrant ecosystem where interactions drive financial gains. Embrace YTFIN investment opportunities to seize the opportunities of the digital content revolution now.</h1>
                </div>
                <div className={`three-bottom-content ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
                    <h1 className="medium-headline three-top-title white" >The Future of Fintech</h1>
                    <div className="three-bottom-points" >
                        <div className="three-bottom-point" >
                            <div className="three-icon" ><h1 className="small-description bold" >1</h1></div>
                            <h1 className="smallest-headline white" >Effortless Earning</h1>
                        </div>
                        <div className="three-border" />
                        <div className="three-bottom-point" >
                            <div className="three-icon redbackground" ><h1 className="small-description bold" >2</h1></div>
                            <h1 className="smallest-headline white" >Reliable Returns</h1>
                        </div>
                        <div className="three-border" />
                        <div className="three-bottom-point" >
                            <div className="three-icon" ><h1 className="small-description bold" >3</h1></div>
                            <h1 className="smallest-headline white" >Secure Investments</h1>
                        </div>
                    </div>
                    <h1 className="small-description three-bottom-description grey" >YTFIN's unique model aligns the interests of creators, advertisers, and investors</h1>
                </div>
            </div>
        </section>

        <section className="four" >
            <div className="four-content" >
                <div className={`four-top-text-content ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef}>
                    <h1 className="medium-headline four-title white" >Unleash the Power of Passive Income</h1>
                    <h1 className="small-description four-top-description grey" >YTFIN is spearheading a transformative approach to securing your financial future. Through the direct reinvestment of YouTube's advertising revenue into the token, YTFIN offers an unparalleled opportunity for investors to generate passive income while actively contributing to the expansion of the video streaming sector.</h1>
                </div>
                <div className={`four-bottom ${isVisibleSix ? 'visible' : ''}`} ref={sixRef}>
                    <h1 className="medium-headline four-title white" >Invest In YTFIN Today</h1>
                    <div className="four-bottom-list" >
                        <div className="four-bottom-left" >
                            <h1 className="small-description four-bottom-description grey" >YTFIN's groundbreaking approach is set to revolutionize the fintech scene. Through leveraging the immense potential of YouTube's advertising revenue, YTFIN presents an unparalleled chance for investors to generate passive income while actively engaging in the thriving video ecosystem.</h1>
                        </div>
                        <div className="four-bottom-right" >
                            <div className="four-bottom-point" >
                                <div className="three-icon redbackground" ><i className="fa-solid fa-coins"></i></div>
                                <h1 className="description four-bottom-text white" >Invest & Earn</h1>
                            </div>
                            <div className="four-bottom-point" >
                                <div className="three-icon" ><i className="fa-solid fa-hand-holding-dollar"></i></div>
                                <h1 className="description four-bottom-text  white" >Grow & Hold</h1>
                            </div>
                            <div className="four-bottom-point" >
                                <div className="three-icon redbackground" ><i className="fa-solid fa-wallet"></i></div>
                                <h1 className="description four-bottom-text  white" >Start Now & Hold</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="five" >
            <div className="five-content" >
                <h1 className="reveal-type medium-headline five-text grey" >Experience the forefront of Fintech<br/> innovation with YTFIN. Our<br/> pioneering token model ingeniously<br/> funnels YouTube's ad revenue<br/> into our ecosystem, ensuring a<br/> consistent and sustainable<br/> stream of passive income for our <br/>esteemed investors.</h1>
            </div>
        </section>
      </>
    )
}