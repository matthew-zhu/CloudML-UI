import React, { Component } from 'react';
import { Table, Grid, Row, Thumbnail, Tabs, Tab, Col, Breadcrumb, BreadcrumbItem, MenuItem, ButtonToolbar, DropdownButton } from "react-bootstrap";
import Iframe from 'react-iframe';

import '../../css/projectworkspace.css'

import folderImage from 'assets/img/folder.jpg';

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
        }
        this.getProject = this.getProject.bind(this)
        this.handleClickFolder = this.handleClickFolder.bind(this)
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
    }

    handleClickFolder(e) {
        e.preventDefault();
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();

        console.log("Click")
    }

    render() {
        let Dashboard = null;
        let Directory = null;
        let Members = null;
        let LabelMe = null;
        let Settings = null;

        Directory = (
            <div>
                <Breadcrumb>
                    Path: <BreadcrumbItem href="#">root</BreadcrumbItem>
                    
                </Breadcrumb>
                <Grid>
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
        );

        LabelMe = (
            <Iframe url="http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg"
                width="100%"
                height="100%"
                display="initial"
                position="relative"
                allowFullScreen/>
        );

        Members = (
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
        );

        Settings = (
            <Tab eventKey={5} title="Settings">
            </Tab>
        );

        return (
            
            <div className="content">
                <Col md={6}><p><b>Project:</b> {this.state.projName}</p></Col>
                <Col md={6}><p><b>Admin:</b> {this.state.projGroup}</p></Col>
                <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Dashboard">
                        
                    </Tab>
                    <Tab eventKey={2} title="Directory">
                        {Directory}
                    </Tab>
                    <Tab eventKey={3} title="LabelMe Tool">
                        {LabelMe}
                    </Tab>
                    <Tab eventKey={4} title="Members">
                        {Members}
                    </Tab>
                    {Settings}
                </Tabs>
            </div>
        )
    }


}

export default ProjectWorkspace;