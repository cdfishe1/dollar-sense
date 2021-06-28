import React from "react";
import "./style.css";
import Header from "../../komponent/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Header />
      <div className="row container aboutUs">
        <div className="col-7">
          <h1 id="homeIntro">Helping You Reach Financial Independence</h1>
        </div>
        {/* <div className="col-4">
          <p>Helping You Reach Financial Independence</p>
        </div> */}

        <div id="btnWrapper">
          <Link to="/signup">
            <button id="home1" className="homeBtn">
              I'M NEW TO DOLLARSENSE
            </button>
          </Link>

          <Link to="/login">
            <div>
              <button id="home2" className="homeBtn">
                LOG INTO MY ACCOUNT
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
