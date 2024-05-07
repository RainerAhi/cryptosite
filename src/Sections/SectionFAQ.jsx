import React, { useRef, useState } from "react";
import Accordion from "../Accordion";

export const SectionFAQ = () => {
    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };
      
      return (
        <section className="seven">
          <div className="seven-spacing" />
          <div className="seven-content" >
            <h1 className="medium-headline white" >Facts & Answers</h1>
            <div className="seven-row" >
    
              <div className="seven-row-left" >
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
              </div>
    
              <div className="seven-row-right" >
                <div className="seven-socials" >
                  <h1 className="description white" >Follow us</h1>
                  <div className="seven-socials-icons" >
                    <i class="fa-brands fa-instagram" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')} ></i>
                    <i class="fa-brands fa-facebook" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
                    <i class="fa-brands fa-twitter" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
                    <i class="fa-brands fa-discord" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
                  </div>
                </div>
                <div className="seven-get-started" >
                  <h1 className="small-headline ready-to-get-started white" >Ready to get started?</h1>
                  <h1 className="small-text ready-to-get-started-description white" >Let's start with a conversation about how we can help you!</h1>
                  <div className="broneeri-kõne-seven" >
                    <h1 className="small-description white bold broneeri-kõne-text" >Buy Now</h1>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
    };