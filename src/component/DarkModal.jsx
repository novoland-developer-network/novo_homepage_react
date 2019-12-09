import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";

class DarkModal extends Component {
    enteredHandler = () => {
        setTimeout(() => {
            this.props.onhide();
        }, 3000);
    };

    render() {
        return (
            <Modal
                onEntered={this.enteredHandler}
                show={this.props.show}
                onHide={this.props.onhide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header style={{margin: "0 auto"}}>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        欢迎来到里世界！
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }
}

export default DarkModal;