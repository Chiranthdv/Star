// import React from 'react';

// export default function CardBox({ icon, title }) {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '4rem', // spacing between icon and text
//         margin: '1rem auto',
//         padding: '0.6rem 1rem',
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         borderRadius: '12px',
//         maxWidth: '500px',
//         color: 'white',
//         fontFamily: 'Arial, sans-serif',
//         boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         cursor: 'pointer',
//         fontSize: '1.8rem', // or '20px'
//         fontWeight: 'bold',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'scale(1.05)';
//         e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.5)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'scale(1)';
//         e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
//       }}
//     >
//       {/* Icon / Image on the left */}
//       <div style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</div>

//       {/* Text on the right */}
//       <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{title}</div>
//       <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
//         &#8942; {/* Unicode for vertical ellipsis */}
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// export default function CardBox({ icon, title }) {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between', // push dots to right
//         margin: '1rem auto',
//         padding: '0.6rem 1rem',
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         borderRadius: '12px',
//         maxWidth: '500px',
//         color: 'white',
//         fontFamily: 'Arial, sans-serif',
//         boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         cursor: 'pointer',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'scale(1.05)';
//         e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.5)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'scale(1)';
//         e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
//       }}
//     >
//       {/* Left: icon + text together */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
//         <div style={{ fontSize: '2rem' }}>{icon}</div>
//         <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{title}</div>
//       </div>

//       {/* Right: 3-dot icon */}
//       <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
//         &#8942;
//       </div>
//     </div>
//   );
// }

//import React from 'react';

// export default function CardBox({ icon, title, href, onClick }) {
//   const baseStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',  // <-- added this
//     margin: '1rem auto',
//     padding: '0.6rem 1rem',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     borderRadius: '12px',
//     maxWidth: '500px',
//     color: 'white',
//     fontFamily: 'Arial, sans-serif',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     cursor: 'pointer',
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   };

//   const hoverStyle = {
//     transform: 'scale(1.05)',
//     boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
//   };

//   const [isHovered, setIsHovered] = React.useState(false);

//   const combinedStyle = isHovered
//     ? { ...baseStyle, ...hoverStyle }
//     : baseStyle;

//   // Wrap icon and title inside a flex container so they stay together
//   const contentLeftStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5rem',
//   };

//   if (href) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={combinedStyle}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={onClick}
//       >
//         <div style={contentLeftStyle}>
//           <div style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</div>
//           <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{title}</div>
//         </div>

//         <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>&#8942;</div>
//       </a>
//     );
//   }

//   return (
//     <div
//       style={combinedStyle}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div style={contentLeftStyle}>
//         <div style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</div>
//         <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{title}</div>
//       </div>

//       <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>&#8942;</div>
//     </div>
//   );
// }

//added
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardBox({ icon, title, href, onClick, newTab }) {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem auto',
    padding: '0.6rem 1rem',
    backgroundColor: 'rgba(69, 64, 64, 0.6)',
    borderRadius: '12px',
    maxWidth: '500px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const combinedStyle = isHovered
    ? { ...baseStyle, ...hoverStyle }
    : baseStyle;

  const contentLeftStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
  };

  const isInternal = href && href.startsWith('/');

  const content = (
    <>
      <div style={contentLeftStyle}>
        <div style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</div>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{title}</div>
      </div>

      <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>&#8942;</div>
    </>
  );

  if (isInternal && !newTab) {
    // Internal link, open in same tab via React Router
    return (
      <Link
        to={href}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    // External or internal with newTab = true, open in new tab using <a>
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  );
}
