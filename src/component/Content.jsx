import React from "react";
import {Col, Row} from "react-bootstrap";
import SearchField from "./SearchField";
import Links from "./Links";

/**
 * 正文组件
 * @returns {*}
 */
export default () => (
    <Col>
        <Row style={{marginTop: 100}}>
            <Col>
                <h1 style={{textAlign: "center"}}>广阔九州，大有可为!</h1>
                <SearchField/>
            </Col>
        </Row>
        <Row>
            <Col lg="12" xs="12">
                <Links/>
            </Col>
        </Row>
    </Col>
);