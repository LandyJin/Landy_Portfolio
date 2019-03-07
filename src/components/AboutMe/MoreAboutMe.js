import React, { Component } from 'react'

// React Bootstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

// Background imag
import BackgroundImage from '../../assets/moreAboutMe.png';

// CSS
import '../../css/MoreAboutMe.css'

export class MoreAboutMe extends Component {
  state = {
    paragraphs : [
        {id: 1, content:  "I am a developer with experience working with various programming languages, including Angular, React.js, Salesforce etc."},
        {id: 2, content:  "One year experience as a software developer intern with Mav3rik (ACS schoolarship) since I complete my Master of Information Technology degree in Deakin University in March 2018. Besides, I am holding Australia permanent resident VISA."},
    ],
    lists : [
        {id: 1, content:  "Consulted and documented UI best practices and code standards."},
        {id: 2, content:  "Consulted and documented UI best practices and code standards."},
        {id: 3, content:  "Leveraged responsive web frameworks to consistently complete product deliverables ahead of schedule."},
    ]
  }
  render() {
    return (
    <div className="moreAboutMe" >
        <Row className="clearfix" style={{display:"flex"}}>
            <Col xs="12" sm="6" className="moreAboutMeImg">
                <img className="aboutMeImg" src={ BackgroundImage } alt="More About Me" /> 
                <div className="aboutMeDetail"><span>——</span> More About Me</div>
            </Col>
            <Col xs="12" sm="6" className="moreAboutMeDetail">
                <div className="showBox" onClick={this.props.handleClick.bind(this)}>Hide</div>
                <div className="moreAboutMeDescription">
                    <h1>More About Me</h1>
                    <span>—————</span>
                    {this.state.paragraphs.map((paragraph, i) => (
                        <p key={i}>{paragraph.content}</p>
                    ))}
                    <ul>
                        {this.state.lists.map((list, i) => (
                            <li key={i}>{list.content}</li>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    </div>
    )
  }
}

export default MoreAboutMe
