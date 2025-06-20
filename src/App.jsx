import React from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import CardBox from './components/CardBox.jsx';
import SocialMediaSection from './components/SocialMediaSection.jsx';
import Conferences from './pages/Conferences.jsx';
import profilePic from './assets/profile.png';   // adjust if needed
//import background from './assets/background.avif';
import { Routes, Route } from 'react-router-dom'; //added
import StardustBackground from './components/StardustBackground.jsx';


const demoProfile = {
  title:"Welcome to ",
  name: "S.T.A.R.D.U.ST_RIT Link Tree",
  bio: "Space Team of Ramaiah Institute of Technology, Bangalore (Space Technology And Research Division Under Students)",
   profileImage: profilePic,

};
export default function App() {
  return (
    <>
      <StardustBackground />
      <div
        style={{
          minHeight: '100vh',
          padding: '1rem',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflowY: 'auto',
          position: 'relative', // Important to stack over canvas
          zIndex: 1,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProfileCard profile={demoProfile} />
                <CardBox icon="🎓" title="Who We Are" href="https://www.teamstardust.in/" />
                <CardBox icon="📢" title="Orientations" href="https://www.teamstardust.in/team" />
                <CardBox icon="🤝" title="Meet Our Team" href="https://www.teamstardust.in/divisions" />
                <CardBox icon="🛠" title="Workshops" href="https://www.teamstardust.in/gallery" />
                <CardBox icon="🎤" title="Conferences" href="/conferences" />
                <SocialMediaSection />
              </>
            }
          />
          <Route path="/conferences" element={<Conferences />} />
        </Routes>
      </div>
    </>
  );
}

// export default function App() {
//   return (
//     <div
//       style={{
//   minHeight: '100vh',
//   padding: '1rem',

//   backgroundSize: 'cover',
//   backgroundAttachment: 'fixed', // ✅ Add this line
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   overflowY: 'auto', // ✅ Ensure content scrolls if needed
// }}
//     >
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <ProfileCard
//                 profile={demoProfile}
//                 style={{ color: 'white',maxWidth: '400px',margin: '2rem auto',padding: '1rem',borderRadius: '12px',textAlign: 'center',fontFamily: 'Arial, sans-serif',}}/>
//               <CardBox icon="🎓" title="Who We Are" href="https://example.com/who-we-are" />
//               <CardBox icon="📢" title="Orientations" href="https://example.com/orientations" />
//               <CardBox icon="🤝" title="Meet Our Team" href="https://example.com/meet-our-team" />
//               <CardBox icon="🛠" title="Workshops" href="https://example.com/workshops" />
//               <CardBox icon="🎤" title="Conferences" href="/conferences"  />
//               <SocialMediaSection />
//             </>
//           }
//         />
//         <Route path="/conferences" element={<Conferences />} />
//       </Routes>
//     </div>
//   );
// }
