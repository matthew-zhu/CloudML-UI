import React, { Component } from 'react';
import { Table, Tabs, Tab, Col } from "react-bootstrap";


import { groupAttributes, groupData, projAttributes, projData } from "variables/Variables.jsx";


class GroupWorkspace extends Component {

    constructor(props){
        super();

        this.state = {
            groupID: props.match.params.value,
            groupName: '',
            groupOwner: '',
            groupNumMembers: '',
            groupNumProjects: '',
        }
        this.getGroup = this.getGroup.bind(this)
    }

    componentWillMount() {
        this.getGroup();
    }

    getGroup() {
        this.setState({
            groupName: groupData[this.state.groupID-1][1],
            groupOwner: groupData[this.state.groupID-1][2],
            groupNumMembers: groupData[this.state.groupID-1][3],
            groupNumProjects: groupData[this.state.groupID-1][4],
        })
    }

    render() {
        let ProjectsTable = null;
        let MembersTable = null;

        ProjectsTable = (
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
                        if(prop[2] === this.state.groupName) {
                            return (
                            <tr key={key}>
                                {prop.map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                                })}
                            </tr>
                            );
                        } else {
                            return null;
                        }
                    })}
                    </tbody>
                </Table>
        );

        MembersTable = (
            <Table striped hover>
                    <thead>
                    <tr>
                        {groupAttributes.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {groupData.map((prop, key) => {
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

        return (
            
            <div className="content">
                <Col md={6}><p><b>Group:</b> {this.state.groupName}</p></Col>
                <Col md={6}><p><b>Admin:</b> {this.state.groupOwner}</p></Col>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Dashboard">
                        
                    </Tab>
                    <Tab eventKey={2} title="Projects">
                        {ProjectsTable}
                    </Tab>
                    <Tab eventKey={3} title="Members">
                        {MembersTable}
                    </Tab>
                </Tabs>
            </div>
        )
    }


}

export default GroupWorkspace;