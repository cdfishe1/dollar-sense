import db from "../../data/learningdb.json";
import Learning from "../../komponent/Learning/Learning";
import "./style.css";


const Learnings = () => {
  const learn = db.learnings;
  console.log(learn);
  return (
    <div className="learnings">
      {/* <Header /> */}
      <div>
        <h1 className="container" id="learningTitle">
          Here are some helpful financial advice:
        </h1>
        {learn.map((learning) => {
          return (
            <Learning
              id={learning.id}
              title={learning.title}
              news={learning.news}
              source={learning.source}
              date={learning.date}
            />
          );
        })}
  
  </div>
  </div>
  )
  }

export default Learnings;

