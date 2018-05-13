import React, { Component } from 'react';
import { 
    Table, Grid, Row, Col, 
    Thumbnail, Tabs, Tab, 
    Breadcrumb, BreadcrumbItem, 
    MenuItem, ButtonToolbar, DropdownButton,
    FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Iframe from 'react-iframe';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import '../../css/projectworkspace.css'

import folderImage from 'assets/img/folder.jpg';


import { Card } from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import { projAttributes, projData } from "variables/Variables.jsx";


class ProjectWorkspace extends Component {

    constructor(props){
        super();

        this.state = {
            projID: props.match.params.value,
            projName: '',
            projGroup: '',
            projNumImages: '',
            projNumAnnotations: '',

            project_id: '',
            project_name: '',
            project_desc: '',
            project_url: '',
            owner_name: '',
            folders: [],
            files: [],

            update_project_name: '',
            update_project_desc: '',
        }
        this.getProject = this.getProject.bind(this)
        this.handleClickFolder = this.handleClickFolder.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateProject = this.handleUpdateProject.bind(this);
    }

    componentWillMount() {
        this.getProject();
    }

    getProject() {
        this.setState({
            projName: projData[this.state.projID-1][1],
            projGroup: projData[this.state.projID-1][2],
            projNumImages: projData[this.state.projID-1][3],
            projNumAnnotations: projData[this.state.projID-1][4],
        })

        // axios.get(url + '/getproject')
        //     .then((response) => {
        //         if(response.data.message === "success"){
        //             this.setState({
        //                 project_id: response.data.project_id,
        //                 project_name: response.data.project_name,
        //                 project_desc: response.data.project_desc,
        //                 project_url: response.data.project_url,
        //                 permission: response.data.permission,
        //                 owner_name: response.data.owner_name,
        //                 folders: response.data.folders,
        //                 files: response.data.files,
        //             })
        //         }
        //     })
    }

    handleClickFolder(e) {
        e.preventDefault();
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();

        console.log("Click")
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleUpdateProject(e) {
        e.preventDefault();

        console.log("update_project_name: " + this.state.update_project_name);
        console.log("update_project_desc: " + this.state.update_project_desc);

        if(this.state.update_project_name && this.state.update_project_desc) {
            //post project
            var data = {
                'update_project_name': this.state.update_project_name,
                'update_project_desc': this.state.update_project_desc,
            }
            axios.post(url + '/createproject', data)
                .then((response) => {
                    if(response.data.message === "success") {
                        //redirect to newly created project page
                        
                    } else {
                        swal("Error", "", "error");
                    }
                }).catch((error) => {
                    console.log(error);
                    swal("Network Error", "Project could not be updated.", "error");
                })
        } else {
            swal("Error", "Please complete all fields.", "error");
        }

        
    }

    render() {
        let Dashboard = null;
        let Directory = null;
        let Members = null;
        let LabelMe = null;
        let Settings = null;
        
        Dashboard = (
            <Card 
                title = "Dashboard"
                content = {
                    <div/>
                }
            />
        );

        Directory = (
            <Card 
                title = "Directory"
                content = {
                    <div className="content">
                        <Breadcrumb>
                            Path: <BreadcrumbItem href="#">root</BreadcrumbItem>
                        </Breadcrumb>
                        <Grid fluid>
                            <Row>
                                <Col xs={2} md={2}>
                                    <Thumbnail src={folderImage} 
                                                alt="242x200" 
                                                className="thumbnail"
                                                onClick={this.handleClickFolder}
                                                >
                                        <p className="textoverflow">Initial long text coming  here to test ellipsis</p>
                                        <p>
                                        {/* <Button bsStyle="primary" bsSize="small">Button</Button> */}
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={2} md={2}>
                                    <Thumbnail src={folderImage} alt="242x200" onClick={this.handleClickFolder}>
                                    <p className="textoverflow">Initial long text coming  here to test ellipsis</p>
                                        <ButtonToolbar>
                                            <DropdownButton
                                                bsSize="small"
                                                title="Open"
                                                id="dropdown-size-small"
                                                >
                                                <MenuItem eventKey="1">Open in LabelMe</MenuItem>
                                                <MenuItem eventKey="2">Open JSON</MenuItem>
                                            </DropdownButton>
                                        </ButtonToolbar>
                                    </Thumbnail>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                }
            />
        );

        LabelMe = (
            <Card 
                title = "LabelMe Tool"
                content = {
                    <Iframe url="http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg"
                        width="100%"
                        height="100%"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                }
            />
        );

        Members = (
            <Card 
                title = "Members"
                content = {
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
                            <tr key={key}>
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

        Settings = (
            <Card
                title="Update Project"
                content = {
                    <form>
                        <Col md={12}>
                            <Row>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Project Name</ControlLabel>
                                    <FormControl 
                                        name="update_project_name" 
                                        rows="1" 
                                        bsClass="form-control" 
                                        placeholder="Name of the project" 
                                        onChange = { this.handleChange }
                                    />
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Project Owner</ControlLabel>
                                    <FormControl 
                                        name="project_owner" 
                                        rows="1" 
                                        bsClass="form-control" 
                                        placeholder="Owner of the project" 
                                        defaultValue = "Owner"
                                        disabled = {true}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Project Description</ControlLabel>
                                    <FormControl 
                                        name="update_project_desc" 
                                        rows="10" 
                                        componentClass="textarea" 
                                        bsClass="form-control" 
                                        placeholder="Please describe this project." 
                                        onChange = { this.handleChange }
                                    />
                                </FormGroup>
                            </Row>
                            <Button
                            bsStyle="info"
                            pullRight
                            fill
                            type="submit"
                            onClick={ this.handleUpdateProject }
                        >
                            Update Project
                        </Button>
                        </Col>
                        
                        <div className="clearfix"></div>
                    </form>
                }
            />
        );

        return (
            
            <div className="content">
                <Col md={6}><p><b>Project:</b> {this.state.projName}</p></Col>
                <Col md={6}><p><b>Admin:</b> {this.state.projGroup}</p></Col>
                <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Dashboard">
                        {Dashboard}
                    </Tab>
                    <Tab eventKey={2} title="Directory">
                        {Directory}
                    </Tab>
                    <Tab eventKey={3} title="LabelMe Tool">
                        {LabelMe}
                    </Tab>
                    <Tab eventKey={4} title="Members" >
                        {Members}
                    </Tab>
                    <Tab eventKey={5} title="Settings">
                        {Settings}
                    </Tab>
                </Tabs>
            </div>
        )
    }


}

export default ProjectWorkspace;