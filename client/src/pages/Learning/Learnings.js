import db from "../../data/learningdb.json";
// import learning from "../../komponent/Learning/Learning";
import "./style.css";

const Learnings = db.learning;
return (
  <div className="learnings">
    <Header />
    <div>
      <h1 className="container" id="learningTitle">
        Here are some helpful financial advice:
      </h1>
      {Learnings.map((learning) => {
        return (
          <L
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

);

export default Learnings;

