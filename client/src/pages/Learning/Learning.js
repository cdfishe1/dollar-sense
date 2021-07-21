import React from "react";
import "./style.css";
import LearningBlogs from "../../komponent/LearningBlogs/LearningBlogs";

const Learning = () => {
 

  return (
    <div className="dashboard">
      <div>
        <h3 id="blogTitle" className="mb-4 mt-4">Learn About Finance
        </h3>
      
        <div>
          
          <LearningBlogs />
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        
      </div>
    </div>
  );
};

export default Learning;
