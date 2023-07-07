/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../pages/Shared/Leftnav/Leftnav';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/Navigationbar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;