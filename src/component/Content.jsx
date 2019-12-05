import React from "react";
import {Col, Row} from "react-bootstrap";
import SearchField from "./SearchField";

/**
 * 正文组件
 * @returns {*}
 */
export default () => (
    <Row style={{marginTop: 100}}>
        <Col xs="12" lg={{
            span: 6,
            offset: 3
        }}>
            <h1 style={{textAlign: "center"}}>广阔九州，大有可为!</h1>
            <SearchField/>
        </Col>
    </Row>
);