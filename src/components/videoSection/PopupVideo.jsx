import React, { useEffect } from "react";
import "../../assets/css/magnific-popup.css";
import playIcon from '../../assets/img/play-icon.png';

export default function PopupVideo({ videoUrl }) {
  useEffect(() => {
   
    $(".video-popup").magnificPopup({
      type: "iframe",
      gallery: {
        enabled: true,
      },
    });

    return () => {
      $(".video-popup").off();
    };
  }, []);

  return (
    <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
      <div className="overlay overlay-bg"></div>
      <a className="play-btn video-popup" href={videoUrl}>
        <img className="img-fluid" src={playIcon} alt="Play Icon" />
      </a>
    </div>
  );
}
