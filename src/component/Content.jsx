import React from "react";
import {Col, Row} from "react-bootstrap";
import SearchField from "./SearchField";
import "./list/links.css"

// import Links from "./Links";

/**
 * 正文组件
 * @returns {*}
 */
class Content extends React.Component {
    render() {
        let title = "广阔九州，大有可为!";
        if (this.props.theme === "dark") {
            title = "茫茫天下，有几人知道我们的梦想和苦难";
        } else {
        }
        return (
            <Col>
                <Row style={{marginTop: 100}}>
                    <Col>
                        <h1 style={{textAlign: "center"}}>{title}</h1>
                        <SearchField {...this.props}/>
                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col lg="12" xs="12">*/}
                {/*        <Links/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Col>
        );
    }
}

export default Content;