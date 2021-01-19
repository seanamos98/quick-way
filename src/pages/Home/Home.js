import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Delivery from "../../components/Images/vectorfair210140.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__showcase">
        <img className="home__showcaseImg" src={Delivery} alt="delivery man" />

        <div>
          <h1>your parcels delivered.</h1>
          <p>better, cheaper, quicker</p>
          <span className="home__quick">quick</span>
          <span className="home__way">way</span>
        </div>
      </div>
      <main className="home__main">
        <div className="home__card">
          <h2>for individuals</h2>
          <p>want to send regular parcels as individual customer ?</p>
          <div>
            <ArrowForwardIcon className="home__icon" />
            <span>
              <a href="/">Get started</a>
            </span>
          </div>
        </div>
        <div className="home__card">
          <h2>for individuals</h2>
          <p>want to send regular parcels as individual customer ?</p>
          <div>
            <ArrowForwardIcon />
            <span>
              <a href="/">Get started</a>
            </span>
          </div>
        </div>
        <div className="home__card">
          <h2>for individuals</h2>
          <p>want to send regular parcels as individual customer ?</p>
          <div>
            <ArrowForwardIcon />
            <span>
              <a href="/">Get started</a>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
