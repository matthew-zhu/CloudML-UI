import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import {Card} from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { groupData } from "variables/Variables.jsx";

class HorizontalRecentGroupsCard extends Component {
    render() {
        return (
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
                                            <Button pullRight>View Group</Button>
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
                                            <Button pullRight>View Group</Button>
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
                                            <Button pullRight>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                } 
            />
        )
    }
}

class VerticalRecentGroupsCard extends Component {
    render() {
        return (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Recent Groups
                            <Link to="/groups" className="pull-right">
                                <font size="2">View All</font>
                            </Link>
                        </Col>
                    </Row>
                }
                content={
                    <Row>
                        <Col md={12}>
                            <Card
                                title={groupData[0][1]}
                                category={groupData[0][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[0][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[0][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                            <Card
                                title={groupData[1][1]}
                                category={groupData[1][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[1][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[1][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                            <Card
                                title={groupData[2][1]}
                                category={groupData[2][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {groupData[2][3] + " members"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {groupData[2][4] + " projects"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Group</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                } 
            />
        )
    }
}

export { HorizontalRecentGroupsCard, VerticalRecentGroupsCard };