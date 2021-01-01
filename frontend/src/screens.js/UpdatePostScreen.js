import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { blog_update } from '../actions/blogActions';

const UpdatePostScreen = ({ history }) => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const dispatch = useDispatch();

    const blogDetails = useSelector(state => state.blogDetails);
    const { blog } = blogDetails;

    useEffect(() => {
        if(blog){
            setTitle(blog.title);
            setBody(blog.body);
        }
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(blog_update({ title, body, id: blog._id  }));
        history.push(`/blog/${blog._id}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title*</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Body*</Form.Label>
                <Form.Control as="textarea" value={body} onChange={(e) => setBody(e.target.value)} rows={12} />
            </Form.Group>
            <Button type="submit" variant="primary">Update</Button>
        </Form>
    )
}

export default UpdatePostScreen
