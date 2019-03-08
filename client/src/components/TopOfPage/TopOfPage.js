import React, { Component } from 'react';

// CSS
import '../../css/TopOfPage.css';

// Background Video
import Video from '../../assets/index1.mp4';
import BackgroundImage from '../../assets/index.jpeg';

// Component
import Skills from './Skills.js';

export class TopOfPage extends Component {
  state = {
    skills: [],
    sentence: null,
  }

  componentWillMount() { 
    const sentences = ["Hi", "My name is Landy", "I am a Front-end developer", "Here is basic information", "About my skills"]
    for (let i = 0, l = sentences.length; i < l; i++) {
      setTimeout(() => {
        this.setState({ sentence: sentences[i] });
      }, 2000*i);
    }
  }

  render() {
    return (
      <div>
        <div className="indexVideo">
          <video poster={ BackgroundImage } className="screenVideo" playsInline autoPlay muted loop>
            <source src={ Video } type="video/mp4" />
          </video>
        </div> 
        <div id="skills">
          <h2 id="intro">{this.state.sentence}</h2>
          <p>
            About My Personal Development Skills
          </p>
          <div className="bars">
              {this.props.skills
              .sort((a,b) => (a.percent > b.percent)? -1 : 0 ? 1 : ((b.percent > a.percent) ))
              .map(skill => (
                  <Skills
                    key = {skill.id}
                    skill = {skill}/>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TopOfPage
