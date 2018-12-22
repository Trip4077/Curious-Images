import React, { Component } from 'react';
import './css/index.css';

import axios from 'axios';

import RoverImage from './components/RoverImage/RoverImage';
import Particles from 'react-particles-js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      curiosity: [],
    }
  }


  componentDidMount() {
    const API_KEY = 'UxIddbfdvlQHkDuOVoEqf07DhCghzLy3CPsu0Yl0'
    const END_POINT = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=';

    axios.get(END_POINT+API_KEY)
      .then(response => {
        this.setState({
          curiosity: response.data.photos
        });
        console.log(this.state)
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const particlesOpt = {
      particles: {
        number: {
          value: 200,
          density: {
            enabled: true,
            value_area: 600
          }
        },

        size: {
          value: 6,
          random: true
        },

        line_linked: {
          color: "#000",
        },

        move: {
          enable: true,
          direction: "top-right",
          straight: true,
          speed: 5,
          out_mode: "out"
        }
      }
    }

    return (
      <div>
          <Particles className="particles-bg" params={particlesOpt} />
          <div className="App">
            {this.state.curiosity.length === 0 ? <h1>Loading</h1>
              : this.state.curiosity.map(image => <RoverImage key={Math.random()}
                                                              camera={image.camera}
                                                              rover={image.rover}
                                                              date={image.earth_date}
                                                              id={image.id}
                                                              img_src={image.img_src}
                                                              />
                                                        )}
          </div>
      </div>
    );
  }
}

export default App;
