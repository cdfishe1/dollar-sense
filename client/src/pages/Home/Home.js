import React from "react";
import "./style.css";
import Header from "../../komponent/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeWrapper">
      
      <div className="row container aboutUs">
        <div className="col-7">
          <h1 id="homeIntro">Take Control of Your Money</h1>
          <p>
            <i>Welcome, we know financial literacy isn't something that is taught in schools. With dollarSense we hope to help you budget, save, and learn. We think the earlier you learn the fundamentals, you'll be better off when you make those financial decisions later.   </i>
          </p>
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
