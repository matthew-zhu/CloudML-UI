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

import { projAttributes, projData } from "variables/Variables.jsx";


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
        this.joinProject = this.joinProject.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        // this.getYourProjects();
        // this.getAllProjects();
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

    getAllProjects() {
        axios.get(url + '/getallprojects/' + this.state.token)
            .then((response) => {
                if(response.data.message === "success"){
                    this.setState({
                        allProjects: response.data.allProjects,
                    })
                } else {
                    swal("Error", "", "error");
                }
            }).catch((error) => {
                console.log(error);
                swal("Network Error", "All projects could not be fetched.", "error");
            })
    }

    joinProject(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();
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

        AllProjectsCard = (
            <Card
                title="All Projects"
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
                            <td key={5}>
                                <Button pullRight onClick = { this.joinProject }>
                                    Join
                                </Button>
                            </td>
                        </tr>
                        );
                    }
                    )}
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
