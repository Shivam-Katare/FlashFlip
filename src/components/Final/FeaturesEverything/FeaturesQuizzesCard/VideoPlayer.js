import React, { useState, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        loop
        muted
        className='quiz-card-video'
      >
        <source
          src="https://ik.imagekit.io/dnwefib6s4/Pink%20Blue%20Animation%20Graphic%20Designer%20Youtube%20Intro%20Outro.mp4?updatedAt=1691475251506"
          type="video/mp4"
        />
        {/* Add more source elements for different video formats */}
      </video>
    </div>
  );
};

export default VideoPlayer;
