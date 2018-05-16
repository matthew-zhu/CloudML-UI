import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import { Card } from 'components/Card/Card.jsx';
import { UserCard } from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',

            first_name: '',
            last_name: '',
            dob: '',
            email: '',
            phone_number: '',
            avatar_url: '',
            config: [],
        }
        this.handleChange = this.handleChange.bind(this);        
        this.getUser = this.getUser.bind(this);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    
    componentWillMount() {
        this.getUser();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getUser() {
        axios({
            url: url + '/users',
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getUser()', response);
            this.setState({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                dob: response.data.dob,
                email: response.data.email,
                phone_number: response.data.phone_number,
                avatar_url: response.data.avatar_url,
                configs: response.data.configs,
            });
            console.log(this.state)
        }).catch((error) => {
            console.log('getUser()', error);
            swal("Network Error", "User could not be fetched.", "error");
        })
    }

    handleUpdateProfile(e) {
        
        if(this.state.first_name && this.state.last_name && this.state.email && this.state.avatar_url) {
            axios({
                url: url + '/users',
                method: 'patch',
                headers: { UID: this.state.token },
                data: {
                    phone_number: this.state.phone_number,
                    dob: this.state.dob,
                    avatar_url: this.state.avatar_url,
                },
            }).then((response) => {
                swal("Success", "Your profile has been updated.", "success").then(() => {
                    window.location.reload()
                });
            }).catch((error) => {
                console.log(error);
                swal("Network Error", "User could not be updated.", "error");
            })
        } else {
            swal("Warning", "Please complete name, email, and image fields.", "warning");
        }
    }

    render() {
        let UpdateProfile = null;
        let VerticalUserCard = null;

        UpdateProfile = (
            <Card
                title="Update Profile"
                content={
                    // <form>
                    <div>
                        <Row>
                            <Col md={6}>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl 
                                        name="first_name" 
                                        rows="1" 
                                        bsClass="form-control" 
                                        placeholder="First Name" 
                                        value = { this.state.first_name || '' }
                                        onChange = { this.handleChange }
                                        disabled = {true}
                                        />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl 
                                        name="last_name" 
                                        rows="1" 
                                        bsClass="form-control" 
                                        placeholder="Last Name" 
                                        value = { this.state.last_name || '' }
                                        onChange = { this.handleChange }
                                        disabled = {true}
                                        />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl 
                                name="email" 
                                rows="1" 
                                bsClass="form-control" 
                                placeholder="Email Address"
                                value = { this.state.email || '' }
                                onChange = { this.handleChange }
                                disabled = {true}
                                />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Phone Number</ControlLabel>
                            <FormControl 
                                name="phone_number" 
                                rows="1" 
                                bsClass="form-control" 
                                placeholder="Phone Number" 
                                value = { this.state.phone_number || '' }
                                onChange = { this.handleChange }
                                />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Date of Birth</ControlLabel>
                            <FormControl 
                                name="dob" 
                                rows="1" 
                                bsClass="form-control" 
                                placeholder="Date of Birth" 
                                value = { this.state.dob || '' }
                                onChange = { this.handleChange }
                                />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Image</ControlLabel>
                            <FormControl 
                                name="avatar_url" 
                                rows="1" 
                                bsClass="form-control" 
                                placeholder="Image" 
                                value = { this.state.avatar_url || '' }
                                onChange = { this.handleChange }
                                />
                        </FormGroup>
                        <Button
                            bsStyle="info"
                            pullRight
                            fill
                            type="submit"
                            onClick={ this.handleUpdateProfile }
                            >
                            Update Profile
                        </Button>
                        
                        <div className="clearfix"></div>
                    {/* // </form> */}
                    </div>
                }
            />
        );

        VerticalUserCard = (
            <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={this.state.avatar_url}
                name={this.state.first_name + " " + this.state.last_name}
                userName={this.state.email}
                description={
                    <span>
                        <span>Phone: {this.state.phone_number}</span>
                        <br/>
                        <span>DOB: {this.state.dob}</span>
                    </span>
                }
                // socials={
                //     <div>
                //         <Button simple><i className="fa fa-facebook-square"></i></Button>
                //         <Button simple><i className="fa fa-twitter"></i></Button>
                //         <Button simple><i className="fa fa-google-plus-square"></i></Button>
                //     </div>
                // }
            />
        );


        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            {UpdateProfile}
                        </Col>
                        <Col md={4}>
                            {VerticalUserCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withCookies(Account);
