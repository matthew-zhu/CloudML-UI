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
        this.handleClickFile = this.handleClickFile.bind(this);
        this.handleClickDropdown = this.handleClickDropdown.bind(this);
        this.handleOpenJSON = this.handleOpenJSON.bind(this);
        this.handleOpenLabelMe = this.handleOpenLabelMe.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateProject = this.handleUpdateProject.bind(this);
        this.handleLeaveProject = this.handleLeaveProject.bind(this);
        this.handleRemoveMember = this.handleRemoveMember.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        // this.getUser();
        this.getProject();
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

        // axios.get(url + '/getproject/:id')
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
                        <div>
                            <Row>
                                <Col md={11}>
                                    <Breadcrumb>
                                        Path: <BreadcrumbItem href="#">root</BreadcrumbItem>
                                    </Breadcrumb>
                                </Col>
                                <Col md={1}>
                                    {/* <Button 
                                        bsStyle="primary" 
                                        className="thumbnail-button" 
                                        bsSize="small"
                                        onClick={this.handleCreateFolder}
                                        >
                                        Create Folder
                                    </Button> */}
                                    <ButtonToolbar className="thumbnail-button">
                                        <DropdownButton
                                            bsSize="small"
                                            title="Create Folder"
                                            noCaret
                                            id="dropdown-size-small"
                                            onClick = { this.handleClickDropdown }
                                            pullRight
                                            >
                                            <MenuItem eventKey="1" disabled>
                                            <FormGroup controlId="formControlsTextarea">
                                                <ControlLabel>Folder Name</ControlLabel>
                                                <FormControl 
                                                    name="folder_name" 
                                                    rows="1" 
                                                    bsClass="form-control" 
                                                    placeholder="Name of Folder" 
                                                    bsSize="small"
                                                    onKeyPress={ this.handleCreateFolder }
                                                />
                                            </FormGroup>
                                            </MenuItem>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </div>
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
                                                <p className="textoverflow thumbnail-title">Folder</p>
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
                                                        <MenuItem eventKey="1" onClick = { this.handleClickFolder }>Open Folder</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="2" onClick = { this.deleteFile }><font color="#ff0000">Delete</font></MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>
                                    
                                            </Col>
                                        </Row>
                                    </Thumbnail>
                                    <Thumbnail 
                                        className="thumbnail"
                                        onClick={ this.handleClickFile }
                                        >
                                        <img src={ jsonImage } className="tn" alt="file"/>
                                        <Row>
                                            <Col md={10}>
                                                <p className="textoverflow thumbnail-title">File</p>
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
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="3" onClick = { this.deleteFile }><font color="#ff0000">Delete</font></MenuItem>
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

    handleCreateFolder(e) {
        e.preventDefault();

        if(e.key === "Enter") {
            console.log("Pressed Enter")
        }
    }

    handleClickFolder(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        console.log("Click")
    }

    handleClickFile(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        console.log("Click")
    }

    handleClickDropdown(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();
    }

    handleOpenJSON(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        window.open("", '_blank').focus();
    }

    handleOpenLabelMe(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        window.open("http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg", '_blank').focus();
    }

    deleteFile(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();
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

    handleRemoveMember(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

        swal({
            title:"Are you sure?", 
            text:"You are about to remove a user from this project. Do you want to continue?", 
            icon:"warning", 
            buttons: true, 
            dangerMode: true
        }).then((willDelete) => {

        });
    }


    render() {
        // let Dashboard = null;
        let Directory = null;
        let Members = null;
        let LabelMe = null;
        let Settings = null;
        
        // Dashboard = (
        //     <Card 
        //         title = "Dashboard"
        //         content = {
        //             <div/>
        //         }
        //     />
        // );

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
                                        {
                                            
                                            prop.map((prop, key) => {
                                                return (
                                                    <td key={key}>
                                                        {prop}
                                                    </td>
                                                    
                                                );
                                            })
                                        }
                                        <td key={5}>
                                            {/* <ButtonToolbar>
                                                <DropdownButton
                                                    bsSize="small"
                                                    title={<font color="#ff0000"><Glyphicon glyph="remove"/></font>}
                                                    noCaret
                                                    id="dropdown-size-small"
                                                    onClick = { this.handleClickDropdown }
                                                    pullRight
                                                    >
                                                    <MenuItem eventKey="1" onClick = { this.handleRemoveMember }><font color="#ff0000">Remove</font></MenuItem>
                                                </DropdownButton>
                                            </ButtonToolbar> */}
                                            <Button pullRight onClick = { this.handleRemoveMember } >
                                                <font color="#ff0000"><Glyphicon glyph="remove"/></font>
                                            </Button>
                                        </td>
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
                                        defaultValue= { this.state.projName } //dummydata
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
                                        // defaultValue = ""
                                        defaultValue= { this.state.projGroup } //dummydata
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
                    {/* <Tab eventKey={1} title="Dashboard">
                        {Dashboard}
                    </Tab> */}

                    <Tab eventKey={2} title="LabelMe Tool">
                        {LabelMe}
                    </Tab>
                    <Tab eventKey={3} title="Directory">
                        {Directory}
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