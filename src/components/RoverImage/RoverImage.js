import React from 'react';
import Details from './Details';

class RoverImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: false
    }
  }

  toggleFullscreen() {
    const toggle = !this.state.fullscreen;

    this.setState({
      fullscreen: toggle,
    })
  }

  render() {
    let fullscreen = this.state.fullscreen;
    let optDetails;
    let containerClass = "image-container";

    if(fullscreen) {
      optDetails = <Details key={Math.random()}
                            camera={this.props.camera}
                            rover={this.props.rover}
                            date={this.props.date}
                            id={this.props.id}/>;
      containerClass = "image-container fullscreen"
    } else {
      console.log('gallery')
    }

    return (
      <div className={containerClass}>
        {optDetails}
        <img onClick={this.toggleFullscreen.bind(this)} src={this.props.img_src} alt="rover" />
      </div>
    );
  }
}

export default RoverImage;
