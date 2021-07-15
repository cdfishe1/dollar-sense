import React from 'react'
import './style.css'

const LearningBlogs = () => {
    return (
        <div className="row">
<div className="col-sm-12 blogCards">
<div className="card mb-3 blogs">
    <div className="row no-gutters">
        <div className="embed-responsive col-md-4">
           <a href="https://www.investopedia.com/articles/00/082100.asp">
         <img src="/assets/genzblog.png" className="card-img img-fluid embed-responsive-item" alt="people starting at laptop"/>
         </a> 
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><a className="bTitle" href="https://www.investopedia.com/articles/00/082100.asp">Don't Chase a Hot Tip</a></h5>
                <p className="card-text">Regardless of the source, never accept a stock tip as valid. Always do your own analysis on a company before investing your hard-earned money.</p>

            </div>
        </div>
    </div>
</div>
<div className="card mb-3 blogs" >
  <div className="row no-gutters">
    <div className="embed-responsive col-md-4">
      <a href="https://www.regions.com/Insights/Personal/Personal-Finances/budgeting-and-saving/10-Best-Ways-to-Save-Money">
      <img src="/assets/budgettips.png" className="card-img img-fluid middleImg embed-responsive-item" alt="15 budget tips"/>
      </a>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><a className="bTitle" href="https://www.regions.com/Insights/Personal/Personal-Finances/budgeting-and-saving/10-Best-Ways-to-Save-Money">Pay Yourself First</a></h5>
        <p className="card-text">Set up an auto debit from your checking account to your savings account each payday. Whether it's $50 every two weeks or $500, don't cheat yourself out of a healthy long-term savings plan.</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 blogs" >
    <div className="row no-gutters">
        <div className="embed-responsive col-md-4">
           <a href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast">
         <img src="/assets/credittips.png" class="card-img img-fluid embed-responsive-item" alt="mom and daughter with piggy banks"/>
         </a> 
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><a className="bTitle" href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast">Pay bills on time</a></h5>
                <p className="card-text">Payment history is the single biggest factor that affects credit scores, and late payments can stay on your credit reports for 7½ years.</p>

            </div>
        </div>
    </div>
</div>
       
</div>
</div>
    )
}

export default LearningBlogs