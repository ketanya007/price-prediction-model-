
import React from "react";
import "./css/Team.css";
import pic from "../images/tejas.jpg";
import pic2 from "../images/badri.jpg";
import pic3 from "../images/shubh.jpg";
import pic4 from "../images/nayan.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Team = () => {

  return (

    <section class="section-white">

      <div class="">

        <div class="row">

          <div class="col-md-12 text-center">

            <h2 class="section-title">The Team Behind Pricewise</h2>
            <p className="teamText">The team behind PriceWise is dedicated to providing a valuable service to consumers by helping them make informed purchasing decisions and save money. Through their hard work and expertise, they have established PriceWise as a trusted and reliable price comparison platform that has helped countless people find great deals on products and services.</p>
          </div>

          <div class="col-sm-6 col-md-3">


            <div class="team-item">

              <img id="tejasimg" src={pic} alt="tejas" class="team-img" />
              <h3>Frontend Developer</h3>
              <div class="team-info"><p>Tejas Jain</p></div>
              {/* <p>  To get in touch with me , click on the button below :- </p> */}

              <ul class="team-icon">
                <li><a href="https://www.linkedin.com/in/tejas-jain-114288202/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="badriimg" src={pic2} alt="badri" class="team-img" />
              <h3>Fullstack and ML Developer</h3>
              <div class="team-info"><p>Badri vishal Singhal</p></div>
              {/* <p>To get in touch with me , click on the button below.</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/badri-vishal-singhal/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="shubhimg" src={pic3} alt="shubh" class="team-img" />
              <h3>Frontend Developer </h3>
              <div class="team-info"><p>Shubh gupta</p></div>
              {/* <p>To get in touch with me , click on the button below</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/shubh-gupta06/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>

          <div class="col-sm-6 col-md-3">

            <div class="team-item">

            <img id="nayanimg" src={pic4} alt="nayan" class="team-img" />
              <h3>Frontend Developer</h3>
              <div class="team-info"><p>Nayan gupta</p></div>
              {/* <p>To get in touch with me , click on the button below</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/nayan-gupta-86b782191" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

