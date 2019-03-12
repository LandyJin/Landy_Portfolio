import React, { Component } from 'react';

// Reactstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

import '../../css/Blog.css';

export class AddNewBlog extends Component {
    state = {
        name: '',
        content: ''
    }
  
    onChange = (e) => {
      this.setState ({
          [e.target.name]: e.target.value,
      })
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addNewBlog(this.state.name, this.state.content);
      this.setState ({
            name: '',
            content: ''
      })
    }
  
    render() {
      return (
          <Row >
            <Form 
                onSubmit={this.onSubmit}
                className="addBlog"
            >
                <Col md="12">
                    <FormControl 
                        type="text"
                        name="name"
                        placeholder="Add Blog Title..."
                        value = {this.state.name }
                        onChange = {this.onChange}
                    />
                </Col>
                <Col md="12">
                    <FormControl 
                        type="textarea"
                        name="content"
                        className="addNewBlogTextarea"
                        placeholder="Add Blog content..."
                        value = {this.state.content }
                        onChange = {this.onChange}
                    />
                </Col>
                <Col md="4">
                    <Button 
                        type="submit" 
                        value="Submit"
                        variant="secondary"
                    >
                    Submit
                    </Button>
                </Col>
            </Form>
          </Row>
      )
    }
}

export default AddNewBlog
