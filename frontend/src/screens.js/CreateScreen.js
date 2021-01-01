import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { blog_create } from '../actions/blogActions';

const CreateScreen = ({ history }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(blog_create({ title, body }));
        history.push('/');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title*</Form.Label>
                <Form.Control type="text" value={title} required onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Body*</Form.Label>
                <Form.Control as="textarea" value={body} required onChange={(e) => setBody(e.target.value)} rows={12} />
            </Form.Group>
            <Button type="submit" variant="primary">Post</Button>
        </Form>
    )
}

export default CreateScreen
