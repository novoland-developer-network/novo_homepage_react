import React, {Component} from "react";
import {Row, Button} from "react-bootstrap";
import "./list/links.css"

class Links extends Component {
    render() {
        return (
            <>
                <Row className="list-title-bar bg-secondary">
                    <h2>官方资源</h2>
                </Row>
                <Button className="list-item" href="https://baidu.com" type="button" variant="link">@江南</Button>
                <Button className="list-item" href="https://baidu.com" type="button" variant="link">@九州志</Button>
                <Button className="list-item" href="https://baidu.com" type="button" variant="link">@海上牧云记</Button>
            </>
        );
    }
}

export default Links;
