import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

/**
 * This is a comment for the component.  Commenting this is a test how long can I type on one line blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
 * This is the sexy one.<br>
 * This is another line.
 */

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this
            .toggle
            .bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      Hey Million wake up
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;