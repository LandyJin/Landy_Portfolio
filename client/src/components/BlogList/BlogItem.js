import React, { Component } from 'react';

import { Card, Button, CardTitle, CardText, Spinner, ListGroup, ListGroupItem, ListGroupItemText, Collapse } from 'reactstrap';

import axios from 'axios';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

// CSS
import '../../css/Blog.css';

// Components
import AddNewComment from './AddNewComment'

export class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoading: true,
          blogs: [],
          comments: [],
          collapse: false 
        }
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
    axios.get('/api/blogs').then((response) => {
        this.setState({
            blogs: response.data,
            // comments: blog.comment,
            isLoading: false
        })
        const id = this.props.match.params.id;
        const blog = this.state.blogs.find(b => b._id === id);
        console.log(blog._id)
        this.setState({
            comments: blog.comment
        })
    });
    }

    // Add New Comment Toggle Button
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    // Add New Comment
    addNewComment = (commentdetail) => {
        const newComment = 
        {
            "commentdetail": commentdetail
        }
        axios.post(`/api/blogs`, newComment).then((response) => {
        this.setState({
            comments: [...this.state.comments, newComment],
        })
        console.log(this.state.comments)
        // this.componentDidMount()
        });
    }

    render() {
        const {
            isLoading
        } = this.state;
        const id = this.props.match.params.id;
        console.log(id);
        console.log(this.state.comments)
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
                <CardTitle>
                    <h1>{blog.name}</h1>
                </CardTitle>
                <CardText>
                    {moment(blog.date).format('L, LT')}
                </CardText>
                <CardText className="text-left" style={{color: "black"}}>
                    {blog.content}
                </CardText>
                
                <ListGroup style={{marginTop: '50px'}}>  
                {this.state.comments.map(comment => (
                    <ListGroupItem key={comment._id} className="text-left"> 
                        <ListGroupItemText style={{fontSize: "18px"}}>
                            {comment.commentdetail}
                        </ListGroupItemText>
                        <ListGroupItemText style={{fontSize: "12px"}}>
                            {moment(comment.commentDate).format('L, LT')}
                        </ListGroupItemText>
                    </ListGroupItem>
                ))}
                <Button 
                    style={{marginTop: '10px', marginBottom: '1rem'}}
                    onClick={this.toggle}
                >
                    Add Comment
                </Button> <br/>
                <Collapse isOpen={this.state.collapse}>
                    <AddNewComment
                    addNewComment = {this.addNewComment}
                    />
                </Collapse>
                </ListGroup>
            </Card>
        }
        </div>
        )
    }
}

export default withRouter(BlogItem)
