import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import MainBar from '../components/MainBar';
import SideBar from '../components/SideBar';

const HomeScreen = () => {
    
    const [ display, setDisplay ] = useState('');

    const showSideBar = () => {
        window.innerWidth <= 770 ? setDisplay('none') : setDisplay('block');
    }

    useEffect(() => {
        showSideBar();
    }, []);

    window.addEventListener('resize', showSideBar);

    return (
        <Row>
            <Col md={8}>
                <MainBar />
            </Col> 
            <Col md={4} style={{ display }}>
                <SideBar />
            </Col>
        </Row>
    )
}

export default HomeScreen
