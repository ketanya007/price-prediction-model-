import React from "react";
import pic from "../images/house.png";
import pic1 from "../images/buyHome.webp";
import pic2 from "../images/sellHome.webp";
import pic3 from "../images/predictHome.webp";
import pic4 from "../images/recomendation.png";

import "./css/home.css";

export const Home = () => {
  return (
    <>
     
    <div class="cards">
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src={pic1} alt="wave" />
          </div>
          <div class="card-title">
            <h2>Buy a home</h2>
          </div>
          <div>
            <div class="card-description">
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </div>
            <div>
              <div class="card-actions">
                <a href="#" class="btn">
                  Browse homes
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src={pic2} alt="beach" />
          </div>
          <div class="card-title">
            <h2>Sell a home</h2>
          </div>
          <div>
            <div class="card-description">
            From preparing your home for showings to negotiating the best price, we're here to guide you every step of the way.
            </div>
            <div>
              <div class="card-actions">
                <a href="#" class="btn">
                  See your options
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src={pic3} alt="mountain" />
          </div>
          <div class="card-title">
            <h2>Predict price of home</h2>
          </div>
          <div>
            <div class="card-description">
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to predictiong price of a house.
            </div>
            <div>
              <div class="card-actions">
                <a href="#" class="btn">
                  Predict Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recomendation">
        <div class="recomendation1">
            <h5 class="recomendation-heading">Add your house to get listed</h5>
            <span class="recomendation-description">Sign in for a more personalized experience.</span>
            <br />
            <button class="recomendation-button">
                Sign in
            </button>
        </div>
        <div class="recomendation2">
           <img src={pic4} class="recommendationimg" />
        </div>
    </div>
   
    </>
  );
};
