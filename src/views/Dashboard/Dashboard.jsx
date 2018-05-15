import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import { UserCard } from 'components/UserCard/UserCard.jsx';
import { Card } from 'components/Card/Card.jsx';
// import Button from 'elements/CustomButton/CustomButton';

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
        this.getProjectOwnerName = this.getProjectOwnerName.bind(this); 
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        this.getUser();
        this.getYourProjects();
    }

    componentDidUpdate() {
        console.log(this.state.yourProjects)
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
        }).catch((error) => {
            console.log('getUser()', error);
            swal("Network Error", "User could not be fetched.", "error");
        })
    }

    // getYourProjects() {
    //     axios({
    //         url: url + '/projects',
    //         method: 'get',
    //         headers: { UID: this.state.token },
    //     }).then(async (response) => {
    //         console.log('getYourProjects()', response);
    //         this.setState({
    //             yourProjects: response.data,
    //         })
    //         for(var iter in this.state.yourProjects) {
    //             await axios({
    //                 url: url + '/users',
    //                 method: 'get',
    //                 headers: { UID: this.state.yourProjects[iter].project_owner_id },
    //             }).then((response) => {
    //                 console.log('getProjectOwnerName()', response);
    //                 // this.setState({
    //                 //     // yourProjects: this.state.yourProjects
    //                 //     ownerNames: this.state.ownerNames.concat([response.data.first_name + ' ' + response.data.last_name])
    //                 // })
    //                 // console.log(this.state.ownerNames)
    //                 // console.log(iter)
    //                 this.state.yourProjects[iter]['owner_name'] = response.data.first_name + ' ' + response.data.last_name;
    //                 this.forceUpdate();
    //             }).catch((error) => {
    //                 console.log('getProjectOwnerName()', error);
    //                 return 'Error: null';
    //             })
    //         }
    //         // console.log(this.state.yourProjects)
    //         // console.log(this.state.ownerNames);
    //     }).catch((error) => {
    //         console.log('getYourProjects()', error);
    //         swal("Network Error", "Your projects could not be fetched.", "error");
    //     })
    // }
    getYourProjects() {
        axios({
            url: url + '/projects',
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getYourProjects()', response);
            this.setState({
                yourProjects: response.data,
            });
        }).catch((error) => {
            console.log('getYourProjects()', error);
            swal("Network Error", "Your projects could not be fetched.", "error");
        })
    }

    getProjectOwnerName(owner_id) {
        axios({
            url: url + '/users',
            method: 'get',
            headers: { UID: owner_id },
        }).then((response) => {
            console.log('getProjectOwnerName()', response);
            console.log(response.data.first_name + ' ' + response.data.last_name)
            return (response.data.first_name + ' ' + response.data.last_name);
        }).catch((error) => {
            console.log('getProjectOwnerName()', error);
            return 'Error: null';
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
                        <th key={0}>Project Name</th>
                        <th key={1}>Description</th>
                        {/* <th key={2}>Owner</th> */}
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.yourProjects.map((prop, key) => {
                                return (
                                    <tr key={key} onClick={() => window.location.href = '#/project/' + prop.id}>
                                        <td key={0}>{prop.project_name}</td>
                                        <td key={1}>{prop.project_desc}</td>
                                        {/* <td key={2}>{prop.owner_name}</td> */}
                                        {/* <td key={2}>{prop.project_owner_id}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>          
                }
            />
        );

        DashUserCard = (
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
