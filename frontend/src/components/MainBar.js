import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Spinner } from 'react-bootstrap'
import { get_blogs } from '../actions/blogActions';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MainBar = () => {
    const dispatch = useDispatch();

    const blogList = useSelector(state => state.blogList);
    const { loading, blogs } = blogList;

    useEffect(() => {
        dispatch(get_blogs());
    }, [dispatch]);

    return (
        <>  
            {loading && 
                <Spinner animation="border" style={{ width: "100px", height: "100px", margin: "200px" }} />
            }
            {blogs && blogs.map(blog => (
                <Card key={blog._id} className="mb-3">
                    <Card.Body>
                        <Card.Title as="h3">{blog.title}</Card.Title>
                        <Card.Text>{blog.body.slice(0, 200)}... <Link to={`/blog/${blog._id}`}>read more</Link> </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Created: {moment(blog.createdAt).fromNow()}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default MainBar
