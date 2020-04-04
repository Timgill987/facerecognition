import React from 'react';
import Nav from './Components/Nav/Nav'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import ILF from './Components/ImageLinkForm/ImageLinkForm'
import Particles from 'react-particles-js'
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 800,
      }

    }
  }
}
function App() {
  return (
    <div className="App">
       <Particles className='Particles'
              params={particlesOptions}
            />
    <Nav />
    <Logo />
    <Rank />
    <ILF />
    {/*<FaceRec /> */}
    </div>
  );
}

export default App;
