import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
      particles: {
        number: {
          value: 180,
             density: {
               enable: true,
                value_area: 552,
              }
            }
          }
       }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {

  }

  onButtonSubmit = () => {

  }

  render() {
  return (
    <div className="App">
       <Particles className='particles'
                params={particlesOptions}
                    />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
      />
      { /*<FaceRecognition /> */}
    </div>
    );
  }
}

export default App;
