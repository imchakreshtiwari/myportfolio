import React, { Component } from 'react';
import profilepic from '../img/profilepic.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className='condiv home'>
                <img src={profilepic} className="profilepic" alt="Profile Pic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Chakresh Tiwari','I am a Full Stack  developer']} speed={100} eraseDelay={700}/> 
           <Social />
            </div>
          );
    }
}
export default Home;