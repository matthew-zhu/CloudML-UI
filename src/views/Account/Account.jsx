import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',
        }
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                 label : "Display Name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Name",
                                                 defaultValue : this.state.user.displayName,
                                                 disabled : true
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Email Address",
                                                    type : "email",
                                                    bsClass : "form-control",
                                                    placeholder : "Email Address",
                                                    defaultValue : this.state.user.email,
                                                    disabled : true
                                                   }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Phone Number",
                                                    type : "tel",
                                                    bsClass : "form-control",
                                                    placeholder : "Phone Number",
                                                    defaultValue : this.state.user.phoneNumber,
                                                    disabled : true
                                                   }
                                            ]}
                                        />
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Please write a little about yourself." defaultValue=""/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={this.state.user.photoURL}
                                name={this.state.user.displayName}
                                userName={this.state.user.email}
                                description={
                                    <span>
                                        "Hello."
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default withCookies(Account);
