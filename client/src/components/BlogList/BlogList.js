import React, { Component } from 'react';

// CSS
import '../../css/Blog.css';

// Reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, ListGroup, ListGroupItem, Button, Row, Col, Collapse } from "reactstrap";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Reacr Router Dom
import { Link } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment'

// Components
import AddNewBlog from './AddNewBlog'

export class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      blogs: [],
      collapse: false 
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios.get('/api/blogs').then((response) => {
      this.setState({
        blogs: response.data,
        isLoading: false
      })
    });
  }

  // Add New Blog Toggle Button
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  // Add New Blog
  addNewBlog = (name, content) => {
    const newBlog = 
      {
        "name": name,
        "content": content
      }
    axios.post('/api/blogs', newBlog).then((response) => {
      console.log(response)
      this.setState({
        blogs: [...this.state.blogs, newBlog],
      })
      this.componentDidMount()
    });
  }

  getStyle = () => {
    return {
      height: this.state.isLoading? "110%" : ""
    }
  }

  render() {
    const {
      isLoading
    } = this.state;
    return (
      <div className="blog" style={this.getStyle()}>
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
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}
          >
            Add New Blog
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <AddNewBlog
              addNewBlog = {this.addNewBlog}
            />
          </Collapse>
        </Container>}
      </div>
    )
  }
}

export default BlogList
