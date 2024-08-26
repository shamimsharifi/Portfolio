// import project1_img from '../assets/project_1.svg'
// import project2_img from '../assets/project_2.svg'
// import project3_img from '../assets/project_3.svg'
// import project4_img from '../assets/project_4.svg'
// import project5_img from '../assets/project_5.svg'
// import project6_img from '../assets/project_6.svg'

// const mywork_data = [
//     {
//         w_no:1,
//         w_name:"Web design",
//         w_img:project1_img
//     },
//     {
//         w_no:2,
//         w_name:"Web design",
//         w_img:project2_img
//     },
//     {
//         w_no:3,
//         w_name:"Web design",
//         w_img:project3_img
//     },
//     {
//         w_no:4,
//         w_name:"Web design",
//         w_img:project4_img
//     },
//     {
//         w_no:5,
//         w_name:"Web design",
//         w_img:project5_img
//     },
//     {
//         w_no:6,
//         w_name:"Web design",
//         w_img:project6_img
//     },
// ]

// export default mywork_data;
import project_1 from "../assets/project1.webp";
import project_2 from "../assets/project11.webp";
import project_3 from "../assets/project111.webp";
import project_4 from "../assets/project1111.webp";
import project_5 from "../assets/project11111.webp";
import project_6 from "../assets/project2.webp";
import project_7 from "../assets/project22.webp";
import project_8 from "../assets/project222.webp";
import project_9 from "../assets/project2222.webp";
import project_10 from "../assets/project22222.webp";

const mywork_data = [
  {
    projectTitle: "Market Place",
    description:
      "Market Place Application: A full-stack platform designed to enhance user engagement through real-time chat and item listings. Built with React for a responsive front-end and Flask for an efficient back-end, it supports user authentication and dynamic interactions. Users can securely sign up, chat, and manage buy or sell listings, making it an ideal virtual marketplace. The application leverages technologies like React-Bootstrap for styling and Flask-SocketIO for live communications, ensuring a seamless and interactive user experience.",
    images: [project_1, project_2, project_3, project_4, project_5],
  },
  {
    projectTitle: "Pet Photography",
    description:
      "Pet Photography Platform: Developed in collaboration with a fellow software engineer, this innovative web application connects pet owners with professional photographers to easily schedule and manage photo sessions. Built using Flask and SQLAlchemy on the backend and React on the frontend, it features robust user authentication, detailed profile management, and interactive photo galleries. The platform serves both photographers and pet owners with tools tailored to each user role, facilitating appointment scheduling, photo viewing, and session feedback. Designed for responsiveness, it ensures a seamless user experience across all devices, making it a valuable tool for the pet photography community.",
    images: [project_6, project_7, project_8, project_9, project_10],
  },
];
export default mywork_data;
