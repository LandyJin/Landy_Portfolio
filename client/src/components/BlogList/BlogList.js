import React, { Component } from 'react';

// CSS
import '../../css/Blog.css';

// Reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, ListGroup, ListGroupItem, Button, Row, Col } from "reactstrap";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Reacr Router Dom
import { Link } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment'

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
        <div>
          <h1>Loading  
            <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
            <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
            <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
          </h1> 
        </div>
        :
        <Container>
          {/* {console.log(this.state.blogs)} */}
          <ListGroup 
            flush
            className="blogItems"
          >
            {this.state.blogs.map(blog => (
              <ListGroupItem 
                key={blog._id}
              >
              {/* {console.log(blog._id)} */}
                <Link to={`/blogItem/${blog._id}`} >
                  <Row>
                    <Col style={{fontWeight: "bold"}}>{blog.name}</Col>
                  </Row>
                  <Row>
                    <Col md="8" style={{fontSize: "12px"}}>{moment(blog.date).format('L, LT')}</Col>
                  </Row>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Button
            color="primary"
            className="blogButton"
          >
            Add New Blog
          </Button>
        </Container>}
      </div>
    )
  }
}

export default BlogList
