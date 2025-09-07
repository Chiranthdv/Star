import React from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import CardBox from './components/CardBox.jsx';
import SocialMediaSection from './components/SocialMediaSection.jsx';
import Conferences from './pages/Conferences.jsx';
import MeetOurTeam from './pages/MeetOutTeam.jsx';
import WorkShops from './pages/WorkShops.jsx';
import Orientations from './pages/Orientations.jsx';
import profilePic from './assets/profile.png';   // adjust if needed
//import background from './assets/background.avif';
import { Routes, Route } from 'react-router-dom'; //added
import StardustBackground from './components/StardustBackground.jsx';
import ScrollToTop from  './components/ScrollToTop.jsx';

const demoProfile = {
  title:"Welcome to ",
  name: "S.T.A.R.D.U.ST_RIT Link Tree",
  bio: "Space Team of Ramaiah Institute of Technology, Bangalore (Space Technology And Research Division Under Students)",
   profileImage: profilePic,

};
export default function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
  <Route
    path="/"
    element={
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
            position: 'relative',
            zIndex: 1,
          }}
        >
          <ProfileCard profile={demoProfile} />
          <CardBox icon="🎓" title="Who We Are" href="https://www.teamstardust.in/" />
          <CardBox icon="📢" title="Orientations" href="/orientations" />
          <CardBox icon="🤝" title="Meet Our Team" href="/meetourteam" />
          <CardBox icon="🛠" title="Workshops" href="/workshops" />
          <CardBox icon="🎤" title="Conferences" href="/conferences" />
          <SocialMediaSection />
        </div>
      </>
    }
  />

  {/* Other routes have separate layouts */}
  <Route path="/conferences" element={<Conferences />} />
  <Route path="/meetourteam" element={<MeetOurTeam />} />
  <Route path="/workshops" element={<WorkShops/>} />
  <Route path="/orientations" element={< Orientations/>}/>
</Routes>
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
