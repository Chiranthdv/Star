// import React, { useState } from "react";
// import "./MeetOurTeam.css";

// import Shubang from '../assets/team/PropulsionHead.jpg';
// import Vishwas from '../assets/team/Propulsion2.jpeg';
// import Arnav from '../assets/team/Propulsion1.jpg';
// import Abhishek from '../assets/team/Propulsion3.jpg';
// import AbhishekMadhu from '../assets/team/Payload1.jpg';
// import Samarjit from '../assets/team/Payload2.jpg';
// import Arman from '../assets/team/Design1.jpg';
// import Chiranth from '../assets/team/Web1.jpg';
// import Ayush from '../assets/team/Web2.jpg';
// import Jeeva from '../assets/team/Avionics1.jpg';
// import Piyush from '../assets/team/Avionics2.jpg';
// import Pranjala from '../assets/team/Avionics3.jpg';
// import Shreyas from '../assets/team/Avionics4.jpg';
// import Shreya2 from '../assets/team/Avionics5.jpg';
// import swati from '../assets/team/Design2.jpg';
// import krish from '../assets/team/Design3.jpg';
// import vinam from '../assets/team/non.jpg';

// import logo from "../assets/profile.png";

// const teamData = {
//   "Non Techanical Head of Operations": [
//       {name:"Vinamra Tiwari", role:"Non Techanical Head of Operations",image: vinam}
//   ],
//   "Propulsion": [
//     { name: "Shubhang Sethi", role: "Propulsion Head", image: Shubang },
//     { name: "Vishwas M", role: "Propulsion", image: Vishwas },
//     { name: "Arnav Emmanuel B", role: "Propulsion", image: Arnav },
//     { name: "Abhishek", role: "Propulsion", image: Abhishek },
//   ],
//   "Payload & Recovery": [
//     { name: "Team Head", role: "Payload & Recovery Head",image:null},
//     { name: "Abhishek Madhu Kumar", role: "Payload & Recovery", image: AbhishekMadhu },
//     { name: "Samarjit Singh", role: "Payload & Recovery", image: Samarjit },
//   ],
//   "Structures": [
//     { name: "Subha Priya", role: "Structures Head" },
//     { name: "Chavi", role: "Structures" },
//     { name: "Adith Ram Prasad", role: "Structures" },
//     { name: "Niel Misra", role: "Structures" },
//   ],
//   "Design": [
//     { name: "Utkarsh", role: "Design Team Head" },
//     { name: "Arman K B", role: "Design Team", image: Arman },
//     { name: "Shivani", role: "Design Team" },
//     { name: "Kushagra", role: "Design Team" },
//     { name: "Swati D", role: "Design Team", image: swati },
//     { name: "Krish Jain", role: "Design Team", image: krish },
//   ],
//   "Web Development": [
//     { name: "Team Head", role: "Web Developer Team Head" },
//     { name: "Chiarnth D V", role: "Web Developer", image: Chiranth },
//     { name: "Ayush Singh", role: "Web Developer", image: Ayush },
//   ],
//   "Avionics": [
//     { name: "Team Head", role: "Avionics Head" },
//     { name: "Jeevanandham", role: "Avionics Engineer", image: Jeeva },
//     { name: "Piyush Choudhary", role: "Avionics Engineer", image: Piyush },
//     { name: "Pranjala S", role: "Avionics Engineer", image: Pranjala },
//     { name: "Shreyas N Biradar", role: "Avionics Engineer", image: Shreyas },
//     { name: "Shreyas Gandigudi", role: "Avionics Engineer", image: Shreya2 },
//   ]
// };

// export default function MeetOurTeam() {
//   const [darkMode, setDarkMode] = useState(true);

//   return (
//     <div className={`team-page ${darkMode ? "dark" : "light"}`}>
//       <div className="team-header" style={{ position: 'relative' }}>
//         <a href="/">
//           <img src={logo} alt="Logo" className="top-left-logo" />
//         </a>
//         <button className="toggle-mode top-right-toggle" onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? "🌞" : "🌙"}
//         </button>
//         <h1 className="main-heading">Meet Our Team</h1>
//       </div>

//       {Object.entries(teamData).map(([department, members]) => {
//         const head = members.find(member => member.role.toLowerCase().includes("head"));
//         const others = members.filter(member => member !== head);

//         return (
//           <div key={department} className="department-section">
//             <h2>{department}</h2>

//             {head && (
//               <div className="head-card">
//                 {head.image && <img src={head.image} alt={head.name} className="head-photo" />}
//                 <div className="head-text">
//                   <h3>👑 {head.name}</h3>
//                   <p className="lead-badge">Team Lead</p>
//                   <p className="head-role">{head.role}</p>
//                 </div>
//               </div>
//             )}

//             <div className="member-card-grid">
//               {others.map((member, index) => (
//                 <div key={index} className="member-card">
//                   {member.image && <img src={member.image} alt={member.name} className="member-photo" />}
//                   <div className="member-text">
//                     <h4>{member.name}</h4>
//                     <p>{member.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React, { useState } from "react";
import "./MeetOurTeam.css";

// Import team images
import Shubang from "../assets/team/PropulsionHead.jpg";
import Vishwas from "../assets/team/Propulsion2.jpeg";
import Arnav from "../assets/team/Propulsion1.jpg";
import Abhishek from "../assets/team/Propulsion3.jpg";
import AbhishekMadhu from "../assets/team/PayLoad1.jpg";
import Samarjit from "../assets/team/PayLoad2.jpg";
import Arman from "../assets/team/Design1.jpg";
import Chiranth from "../assets/team/Web1.jpg";
import Ayush from "../assets/team/Web2.jpg";
import Jeeva from "../assets/team/Avionics1.jpg";
import Piyush from "../assets/team/Avionics2.jpg";
import Pranjala from "../assets/team/Avionics3.jpg";
import Shreyas from "../assets/team/Avionics4.jpg";
import Shreya2 from "../assets/team/Avionics5.jpg";
import swati from "../assets/team/Design2.jpg";
import krish from "../assets/team/Design3.jpg";
import vinam from "../assets/team/non.jpg";

// Placeholder image for missing photos
import Default from "../assets/team/Default.png";

// Logo for top-left
import logo from "../assets/profile.png";

const teamData = {
  "Non Techanical Head of Operations": [
    { name: "Vinamra Tiwari", role: "Non Techanical Head of Operations", image: vinam }
  ],
  "Propulsion": [
    { name: "Shubhang Sethi", role: "Propulsion Head", image: Shubang },
    { name: "Vishwas M", role: "Propulsion", image: Vishwas },
    { name: "Arnav Emmanuel B", role: "Propulsion", image: Arnav },
    { name: "Abhishek", role: "Propulsion", image: Abhishek }
  ],
  "Payload & Recovery": [
    { name: "Team Head", role: "Payload & Recovery Head", image: null },
    { name: "Abhishek Madhu Kumar", role: "Payload & Recovery", image: AbhishekMadhu },
    { name: "Samarjit Singh", role: "Payload & Recovery", image: Samarjit }
  ],
  "Structures": [
    { name: "Subha Priya", role: "Structures Head", image: null },
    { name: "Chavi", role: "Structures", image: null },
    { name: "Adith Ram Prasad", role: "Structures", image: null },
    { name: "Niel Misra", role: "Structures", image: null }
  ],
  "Design": [
    { name: "Utkarsh", role: "Design Team Head", image: null },
    { name: "Arman K B", role: "Design Team", image: Arman },
    { name: "Shivani", role: "Design Team", image: null },
    { name: "Kushagra", role: "Design Team", image: null },
    { name: "Swati D", role: "Design Team", image: swati },
    { name: "Krish Jain", role: "Design Team", image: krish }
  ],
  "Web Development": [
    { name: "Team Head", role: "Web Developer Team Head", image: null },
    { name: "Chiarnth D V", role: "Web Developer", image: Chiranth },
    { name: "Ayush Singh", role: "Web Developer", image: Ayush }
  ],
  "Avionics": [
    { name: "Team Head", role: "Avionics Head", image: null },
    { name: "Jeevanandham", role: "Avionics Engineer", image: Jeeva },
    { name: "Piyush Choudhary", role: "Avionics Engineer", image: Piyush },
    { name: "Pranjala S", role: "Avionics Engineer", image: Pranjala },
    { name: "Shreyas N Biradar", role: "Avionics Engineer", image: Shreyas },
    { name: "Shreyas Gandigudi", role: "Avionics Engineer", image: Shreya2 }
  ]
};

export default function MeetOurTeam() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`team-page ${darkMode ? "dark" : "light"}`}>
      <div className="team-header" style={{ position: "relative" }}>
        <a href="/">
          <img src={logo} alt="Logo" className="top-left-logo" />
        </a>
        <button
          className="toggle-mode top-right-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <h1 className="main-heading">Meet Our Team</h1>
      </div>

      {Object.entries(teamData).map(([department, members]) => {
        const head = members.find((member) =>
          member.role.toLowerCase().includes("head")
        );
        const others = members.filter((member) => member !== head);

        return (
          <div key={department} className="department-section">
            <h2>{department}</h2>

            {head && (
              <div className="head-card">
                <img
                  src={head.image || Default}
                  alt={head.name}
                  className="head-photo"
                />
                <div className="head-text">
                  <h3>👑 {head.name}</h3>
                  <p className="lead-badge">Team Lead</p>
                  <p className="head-role">{head.role}</p>
                </div>
              </div>
            )}

            <div className="member-card-grid">
              {others.map((member, index) => (
                <div key={index} className="member-card">
                  <img
                    src={member.image || Default}
                    alt={member.name}
                    className="member-photo"
                  />
                  <div className="member-text">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
