import React from 'react';
import "./Hero.css"
function HeroSection({ name, videoLink, profilePhoto }) {
  return (
    <section className="hero-section">
      <h1>Welcome, <spam className="name">{name}!</spam></h1>
      {profilePhoto && <img src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"} alt="Profile" className="profile-photo" />}
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={videoLink}
          title="Profile Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HeroSection;
