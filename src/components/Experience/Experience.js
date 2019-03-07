import React, { Component } from 'react';

// CSS
import '../../css/Experience.css'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            experiences: [
                {   id: 1, 
                    title:  "Software Developer (Internship)", 
                    company: "Mav3rik",
                    year: "(Apr. 2018 - Mar. 2019)",
                    icon: "fa fa-briefcase circle-icon",
                    className: "timelineIcon work",
                    direction: "directionRight",
                    flag: "flagRight flag",
                    animation:"fade-left",
                    paragraphs: [
                        {id:1, p: "Maintained application, including content updates, debugging, feature enhancements, and updated appearance"},
                        {id:2, p: "Collaborated with senior-level developers to develop projects for mobile app and Web app"},
                        {id:3, p: "Research new Salesforce and software technologies, and recommend purchases and changes in these technologies."}
                    ]
                },
                {   id: 2, 
                    title:  "Mater of Information Technology", 
                    company: "Deakin University",
                    year: "(Mar. 2017 - Mar. 2018)",
                    icon: "fa fa-graduation-cap circle-icon",
                    className: "timelineIcon",
                    direction: "directionLeft",
                    flag: "flagLeft flag",
                    animation:"fade-right",
                    paragraphs: [
                        {id:1, p: "Major in Software and Services Development"},
                        {id:2, p: "Achieved High Distinction Average"},
                    ]
                },
                {   id: 3, 
                    title:  "Assistant", 
                    company: "AiMei",
                    year: "(Mar. 2016 - Dec. 2016)",
                    icon: "fa fa-briefcase circle-icon",
                    className: "timelineIcon work",
                    direction: "directionRight",
                    flag: "flagRight flag",
                    animation:"fade-left",
                    paragraphs: [
                        {id:1, p: "Photo Editing (Adobe Photoshop)"},
                        {id:2, p: "Web design (UI) and flyer design (Adobe Photoshop)"},
                        {id:3, p: "Data Entry, Client Support"}
                    ]
                },
                {   id: 4, 
                    title:  "Tour Guide", 
                    company: "Chinese Tour Tasmania (Hobart)",
                    year: "(Mar. 2015 - Feb. 2016)",
                    icon: "fa fa-briefcase circle-icon",
                    className: "timelineIcon work",
                    direction: "directionLeft",
                    flag: "flagLeft flag",
                    animation:"fade-right",
                    paragraphs: [
                        {id:1, p: "Lead tour groups and ensured that all needs of clients are addressed"},
                        {id:2, p: "Ensured safety of clients"},
                        {id:3, p: "Prepared tour guide documents"}
                    ]
                },
                {   id: 5, 
                    title:  "Bachelor of Business", 
                    company: "Deakin University",
                    year: "(2012 - 2015)",
                    icon: "fa fa-graduation-cap circle-icon",
                    className: "timelineIcon",
                    direction: "directionRight",
                    flag: "flagRight flag",
                    animation:"fade-left",
                    paragraphs: [
                        {id:1, p: "Major in Economics"},
                        {id:2, p: "Achieved Credit Average"},
                    ]
                },
            ],
        };
    }
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
    }
  render() {
    console.log(this.state.experiences)
    return (
        <div className="resume" style={{width: "100%", paddingRight: "20px"}}>
		{/* <div className="row"> */}
			<div id="resume">
				<h1>Education And Work Experiences</h1>
				<span>————</span>
				<p>Education And Career Experiences Timeline</p>

				<ul className="timeline">
                    {this.state.experiences.map(experience => (
                        <li key={experience.id}>
                            <div className={experience.direction}>
                                <div className="flagWrapper">
                                    <span className={experience.className}>
                                        <i className={experience.icon} aria-hidden="true"></i>
                                    </span>
                                    
                                    <div className={experience.flag} data-aos={experience.animation} data-aos-duration="2000">
                                        <h3>{experience.title}</h3>
                                        <p>{experience.year}</p>
                                        <p>{experience.company}</p>
                                        {/* {console.log(experience.paragraphs)} */}
                                        {experience.paragraphs.map(paragraph => (
                                            <div key={paragraph.id}>
                                            <p>{paragraph.p}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
				</ul>
			</div>
		{/* </div> */}
	</div>
    )
  }
}

export default Experience
