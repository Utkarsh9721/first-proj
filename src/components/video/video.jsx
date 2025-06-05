import React, { useRef } from 'react';
import './video.css';
import college_video from '../../assets/college.mp4';

const Video = ({ playState, setPlayState }) => {
const player = useRef(null)

const closePlayer =(e)=>{
    if(e.target == player.current){
        setPlayState(false);
    }
}

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={college_video} autoPlay muted controls />
      <button className="close-btn" onClick={() => setPlayState(false)}>✖</button>
    </div>
  );
};

export default Video;
