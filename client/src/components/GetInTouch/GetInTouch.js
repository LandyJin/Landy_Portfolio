import React, { Component } from 'react';
import axios from 'axios';

// CSS
import '../../css/GetInTouch.css';

// React Bootstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, FormGroup, FormControl, Button } from "react-bootstrap";

export class GetInTouch extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            subject: "",
            nameError: "",
            emailError: "",
            messageError: "",
            subjectError: "",
            isError: false
        }
    
        this.handleChange = this.handleChange;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({
            isError: false,
            nameError: "",
            emailError: "",
            messageError: "",
            subjectError: "",
        })
    }

    validate = () => {
        let isError = this.state.isError;
        const errors = {};
        
        // Name
        if (this.state.name.length < 3) {
            isError = true;
            errors.nameError = "Name should be at least 2 characters"
        } 
        // Email
        if (this.state.email.length < 5 || this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailError = "Require valid email"
        } 

        // Subject
        if (this.state.subject.length < 1) {
            isError = true;
            errors.subjectError = "Please enter Subject"
        } 

        // Message
        if (this.state.message.length < 1) {
            isError = true;
            errors.messageError = "Please enter Message"
        } 

        if (isError) {
            this.setState({
                ...this.state,
                ...errors,
                isError
            })
        }
        return isError;
    }

    async handleSubmit(e) {
        const err = this.validate();
        if (!err){
            e.preventDefault();
            const { name, email, message, subject } = this.state;
            const form = await axios.post('/api/form', {
                name, email, message, subject
            })
        } else {
            e.preventDefault();
            return false;
        }
    }

    getStyle = () => {
        if (this.state.isError){
            return {
                border: "#f44242 solid 1px",
                boxShadow: "0 0 0 2px rgba(244, 66, 66,.25)"
            }
        } else {
            return {
                border: "",
                boxShadow: ""
            }
        }
    }

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
                        {/* <Form method="post" action="/sendEmail" onSubmit={this.handleSubmit}> */}
                        <Form method="post" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <FormControl 
                                    style={this.getStyle()}
                                    type="text" 
                                    className="hintable" 
                                    hint-class="name" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    onChange={this.handleChange}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Your Name"}
                                />
                                <span className="invalid">
                                    {this.state.nameError}
                                </span>
                                <span id="yourName"></span>
                                <div className="clickEffect name">Your Name</div>
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    style={this.getStyle()}
                                    type="email" 
                                    className="hintable" 
                                    hint-class="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your E-mail" 
                                    onChange={this.handleChange}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Your Name"}
                                />
                                <span className="invalid">
                                    {this.state.emailError}
                                </span>
                                <span id="emaiAddress"></span>
                                <div className="clickEffect email">Your E-mail</div>
                            </FormGroup>

                            <FormGroup>
                                <FormControl  
                                    style={this.getStyle()}
                                    type="text" 
                                    className="hintable" 
                                    hint-class="subject" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="Your Subject Here" 
                                    onChange={this.handleChange}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Your Name"}
                                />
                                <span className="invalid">
                                    {this.state.subjectError}
                                </span>
                                <span id="subjectDetail"></span>
                                <div className="clickEffect subject">Your Subject Here</div>
                            </FormGroup>

                            <FormGroup>
                                <FormControl 
                                    style={this.getStyle()}
                                    type="textarea" 
                                    className="hintable" 
                                    hint-class="message" 
                                    id="message" 
                                    name="message" 
                                    placeholder="Your Message Here" 
                                    onChange={this.handleChange}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Your Name"}
                                />
                                <span className="invalid">
                                    {this.state.messageError}
                                </span>
                                <span id="messageDetail"></span>
                                <div className="clickEffect message">Your Message Here</div>
                            </FormGroup>
                            
							<Button className="submit" type="submit">Send Your Message</Button>
							<br/> <br/>
						</Form>
					</div>
				</div>
			</div>
        </Row>
      </div>
    )
  }
}

export default GetInTouch
