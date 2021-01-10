import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

class Cards extends React.Component {
  render(){
  return (
    <div className='cards'>
      <h1>Availible Conversations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/IMG-Me.JPEG')}
              text='Learn a little bit about who I am'
              label='The Basics'
              path='/services'
            />
            <CardItem
              src={require('../images/img-9.jpg')}
              text='Discover how I was once a VP and CEO at the same time'
              label='Work Experience'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={require('../images/img-9.jpg')}
              text='Check out a few of the projects that I have worked on'
              label='Previous Work'
              path='/services'
            />
          
            <CardItem
              src={require('../images/img-9.jpg')}
              text='I have many hobbies and I am very passionate about them. Maybe we even have a few in common'
              label='Intrests & Hobbies'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
  }
}

export default Cards;
