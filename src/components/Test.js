import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from
// 'reactstrap';

/**
 * This is a comment for the component.  Commenting this is a test how long can I type on one line blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
 * This is the sexy one.<br>
 * This is another line.
 */

class TestExample extends React.Component {

    render() {
        return (
            <div>
                <div class="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
                <div class="alert alert-secondary" role="alert">
                    This is a secondary alert—check it out!
                </div>
                <div class="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
                <div class="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
                <div class="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div class="alert alert-info" role="alert">
                    This is a info alert—check it out!
                </div>
                <div class="alert alert-light" role="alert">
                    This is a light alert—check it out!
                </div>
                <div class="alert alert-dark" role="alert">
                    This is a dark alert—check it out!
                </div>
            </div>
        );
    }
}

export default TestExample;