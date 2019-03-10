import React, { Component } from 'react';

// CSS
import '../../css/Blog.css';

// Reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from "reactstrap";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import axios from 'axios';
import moment from 'moment'

// Components
import BlogItem from './BlogItem'

export class BlogList extends Component {
  state = {
    isLoading: true,
    blogs: []
  }

  componentDidMount() {
    axios.get('/api/blogs').then((response) => {
      this.setState({
        blogs: response.data,
        isLoading: false
      })
    });
  }

  render() {
    const {
      isLoading
    } = this.state;
    return (
      <div className="blog">
      {isLoading ? 
        <h1>Loading...</h1> 
        :
        <Container>
          <ListGroup 
            flush
            className="blogItems"
          >
            {this.state.blogs.map(blog => (
              <ListGroupItem 
                tag="a"
                href="#" 
              >
                <Row>
                  <Col md="8" style={{fontWeight: "bold"}}>{blog.name}</Col>
                  <Col md="4" style={{float: 'right'}}>{moment(blog.date).format('L, LT')}</Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Button
            color="primary"
            className="blogButton"
          >
            Add Comment
          </Button>
        </Container>}
      </div>
    )
  }
}

export default BlogList
