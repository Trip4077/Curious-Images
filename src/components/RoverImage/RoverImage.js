import React from 'react';

const RoverImage = props => {
  return (
    <div className="image-container">
      <div className="image-container__text">
        <p>Camera: {props.camera.full_name}</p>
        <p>Date: {props.date}</p>
        <p>Photo ID: {props.id}</p>
      </div>
      <img src={props.img_src} alt="rover" />
    </div>
  );
}

export default RoverImage;
