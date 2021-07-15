import React from "react";
import "./style.css";

const Blogs = () => {
  return (
    <div className="row blogWrapper">
      <div className="col-sm-12 blogCards">
        <div className="card mb-3 blogs">
          <div className="row no-gutters">
            <div className="embed-responsive col-md-4">
              <a href="https://www.nerdwallet.com/blog/generation-z-money-survey/">
                <img
                  src="/assets/genzblog.png"
                  className="card-img img-responsive embed-responsive-item"
                  alt="people starting at laptop"
                />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="bTitle"
                    href="https://www.nerdwallet.com/blog/generation-z-money-survey/"
                  >
                    Gen Zers: How America's Newest Adults Are Doing Money
                  </a>
                </h5>
                <p className="card-text">
                  Learn about Gen Z's financial situation and money
                  misconceptions, as well as their feelings about their
                  finances.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 blogs">
          <div className="row no-gutters">
            <div className="embed-responsive col-md-4">
              <a href="https://www.ramseysolutions.com/budgeting/the-truth-about-budgeting">
                <img
                  src="/assets/budgettips.png"
                  className="card-img img-fluid embed-responsive-item img2"
                  alt="15 budget tips"
                />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="bTitle"
                    href="https://www.ramseysolutions.com/budgeting/the-truth-about-budgeting"
                  >
                    15 Practical Budgeting Tips
                  </a>
                </h5>
                <p className="card-text">
                  A budget doesn't limit your freedom--it gives you freedom!
                  It's really all about being intentional with where your money
                  goes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 blogs">
          <div className="row no-gutters">
            <div className="embed-responsive col-md-4">
              <a href="https://www.nerdwallet.com/article/finance/what-makes-up-credit-score?trk_channel=web&trk_copy=What%20Factors%20Affect%20Your%20Credit%20Scores%3F&trk_element=hyperlink&trk_elementPosition=2&trk_location=PostList&trk_subLocation=next-steps">
                <img
                  src="/assets/credittips.png"
                  class="card-img img-fluid embed-responsive-item img3"
                  alt="mom and daughter with piggy banks"
                />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="bTitle"
                    href="https://www.nerdwallet.com/article/finance/what-makes-up-credit-score?trk_channel=web&trk_copy=What%20Factors%20Affect%20Your%20Credit%20Scores%3F&trk_element=hyperlink&trk_elementPosition=2&trk_location=PostList&trk_subLocation=next-steps"
                  >
                    What Factors Affect Your Credit Score?
                  </a>
                </h5>
                <p className="card-text">
                  Understand factors that do and don't affect your credit and
                  use your newfound knowledge!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
