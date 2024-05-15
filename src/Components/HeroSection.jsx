import React, { useState } from 'react';
import "./Hero.css";

function HeroSection({ name, videoLink, profilePhoto }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
console.log(videoLink,"videolink");
  const handleVideoClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className="hero-section">
      <h1 className='name'>Welcome, <span className="name">{name}!</span></h1>
      {profilePhoto && <img src={profilePhoto} alt="Profile" className="profile-photo" />}
      <div className={`video-container ${isFullScreen ? 'fullscreen' : ''}`} onClick={handleVideoClick}>
        {/* Use a circular container with yellow border-radius */}
        <div className="video-thumbnail">
        <iframe
        width="560"
        height="315"
        src={videoLink}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
// import React, { useState } from 'react';

// import YouTube from 'react-youtube';

// function HeroSection({ name, videoLink, profilePhoto }) {
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   const handleVideoClick = () => {
//     setIsFullScreen(!isFullScreen);
//   };

//   return (
//     <section className="hero-section">
//       <h1 className='name'>Welcome, <span className="name">{name}!</span></h1>
//       {profilePhoto && <img src={profilePhoto} alt="Profile" className="profile-photo" />}
//       <div className={`video-container ${isFullScreen ? 'fullscreen' : ''}`} onClick={handleVideoClick}>
//         <div className="video-thumbnail">
//           <YouTube
//             videoId={videoLink} // Extract video ID from the URL
//             opts={{
//               height: '315',
//               width: '560',
//               playerVars: {
//                 autoplay: 0, // Disable autoplay
//               },
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;