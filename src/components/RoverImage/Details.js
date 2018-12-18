import React from 'react';

const details = props => {
  return(
    <div className="image-container__text">
      <div className="text--left">
        <p>Rover: {props.rover.name}</p>
        <p>Camera: {props.camera.full_name}</p>
        <p>Photo ID: {props.id}</p>
      </div>

      <div className="text--right">
        <p>Earth Date: {props.date}</p>
        <p>Landing Date: {props.rover.landing_date}</p>
      </div>
    </div>
  );
}

export default details;
