// import React from 'react';
// import CardBox from './CardBox'; // Your CardBox component

// export default function SocialMediaSection() {
//   const socialLinks = [
//     { icon: '🌐', title: 'StartDust Website', url: 'https://www.teamstardust.in/' },
//     { icon: '💬', title: 'Telegram', url: 'https://t.me/teamstardust' },
//     { icon: '🎮', title: 'Discord', url: 'https://discord.gg/teamstardust' },
//     { icon: '🔗', title: 'LinkedIn', url: 'https://www.linkedin.com/company/rit-stardust/' },
//   ];

//   return (
//     <div style={{ maxWidth: '600px', margin: '2rem auto', color: 'white', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}> StarDust Socials</h2>
//       {socialLinks.map(({ icon, title, url }, index) => (
//         <a 
//           key={index} 
//           href={url} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           style={{ textDecoration: 'none' }}
//         >
//           <CardBox icon={icon} title={title} />
//         </a>
//       ))}
//     </div>
//   );
// }


// import React from 'react';
// import CardBox from './CardBox';
// import { FaGlobe, FaTelegramPlane, FaDiscord, FaLinkedin } from 'react-icons/fa';

// export default function SocialMediaSection() {
//   const socialLinks = [
//     { icon: <FaGlobe />, title: 'StartDust Website', url: 'https://www.teamstardust.in/' },
//     { icon: <FaTelegramPlane />, title: 'Telegram', url: 'https://t.me/teamstardust' },
//     { icon: <FaDiscord />, title: 'Discord', url: 'https://discord.gg/teamstardust' },
//     { icon: <FaLinkedin />, title: 'LinkedIn', url: 'https://www.linkedin.com/company/rit-stardust/' },
//   ];

//   return (
//     <div
//       style={{
//         maxWidth: '600px',
//         margin: '2rem auto',
//         color: 'white',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>StarDust Socials</h2>
//       {socialLinks.map(({ icon, title, url }, index) => (
//         <a
//           key={index}
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ textDecoration: 'none' }}
//         >
//           <CardBox icon={icon} title={title} />
//         </a>
//       ))}
//     </div>
//   );
// }

import React, { useState } from 'react';
import CardBox from './CardBox';
import { FaGlobe, FaTelegramPlane, FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialMediaSection() {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    { icon: <FaGlobe />, title: 'StartDust Website', url: 'https://www.teamstardust.in/' },
    { icon: <FaTelegramPlane />, title: 'Telegram', url: 'https://t.me/teamstardust' },
    { icon: <FaDiscord />, title: 'Discord', url: 'https://discord.gg/teamstardust' },
    { icon: <FaLinkedin />, title: 'LinkedIn', url: 'https://www.linkedin.com/company/rit-stardust/' },
  ];

  // Icon data for hoverable icons below
  const iconRow = [
    { icon: <FaInstagram />, color: '#E1306C', url: 'https://www.instagram.com/rit_stardust?igsh=ZWdrYXB4N3NsNWxw', name: 'insta' },
    { icon: <FaTelegramPlane />, color: '#0088cc', url: 'https://t.me/teamstardust', name: 'telegram' },
    { icon: <FaLinkedin />, color: '#0A66C2', url: 'https://www.linkedin.com/company/rit-stardust/', name: 'linkedin' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>StarDust Socials</h2>

      {/* CardBox style icons */}
      {socialLinks.map(({ icon, title, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <CardBox icon={icon} title={title} />
        </a>
      ))}

      {/* Centered icon row with hover zoom */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          fontSize: '2rem',
        }}
      >
        {iconRow.map(({ icon, color, url, name }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: color,
              transform: hovered === name ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.3s ease, filter 0.3s ease',
              filter: hovered === name ? 'brightness(1.2)' : 'none',
              display: 'inline-block',
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
