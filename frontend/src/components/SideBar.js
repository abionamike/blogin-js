import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const SideBar = () => {

    return (
        <Card>
            <Card.Body>
                <Card.Title as="h3">Sidebar</Card.Title>
                <Card.Text className="text-muted">Quick Links to navigate through the blogs</Card.Text>
                <ListGroup>
                    <ListGroup.Item className="list-group-item-light">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className="list-group-item-light">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className="list-group-item-light">Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className="list-group-item-light">Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className="list-group-item-light">Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default SideBar
