import React from 'react';
import Details from './Details';

class RoverImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: false
    }
  }

  render() {
    let fullscreen = this.state.fullscreen;
    let optDetails;

    if(fullscreen) {
      optDetails = <Details key={Math.random()}
                            camera={this.props.camera}
                            rover={this.props.rover}
                            date={this.props.earth_date}
                            id={this.props.id}/>;
      console.log('full')
    } else {
      console.log('gallery')
    }

    return (
      <div className="image-container">
        {optDetails}
        <img src={this.props.img_src} alt="rover" />
      </div>
    );
  }
}

export default RoverImage;
