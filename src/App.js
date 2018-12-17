import React, { Component } from 'react';
import './css/index.css';

import axios from 'axios';

import RoverImage from './components/RoverImage/RoverImage';

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

    return (
      <div className="App">
          {this.state.curiosity.length === 0 ? <h1>Loading</h1>
            : this.state.curiosity.map(image => <RoverImage key={Math.random()}
                                                            camera={image.camera}
                                                            date={image.earth_date}
                                                            id={image.id}
                                                            img_src={image.img_src}
                                                            />
                                                      )}
      </div>
    );
  }
}

export default App;
