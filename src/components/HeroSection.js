import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
class HeroSection extends React.Component{   
  render(){
    return(
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hey, I'm Darren</h1>
      <p>Thanks for meeting me here</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'

        >
          Stay awhile and chat
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Oh, I actually left my oven on
        </Button>
      </div>
    </div>)
  };
}

export default HeroSection;
