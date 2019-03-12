import React, { Component } from 'react';

// Reactstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

import '../../css/Blog.css';

export class AddNewComment extends Component {
  state = {
        commentdetail: '',
    }
  
    onChange = (e) => {
      this.setState ({
          [e.target.name]: e.target.value,
      })
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addNewComment(this.state.commentdetail);
      this.setState ({
        commentdetail: ''
      })
      console.log(this.state.commentdetail)
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
                        type="textarea"
                        name="commentdetail"
                        className="addNewBlogTextarea"
                        placeholder="Leave your Comment..."
                        value = {this.state.commentdetail }
                        onChange = {this.onChange}
                    />
                </Col>
                <Col md="12">
                    <Button 
                        type="submit" 
                        value="Submit"
                        style={{margin: "10px auto"}}
                    >
                    Submit
                    </Button>
                </Col>
            </Form>
          </Row>
      )
    }
}

export default AddNewComment
