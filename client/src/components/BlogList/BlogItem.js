import React, { Component } from 'react';

import { Card, Button, CardTitle, CardText, Spinner } from 'reactstrap';

import axios from 'axios';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

// CSS
import '../../css/Blog.css';

export class BlogItem extends Component {
    state = {
        isLoading: true,
        blogs: []
      }
    
      componentWillMount() {
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
        const id = this.props.match.params.id;
        console.log(id);
        const blog = this.state.blogs.find(b => b._id === id);
        return (
        <div className="blogItem">
        {isLoading ? 
            <div>
            <h1>Loading  
                <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
                <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
                <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />
            </h1> 
            </div>
            :
            <Card body className="text-center">
                {/* {console.log(blog)} */}
                <CardTitle><h1>{blog.name}</h1></CardTitle>
                <CardText>{moment(blog.date).format('L, LT')}</CardText>
                <CardText className="text-left">{blog.content}</CardText>
                <Button>Add Comment</Button>
            </Card>
        }
        </div>
        )
    }
}

export default withRouter(BlogItem)
