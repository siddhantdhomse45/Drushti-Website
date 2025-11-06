import React, { useRef, useState, useEffect } from "react";
import styles from "./Video.module.css";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image loading

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = "https://live.themewild.com/eduka/assets/img/video/01.jpg";
    img.onload = () => setIsImageLoaded(true); 
  }, []);

  return (
    <div className={styles.container}>
    
    <div
      className={styles.videoContainer}
      style={{
        backgroundImage: isImageLoaded
          ? `url('https://live.themewild.com/eduka/assets/img/video/01.jpg')`
          : "none", 
      }}
    >
      <video
        ref={videoRef}
        src="https://www.youtube.com/embed/ckHzmP1evNU?si=nIbXjtcIE9K3aAEW"
        className={styles.video}
        controls={false}
        muted
      />
      {!isPlaying && (
        <div className={styles.playButton} onClick={handlePlay}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="Play Button"
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default Video;
