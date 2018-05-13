import React, { Component } from 'react';
import { 
    Table, Grid, Row, Col, 
    Thumbnail, Tabs, Tab, 
    Breadcrumb, BreadcrumbItem, 
    MenuItem, ButtonToolbar, DropdownButton,
    FormGroup, ControlLabel, FormControl,
    Glyphicon } from "react-bootstrap";
import Iframe from 'react-iframe';

import { Cookies, withCookies} from 'react-cookie';
import { instanceOf } from 'prop-types';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import '../../css/projectworkspace.css'

import { Card } from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import folderImage from 'assets/img/folder.jpg';
import jsonImage from 'assets/img/jsonfile.png';

import { projAttributes, projData } from "variables/Variables.jsx";


class ProjectWorkspace extends Component {
    constructor(props){
        super(props);

        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',

            project_id: '',
            project_name: '',
            project_desc: '',
            project_url: '',
            owner_name: '',
            folders: [],
            files: [],

            update_project_name: '',
            update_project_desc: '',

            projID: props.match.params.value,
            projName: '',
            projGroup: '',
            projNumImages: '',
            projNumAnnotations: '',
        }
        this.getUser = this.getUser.bind(this);
        this.getProject = this.getProject.bind(this);
        this.getFolder = this.getFolder.bind(this);
        this.getMembers = this.getMembers.bind(this);
        this.displayDirectory = this.displayDirectory.bind(this);
        this.handleClickFolder = this.handleClickFolder.bind(this);
        this.handleClickDropdown = this.handleClickDropdown.bind(this);
        this.handleOpenJSON = this.handleOpenJSON.bind(this);
        this.handleOpenLabelMe = this.handleOpenLabelMe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateProject = this.handleUpdateProject.bind(this);
        this.handleLeaveProject = this.handleLeaveProject.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        // this.getUser();
        // this.getProject();
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

    getProject() {
        this.setState({
            projName: projData[this.state.projID-1][1],
            projGroup: projData[this.state.projID-1][2],
            projNumImages: projData[this.state.projID-1][3],
            projNumAnnotations: projData[this.state.projID-1][4],
        })

        axios.get(url + '/getproject/:id')
            .then((response) => {
                if(response.data.message === "success"){
                    this.setState({
                        project_id: response.data.project_id,
                        project_name: response.data.project_name,
                        project_desc: response.data.project_desc,
                        project_url: response.data.project_url,
                        permission: response.data.permission,
                        owner_name: response.data.owner_name,
                        folders: response.data.folders,
                        files: response.data.files,
                    })
                }
            })
    }
    
    getFolder() {

    }

    getMembers() {

    }

    displayDirectory() {
        return(
            <Card 
                title = "Directory"
                content = {
                    <div className="content">
                        <Breadcrumb>
                            Path: <BreadcrumbItem href="#">root</BreadcrumbItem>
                        </Breadcrumb>
                        <Grid fluid>
                            <Row>
                                <div>
                                    <Thumbnail 
                                        className="thumbnail"
                                        onClick={ this.handleClickFolder }
                                        >
                                        <img src={ folderImage } className="tn" alt="folder"/>
                                        <Row>
                                            <Col md={10}>
                                                <p className="textoverflow thumbnail-title">Initial long text coming  here to test ellipsis</p>
                                            </Col>
                                            <Col md={2}>
                                                <Button className="thumbnail-button" bsSize="small"><Glyphicon glyph="folder-open"/></Button>
                                    
                                            </Col>
                                        </Row>
                                    </Thumbnail>
                                    <Thumbnail 
                                        className="thumbnail"
                                        onClick={ this.handleClickFolder }
                                        >
                                        <img src={ jsonImage } className="tn" alt="file"/>
                                        <Row>
                                            <Col md={10}>
                                                <p className="textoverflow thumbnail-title">Initial long text coming  here to test ellipsis</p>
                                            </Col>
                                            <Col md={2}>
                                                <ButtonToolbar className="thumbnail-button">
                                                    <DropdownButton
                                                        bsSize="small"
                                                        title={<Glyphicon glyph="menu-hamburger"/>}
                                                        noCaret
                                                        id="dropdown-size-small"
                                                        onClick = { this.handleClickDropdown }
                                                        >
                                                        <MenuItem eventKey="1" onClick = { this.handleOpenLabelMe }>Open in LabelMe</MenuItem>
                                                        <MenuItem eventKey="2" onClick = { this.handleOpenJSON }>Open JSON</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>
                                            </Col>
                                        </Row>
                                    </Thumbnail>
                                </div>
                            </Row>
                        </Grid>
                    </div>
                }
            />
        )
    }

    handleClickFolder(e) {
        e.preventDefault();

        console.log("Click")
    }

    handleClickDropdown(e) {
        e.preventDefault();
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();
    }

    handleOpenJSON(e) {
        e.preventDefault();
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();

        window.open("", '_blank').focus();
    }

    handleOpenLabelMe(e) {
        e.preventDefault();
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();

        window.open("http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg", '_blank').focus();
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
            axios.post(url + '/updateproject', data)
                .then((response) => {
                    if(response.data.message === "success") {
                        swal("Success", "This projects has been updated.", "success")
                    } else {
                        swal("Error", "", "error");
                    }
                }).catch((error) => {
                    console.log(error);
                    swal("Network Error", "Project could not be updated.", "error");
                })
        } else {
            swal("Warning", "Please complete all fields.", "warning");
        }
    }

    handleLeaveProject(e) {
        e.preventDefault();
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

        Directory = this.displayDirectory();

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
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
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

export default withCookies(ProjectWorkspace);