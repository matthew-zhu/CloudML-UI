import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col, Image, Grid } from 'react-bootstrap';

import logo from 'assets/img/reactlogo.png';
import loginbg from 'assets/img/loginbackground.jpg';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: "",
        _password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={4}/>
                        <Col md={4}>
                            <Card
                                title="Signup"
                                content={
                                    <div className="Signup">
                                        <form onSubmit={this.handleSubmit}>
                                        <FormGroup controlId="email" bsSize="large">
                                            <ControlLabel>Email</ControlLabel>
                                            <FormControl
                                            autoFocus
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup controlId="password" bsSize="large">
                                            <ControlLabel>Password</ControlLabel>
                                            <FormControl
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            type="password"
                                            />
                                        </FormGroup>
                                        <FormGroup controlId="_password" bsSize="large">
                                            <ControlLabel>Re-Enter Password</ControlLabel>
                                            <FormControl
                                            value={this.state._password}
                                            onChange={this.handleChange}
                                            type="password"
                                            />
                                        </FormGroup>
                                        <Button
                                            block
                                            bsSize="large"
                                            disabled={!this.validateForm()}
                                            type="submit"
                                        >
                                            Signup
                                        </Button>
                                        </form>
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Signup;