import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import '../../css/projects.css'

import { Card } from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';


class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',

            yourProjects: [],
            allProjects: [],
        }
        this.getAllProjects = this.getAllProjects.bind(this);
        this.getYourProjects = this.getYourProjects.bind(this);
        this.handleJoinProject = this.handleJoinProject.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        this.getYourProjects();
        this.getAllProjects();
    }

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

    getAllProjects() {
        axios({
            url: url + '/projects/all',
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getAllProjects()', response);
            this.setState({
                allProjects: response.data,
            });
        }).catch((error) => {
            console.log('getAllProjects()', error);
            swal("Network Error", "All projects could not be fetched.", "error");
        })
    }

    handleJoinProject(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        swal({
            title:"Are you sure?", 
            text:"You are about to join this project. Do you want to continue?", 
            icon:"info", 
            buttons: true, 
            dangerMode: false
        }).then((willDelete) => {

        });
    }

    render() {
        let YourProjectsCard = null;
        let AllProjectsCard = null;

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
                                        {/* <td key={2}>{this.getProjectOwnerName(prop.project_owner_id)}</td> */}
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

        AllProjectsCard = (
            <Card
                title="All Projects"
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
                            this.state.allProjects.map((prop, key) => {
                                return (
                                    <tr key={key} onClick={() => window.location.href = '#/project/' + prop.id}>
                                        <td key={0}>{prop.project_name}</td>
                                        <td key={1}>{prop.project_desc}</td>
                                        {/* <td key={2}>{this.getProjectOwnerName(prop.project_owner_id)}</td> */}
                                        {/* <td key={2}>{prop.project_owner_id}</td> */}
                                        {/* <td key={3}>
                                            <Button pullRight onClick = { this.handleJoinProject } >
                                                Join
                                            </Button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                }
            />
        );

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={10}>
                            {YourProjectsCard}
                        </Col>
                        <Col md={2}>
                            <Button bsStyle="primary" bsSize="lg" block onClick={() => window.location.href = '#/createproject/'}>Create Project</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            {AllProjectsCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
}

export default withCookies(Projects);
