import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/vaishnavi.JPG';
import Social from '../components/Social';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" staticText="Bonjour! I'm Vaishnavi Dwivedi" />
<ReactTypingEffect className="typingeffect" text={['A Flutter Developer', 'Deep Learning Scholar', 'UI/UI Designer', 'Tree Hugger', 'Pizza Lover']} speed = {90} eraseDelay ={500} />
<Social />
</div>

)
}
}
export default Home