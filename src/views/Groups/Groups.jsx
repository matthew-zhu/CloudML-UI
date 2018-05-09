import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import {Card} from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { groupAttributes, groupData } from "variables/Variables.jsx";


class Groups extends Component {

    render() {
        let AllGroupsCard = null;
        let HorizontalRecentGroupsCard = null;
        AllGroupsCard = (
            <Card
                title="All Groups"
                ctTableFullWidth
                ctTableResponsive
                content={
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
                            <tr key={key} onClick={() => window.location.href = '#/group/' + (key+1)}>
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
        HorizontalRecentGroupsCard = (
            <Card 
                title={
                    <Row>
                        <Col md={2}>
                            Recent Groups
                        </Col>
                        {/* <Link to="/groups">
                            <font size="2">View All</font>
                        </Link> */}
                    </Row>
                }
                content={
                    <Row>
                        <Col md={4}>
                            <Card
                                title={groupData[0][1]}
                                category={groupData[0][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[0][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[0][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button id={groupData[0][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[0][0]}>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                title={groupData[1][1]}
                                category={groupData[1][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[1][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[1][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button id={groupData[1][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[1][0]}>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                title={groupData[2][1]}
                                category={groupData[2][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[2][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[2][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button id={groupData[2][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[2][0]}>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                } 
            />
        );




        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            {HorizontalRecentGroupsCard}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {AllGroupsCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
}

export default Groups;
