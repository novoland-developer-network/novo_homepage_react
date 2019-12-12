import React from 'react';
import {Col, Nav, Navbar} from 'react-bootstrap';

// 头部组件

export default () => (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Col lg={1}/>
      <Navbar.Brand href="#home">
        九州第一群主页
      </Navbar.Brand>
      <Navbar.Collapse>
            <Nav>
                <Nav.Item>
                  <Nav.Link href="https://9zer.doylee.cn/"
                            target="_blank">九州第一群论坛</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://novoland.doylee.cn/"
                            target="_blank">九州页游（开发中）</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    </Navbar>
);
