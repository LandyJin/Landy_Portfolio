import React, { Component } from 'react';

// CSS
import '../../css/GetInTouch.css';

// React Bootstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

export class GetInTouch extends Component {
  render() {
    return (
      <div className="getintouch">
        <Row>
			<div id="getInTouch">
				<div id="getInTouchDetail">
					<h1>Get In Touch</h1>
					<span>————</span>
					<p>You Are Welcome To Contact Me At Anytime</p>
					<div className="formWrapper">
						{/* <!--Contact Form--> */}
						<form method="post" action="/sendEmail" onsubmit="return validation()">
                            <input 
                                type="text" 
                                className="hintable" 
                                hint-class="name" 
                                id="name" 
                                name="name" 
                                placeholder="Your Name" 
                                onFocus={(e) => e.target.placeholder = ""}
                                onBlur={(e) => e.target.placeholder = "Your Name"}
                            />
                                <span id="yourName"></span>
							<div className="clickEffect name">Your Name</div>
					
							<input type="text" className="hintable" hint-class="email" id="email" name="email" placeholder="Your E-mail" onfocus={this.placeholder = ''} onblur={this.placeholder = 'Your E-mail'} /><span id="emaiAddress"></span>
							<div className="clickEffect email">Your E-mail</div>
					
							<input  type="text" className="hintable" hint-class="subject" id="subject" name="subject" placeholder="Your Subject Here" onfocus={this.placeholder = ''} onblur={this.placeholder = 'Your Subject Here'}/><span id="subjectDetail"></span>
							<div class="clickEffect subject">Your Subject Here</div>

							<textarea className="hintable" hint-class="message" id="message" name="message" placeholder="Your Message Here" onfocus={this.placeholder = ''} onblur={this.placeholder = 'Your Message Here'}/><span id="messageDetail"></span>
							<div className="clickEffect message">Your Message Here</div>

							<input className="submit" type="submit"  value="Send Your Message" />
							<br/> <br/>
						</form>
					</div>
				</div>
			</div>
        </Row>
      </div>
    )
  }
}

export default GetInTouch
