import React from 'react';

const details = props => {
  return(
    <div className="image-container__text">
      <p>Camera: {props.camera.full_name}</p>
      <p>Earth Date: {props.date}</p>
      <p>Photo ID: {props.id}</p>
      <p>Rover: {props.rover.name}</p>
      <p>Landing Date: {props.rover.landing_date}</p>
    </div>
  );
}

export default details;
