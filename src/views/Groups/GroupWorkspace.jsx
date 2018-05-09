import React, { Component } from 'react';
import { Table, Tabs, Tab, Col } from "react-bootstrap";
import ChartistGraph from 'react-chartist';

import { groupAttributes, groupData, projAttributes, projData } from "variables/Variables.jsx";

// Data for Bar Chart
var dataBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
    ]
};
var optionsBar = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px"
};
var responsiveBar = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];

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
        let Dash = null;
        let ProjectsTable = null;
        let MembersTable = null;

        Dash = (
            <div className="row">
                <div className="col-md-8" style={{maxHeight:"320px"}}>
                    <ChartistGraph
                        data={dataBar}
                        type="Bar"
                        options={optionsBar}
                        responsiveOptions={responsiveBar}
                    />
                </div>
            </div>
        );

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
                        {Dash}
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