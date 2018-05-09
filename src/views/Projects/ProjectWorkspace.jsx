import React, { Component } from 'react';
import { Table, Tabs, Tab, Col } from "react-bootstrap";
import Iframe from 'react-iframe';


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

    render() {
        let DataTable = null;
        let LabelMe = null;
        DataTable = (
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
        LabelMe = (
            <Iframe url="http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg"
                width="100%"
                height="100%"
                display="initial"
                position="relative"
                allowFullScreen/>
        );

        return (
            
            <div className="content">
                <Col md={6}><p><b>Project:</b> {this.state.projName}</p></Col>
                <Col md={6}><p><b>Group:</b> {this.state.projGroup}</p></Col>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Dashboard">
                        
                    </Tab>
                    <Tab eventKey={2} title="Annotation Data">
                        {DataTable}
                    </Tab>
                    <Tab eventKey={3} title="LabelMe Tool">
                        {LabelMe}
                    </Tab>
                </Tabs>
            </div>
        )
    }


}

export default ProjectWorkspace;