import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { blog_delete, get_blog_details } from '../actions/blogActions';
import moment from 'moment';

const BlogDetailsScreen = ({ history, match }) => {
    const blogId = match.params.id;

    const dispatch = useDispatch();

    const blogDetails = useSelector(state => state.blogDetails);
    const { loading, blog } = blogDetails;

    useEffect(() => {
        dispatch(get_blog_details(blogId));
    }, [dispatch, blogId]);

    const handleClick = () => {
        if(window.confirm('Are you sure you want to delete this post?')){
            dispatch(blog_delete(blogId));
            history.push('/');
        }
    }

    return (
        <>  
            {loading && 
                <Spinner animation="border" style={{ width: "100px", height: "100px", margin: "200px" }} />
            }
            <LinkContainer to="/">
                <Button variant="light" className="mb-3">Go Back</Button>
            </LinkContainer>
            <Card>
                {blog && 
                    <Card.Body>
                        <Card.Title as="h3">{blog.title}</Card.Title>
                        <Card.Text>{blog.body}</Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last Updated: {moment(blog.updatedAt).fromNow()}</small>
                        </Card.Text>
                    </Card.Body>
                }
            </Card>
            <LinkContainer to={`/update/${blogId}`}>
                <Button variant="secondary" className="mt-3 mr-2">Update Post</Button>
            </LinkContainer>
            <Button onClick={handleClick} variant="danger" className="mt-3">Delete Post</Button>
        </>
    )
}

export default BlogDetailsScreen
