import React, { Component } from 'react'
// CSS
import '../../css/TopOfPage.css';

export class Skills extends Component {
  getStyle = () => {
    return {
      width: this.props.skill.percent
    }
  }

  render() {
    const {
      title
    } = this.props.skill;
    return (
      <div className="skillBar">
      <div 
        className="myBar" 
        style={this.getStyle()}>
        <center>{ title }</center>
      </div>
      </div>
    )
  }
}

export default Skills
