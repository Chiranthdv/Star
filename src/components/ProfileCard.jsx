import React from 'react';

export default function ProfileCard({ profile }) {
  return (
    <div style={{ maxWidth: '500px', margin: '1rem auto', padding: '1rem', borderRadius: '12px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <img
        src={profile.profileImage}
        alt="Profile"
        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h2 style={{color:'white',padding: '0.1rem', borderRadius: '12px', textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>{profile.title}</h2>
      <h2 style={{color:'white' ,padding: '0.2rem', borderRadius: '12px', textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>{profile.name}</h2>
      <p style={{ fontStyle: 'Arial', color: 'white',padding: '0.2rem', borderRadius: '12px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>{profile.bio}</p>
    </div>
  );
}
