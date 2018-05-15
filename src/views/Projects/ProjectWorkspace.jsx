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

            user_id: '',
            first_name: '',
            last_name: '',
            dob: '',
            email: '',
            phone_number: '',
            avatar_url: '',
            configs: [],

            project_id: props.match.params.value,
            project_name: '',
            project_desc: '',
            project_url: '',
            project_owner_id: '',

            folders: [],
            files: [],

            current_folder_id: '',

            update_project_name: '',
            update_project_desc: '',

            selectedFile: null,

            add_email: '',
            add_permissions: '',

            // projID: props.match.params.value,
            // projName: '',
            // projGroup: '',
            // projNumImages: '',
            // projNumAnnotations: '',
        }
        this.getUser = this.getUser.bind(this);
        this.getProject = this.getProject.bind(this);
        this.openFolder = this.openFolder.bind(this);
        this.getMembers = this.getMembers.bind(this);
        this.displayDirectory = this.displayDirectory.bind(this);
        this.handleCreateFolder = this.handleCreateFolder.bind(this);
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
        this.getProjectOwnerName = this.getProjectOwnerName.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleAddMember = this.handleAddMember.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        this.getUser();
        this.getProject();
    }

    getUser() {
        axios({
            url: url + '/users',
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getUser()', response);
            this.setState({
                user_id: response.data.id,
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

    getProject() {
        // this.setState({
        //     projName: projData[this.state.projID-1][1],
        //     projGroup: projData[this.state.projID-1][2],
        //     projNumImages: projData[this.state.projID-1][3],
        //     projNumAnnotations: projData[this.state.projID-1][4],
        // })

        axios({
            url: url + '/projects/'+this.state.project_id,
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getProject()', response);
            this.setState({
                project_name: response.data.project_name,
                project_desc: response.data.project_desc,
                project_url: response.data.project_url,
                project_owner_id: response.data.project_owner_id,
                current_folder_id: response.data.project_id,
                update_project_desc: response.data.project_desc,
            });
        }).catch((error) => {
            console.log('getProject()', error);
            swal("Network Error", "This project could not be fetched.", "error");
        })

        //get top level folders
        axios({
            url: url + '/folders?project_id=' + this.state.project_id,
            method: 'get',
            headers: { UID: this.state.token },
        }).then((response) => {
            console.log('getProject() folders', response);
            this.setState({
                folders: response.data,
            });
        }).catch((error) => {
            console.log('getProject() folders', error);
            swal("Network Error", "This project's folders could not be fetched.", "error");
        })
        
        
    }
    
    openFolder(folder_id) {
        // axios({
        //     url: url + '/folders?project_id=' + folder_id,
        //     method: 'get',
        //     headers: { UID: this.state.token },
        // }).then((response) => {
        //     console.log('getProject()', response);
        //     this.setState({
        //         project_name: response.data.project_name,
        //         project_desc: response.data.project_desc,
        //         project_url: response.data.project_url,
        //         project_owner_id: response.data.project_owner_id,
        //         current_folder_id: response.data.project_id,
        //     });
        // }).catch((error) => {
        //     console.log('getProject()', error);
        //     swal("Network Error", "This project could not be fetched.", "error");
        // })
    }

    getMembers() {

    }

    displayDirectory() {
        let displayFolders = null;

        return(
            <Card 
                title = "Directory"
                content = {
                    <div className="content">
                        <div>
                            <Row>
                                <Col md={6}>
                                    <Breadcrumb>
                                        Path: <BreadcrumbItem href="#">root</BreadcrumbItem>
                                    </Breadcrumb>
                                </Col>
                                <Col md={3}>
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
                                                {/* <FormControl 
                                                    name="new_folder_name" 
                                                    rows="1" 
                                                    bsClass="form-control" 
                                                    placeholder="Name of Folder" 
                                                    bsSize="small"
                                                    onChange= { this.handleChange }
                                                    onKeyPress={ this.handleCreateFolder }
                                                /> */}
                                                <FormControl 
                                                    name="new_folder_name" 
                                                    bsClass="form-control" 
                                                    placeholder="Folder Name"
                                                    onChange = { this.handleChange }
                                                    // onKeyPress={ this.handleCreateFolder }
                                                    />
                                                    <br/>
                                                <Button 
                                                    // bsStyle="primary" 
                                                    className="thumbnail-button" 
                                                    bsSize="small"
                                                    onClick={this.handleCreateFolder}
                                                    pullRight
                                                    >
                                                    Create Folder
                                                </Button>
                                            </FormGroup>
                                            </MenuItem>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Col>
                                <Col md={3}>
                                    {/* <Button 
                                        className="thumbnail-button" 
                                        bsSize="small"
                                        onClick={this.handleUploadFile}
                                        >
                                        Upload File
                                    </Button> */}
                                    <input type="file" onChange={this.fileChangedHandler}/>
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


        console.log(this.state.new_folder_name)

        axios({
            url: url + '/folders/',
            method: 'post',
            headers: { UID: this.state.token },
            data: {
                folder_name: this.state.new_folder_name,
                project_id: '33c7ede1-10cc-46eb-836f-fa3adc35e27a',
                parent_folder_id: '33c7ede1-10cc-46eb-836f-fa3adc35e27a',
            }
        }).then((response) => {
            console.log('createFolder()', response);
        }).catch((error) => {
            console.log('createFolder()', error);
            swal("Network Error", "This folder cannot be created.", "error");
        })
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

    handleUploadFile(e) {
        e.preventDefault();
        if(e.stopPropagation) e.stopPropagation();

    }

    fileChangedHandler(e) {
        e.preventDefault();
        const file = e.target.files[0];
        this.setState({
            selectedFile: e.target.files[0]
        })
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
        console.log(this.state.project_id)
        console.log("update_project_desc: " + this.state.update_project_desc);

        if(this.state.update_project_desc) {
            axios({
                url: url + '/projects/' + this.state.project_id,
                method: 'patch',
                headers: { UID: this.state.token },
                data: {
                    project_desc: this.state.update_project_desc,
                }
            }).then((response) => {
                console.log('updateProject()', response);
                swal("Success", "Project has been updated!", "success").then(() => {
                    window.location.reload();
                })
            }).catch((error) => {
                console.log('updateProject()', error);
                swal("Network Error", "Project could not be updated.", "error");
            })
        } else {
            swal("Warning", "Please enter a description", "warning");
        }
    }

    handleLeaveProject(e) {
        e.preventDefault();
    }

    handleAddMember() {
        console.log(this.state.add_email)
        console.log(this.state.add_permissions)
        // if(this.state.add_email && this.state.add_permissions) {
        //     axios({
        //         url: url + '/projects/' + this.state.project_id + '/share',
        //         method: 'post',
        //         headers: { UID: this.state.token },
        //         data: {
        //             email: this.state.add_email,
        //             permissions: this.state.add_permissions,
        //         }
        //     }).then((response) => {
        //         console.log('handleAddMember()', response);
        //         swal("Success", "User has been added to this project.", "success");
        //     }).catch((error) => {
        //         console.log('handleAddMember()', error);
        //         swal("Error", "User could not be added to this project.", "error");
        //     })
        // } else {
        //     swal("Warning", "Please complete all fields", "warning");
        // }
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
        // let Dashboard = null;
        let Directory = null;
        let Members = null;
        // let LabelMe = null;
        let AddMembers = null;
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

        // LabelMe = (
        //     <Card 
        //         title = "LabelMe Tool"
        //         content = {
        //             <Iframe url="http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg"
        //                 width="100%"
        //                 height="100%"
        //                 display="initial"
        //                 position="relative"
        //                 allowFullScreen/>
        //         }
        //     />
        // );

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

        if(this.state.user_id === this.state.project_owner_id) {
            AddMembers = (
                <Tab eventKey={5} title="Add Members">
                    <Card
                        title="Add Member"
                        content = {
                            <form>
                                <Col md={12}>
                                    <Row>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>User Email</ControlLabel>
                                            <FormControl 
                                                name="add_email" 
                                                rows="1" 
                                                bsClass="form-control" 
                                                placeholder="User Email" 
                                                defaultValue= { this.state.add_email } 
                                                // onChange = { this.handleChange }
                                            />
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Project Owner</ControlLabel>
                                            <FormControl 
                                                name="add_permissions" 
                                                rows="1" 
                                                bsClass="form-control" 
                                                placeholder="User Permissions" 
                                                // defaultValue = ""
                                                defaultValue= { this.state.add_permissions } 
                                            />
                                        </FormGroup>
                                    </Row>
                                    <Button
                                    bsStyle="info"
                                    pullRight
                                    fill
                                    type="submit"
                                    onClick={ this.handleAddMember }
                                >
                                    Add Member
                                </Button>
                                </Col>
                                
                                <div className="clearfix"></div>
                            </form>
                        }
                    />
                </Tab>
            );
        }

        if(this.state.user_id === this.state.project_owner_id) {
            Settings = (
                <Tab eventKey={6} title="Settings">
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
                                                defaultValue= { this.state.project_name } 
                                                // onChange = { this.handleChange }
                                                disabled = {true}
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
                                                defaultValue= { this.state.project_owner_id } 
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
                                                defaultValue={this.state.project_desc}
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
                </Tab>
            );
        }
        

        return (
            
            <div className="content">
                <Col md={6}><p><b>Project:</b> {this.state.project_name}</p></Col>
                <Col md={6}><p><b>Owner:</b> {this.state.project_owner_id}</p></Col>
                <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                    {/* <Tab eventKey={1} title="Dashboard">
                        {Dashboard}
                    </Tab> */}

                    {/* <Tab eventKey={2} title="LabelMe Tool">
                        {LabelMe}
                    </Tab> */}
                    <Tab eventKey={3} title="Directory">
                        {Directory}
                    </Tab>
                    <Tab eventKey={4} title="Members" >
                        {Members}
                    </Tab>
                    {AddMembers}
                    {Settings}
                </Tabs>
            </div>
        )
    }


}

export default withCookies(ProjectWorkspace);