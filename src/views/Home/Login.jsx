import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col, Image, Grid } from 'react-bootstrap';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Dashboard from 'views/Dashboard/Dashboard';

import logo from 'assets/img/reactlogo.png';
import loginbg from 'assets/img/loginbackground.jpg';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';

// var firebase = require("firebase");
// var firebaseui = require('firebaseui');

// // Initialize Firebase
// // TODO: Replace with your project's customized code snippet
// var config = {
//     apiKey: "AIzaSyD70XLq0XkOTOVUiIJsnPyrUzXrn0f1s3k",
//     authDomain: "cloudml-202000.firebaseapp.com",
//     databaseURL: "https://cloudml-202000.firebaseio.com",
//     storageBucket: "cloudml-202000.appspot.com",
// };
// firebase.initializeApp(config);


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: ""
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
        //event.preventDefault();
        return (
            <Route path={"/dashboard"} component={Dashboard}/>
        );
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={4}/>
                        <Col md={4}>
                            <Card
                                title="Login"
                                content={
                                    <div className="Login">
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
                                        <Button
                                            block
                                            bsSize="large"
                                            disabled={!this.validateForm()}
                                            type="submit"
                                        >
                                            Login
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

export default Login;