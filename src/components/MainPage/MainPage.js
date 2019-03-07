import React, { Component } from 'react'

// CSS
import './../../css/MainPage.css'
import { CSSTransitionGroup } from 'react-transition-group';

// Components
import TopOfPage from './../TopOfPage/TopOfPage';
import AboutMe from './../AboutMe/AboutMe';
import MoreAboutMe from './../AboutMe/MoreAboutMe';
import Experience from './../Experience/Experience';

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
      <div>
        <TopOfPage skills={this.state.skills} />
        <AboutMe handleClick = {this.handleClick}/>

        {/* Click Back Card 'More' Button to More About Me */}
        <CSSTransitionGroup 
            transitionName="toggleSlide"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={600}
            timeout = {300}>
            { this.state.visible ? <MoreAboutMe handleClick = {this.handleClick} /> : null}
        </CSSTransitionGroup>

        <Experience/>
      </div>
    )
  }
}

export default MainPage
