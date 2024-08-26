// import React from "react";
// import "./Mywork.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

// const Mywork = () => {
//   return (
//     <div className="mywork">
//       <div className="mywork-title">
//         <h1>My latest work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work, index) => {
//           return <img key={index} src={work.w_img} alt="" />;
//         })}
//       </div>
//       <div className="mywork-showmore">
//         <p>Show More</p>
//         <img src={arrow_icon} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Mywork;

import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      {mywork_data.map((project, index) => (
        <div key={index} className="project-container">
          <h2>{project.projectTitle}</h2>
          <p>{project.description}</p>
          <div className="images-container">
            {project.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`Project ${index + 1} Image ${imgIndex + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show more icon" />
      </div>
    </div>
  );
};

export default Mywork;
