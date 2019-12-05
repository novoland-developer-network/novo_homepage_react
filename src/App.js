import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import Header from "./component/Header";
import Content from "./component/Content";

export default () => (
    <Container fluid={true}>
        <Header/>
        <Content/>
    </Container>
);
