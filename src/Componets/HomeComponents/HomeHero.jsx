import React from "react";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <div className="hero-back text-white Rubik">
      <div className="container py-hero">
        {/* top hero */}
        <div className="row">
          <div className="col-lg-6 my-auto">
            <div className="d-flex outer-border align-items-center">
              <div className="inner-border ">30% SAVE</div>
              <span className="px-3">For the Black Friday weekend</span>
            </div>

            <h1>
              We’re Help <br />
              To Build Your <br />
              Dream Project
            </h1>

            <button className="Contact-btn d-flex align-items-center text-white">
              <div className="p-2 ">
                Contact Us{" "}
                <span className="ps-4">
                  <img src="../assets/Arrow Right.png" alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="col-lg-6 mt-992">
            <img src="../assets/Hero.png" alt="" className="w-100 hero-image" />
          </div>
        </div>
        {/* top hero ends */}
        
/

        {/* bottom hero */}
        <div className="row">
        <div className="col-lg-6 ">
            <img src="../assets/Hero1.png" alt="" className="w-100 hero-image" />
          </div>
          
          <div className="col-lg-6 mt-992 my-auto">
 

            <h3>
            Why you should choose <br /> Techlivion
            </h3>

            <p className="Hero-para">Choose Techlivion for expert software development, tailored IT services, and a proven track record of delivering innovative solutions.</p>

            <button className="Contact-btn d-flex align-items-center text-white">
              <div className="px-3 py-2 ">
              Learn More
         
              </div>
            </button>
          </div>
  
        </div>
        {/* bottom hero ends */}


      </div>
    </div>
  );
}
