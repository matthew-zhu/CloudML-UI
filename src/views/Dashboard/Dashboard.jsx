import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import { UserCard } from 'components/UserCard/UserCard.jsx';
import { Card } from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { projData, projAttributes } from "variables/Variables.jsx";

class Dashboard extends Component {
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
            configs: [],

            yourProjects: [],            
        }
        this.getUser = this.getUser.bind(this); 
        this.getYourProjects = this.getYourProjects.bind(this);       
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        // this.getUser();
        // this.getYourProjects();
    }

    getUser() {
        axios.get(url + '/getuser/' + this.state.token)
            .then((response) => {
                if(response.data.message === "success") {
                    this.setState({
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        dob: response.data.dob,
                        email: response.data.email,
                        phone_number: response.data.phone_number,
                        avatar_url: response.data.avatar_url,
                        configs: response.data.configs,
                    });
                } else {
                    swal("Error", "", "error");
                }
            }).catch((error) => {
                console.log(error);
                swal("Network Error", "User could not be fetched.", "error");
            })
    }

    getYourProjects() {
        axios.get(url + '/getyourprojects/' + this.state.token)
            .then((response) => {
                if(response.data.message === "success"){
                    this.setState({
                        yourProjects: response.data.yourProjects,
                    })
                } else {
                    swal("Error", "", "error");
                }
            }).catch((error) => {
                console.log(error);
                swal("Network Error", "Your projects could not be fetched.", "error");
            })
    }

    render() {
        let DashUserCard = null;
        let YourProjectsCard = null;

        YourProjectsCard = (
            <Card
                title="Your Projects"
                ctTableFullWidth
                ctTableResponsive
                content={
                <Table striped hover>
                    <thead>
                    <tr>
                        {projAttributes.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {projData.map((prop, key) => {
                        return (
                        <tr key={key} onClick={() => window.location.href = '#/project/' + (key+1)}>
                            {prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
                            })}
                        </tr>
                        );
                    })}
                    </tbody>
                </Table>
                }
            />
        );

        DashUserCard = (
            <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={this.state.user.photoURL}
                name={this.state.first_name + " " + this.state.last_name}
                userName={this.state.email}
                description={
                    <span>
                        <span>Phone: {this.state.phone_number}</span>
                        <br/>
                        <span>DOB: {this.state.dob}</span>
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
        );

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            {YourProjectsCard}
                        </Col>
                        <Col md={4}>
                            {DashUserCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withCookies(Dashboard);
