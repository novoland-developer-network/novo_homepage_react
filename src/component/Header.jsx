import React from "react";
import {Image, Nav, Navbar} from 'react-bootstrap'

// 头部组件

export default () => (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
            <Image
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            九州第一群主页
        </Navbar.Brand>
        <Navbar.Collapse>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="https://9zer.doylee.cn/">九州第一群论坛</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://novoland.doylee.cn/">九州页游（开发中）</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    </Navbar>
);
