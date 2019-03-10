import React, { Component } from 'react'

// CSS
import './../../css/MainPage.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Components
import TopOfPage from './../TopOfPage/TopOfPage';
import AboutMe from './../AboutMe/AboutMe';
import MoreAboutMe from './../AboutMe/MoreAboutMe';
import Experience from './../Experience/Experience';
import Skills from './../Skills/Skills'

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: [
                {id: 1, title:  "HTML, CSS", percent: "95%"},
                {id: 2, title:  "Javascript", percent: "85%"},
                {id: 3, title:  "ReactJS", percent: "80%"},
                {id: 4, title:  "Node.js", percent: "70%"},
                {id: 5, title:  "Salesforce", percent: "60%"},
            ],
            visible: false
        };
        this.handleClick = this.handleClick.bind(this)
    }
handleClick() {
    this.setState({ visible: ! this.state.visible });
    console.log(this.state.visible)
}
  render() {
    return (
      <div className="hi">
        <TopOfPage skills={this.state.skills} />
        <AboutMe handleClick = {this.handleClick}/>

        {/* Click Back Card 'More' Button to More About Me */}
        <TransitionGroup>
            <CSSTransition timeout={300} classNames="fade">
                <div>
                    { this.state.visible ? <MoreAboutMe handleClick = {this.handleClick} /> : ""}
                </div>
            </CSSTransition>
        </TransitionGroup>
        
        <Skills/>
        <Experience/>
      </div>
    )
  }
}

export default MainPage
