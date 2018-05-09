import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { UserCard } from 'components/UserCard/UserCard.jsx';
import { Card } from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton';

import avatar from "assets/img/faces/face-3.jpg";

import { projData, groupData } from "variables/Variables.jsx";

class Dashboard extends Component {
    
    render() {
        let VerticalRecentProjectsCard = null;
        let VerticalRecentGroupsCard = null;
        let VerticalUserCard = null;

        VerticalRecentProjectsCard = (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Recent Projects
                            <Link to="/viewprojects" className="pull-right">
                                <font size="2">View All</font>
                            </Link>
                        </Col>
                    </Row>
                }
                content={
                    <Row>
                        <Col md={12}>
                            <Card
                                title={projData[0][1]}
                                category={projData[0][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {projData[0][3] + " images"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {projData[0][4] + " annotations"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Project</Button>
                                        </Row>
                                    </div>
                                }
                            />
                            <Card
                                title={projData[1][1]}
                                category={projData[1][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {projData[1][3] + " images"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {projData[1][4] + " annotations"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Project</Button>
                                        </Row>
                                    </div>
                                }
                            />
                            <Card
                                title={projData[2][1]}
                                category={projData[2][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {projData[2][3] + " images"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {projData[2][4] + " annotations"}
                                                </Row>
                                            </Col>
                                            <Button pullRight>View Project</Button>
                                        </Row>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                } 
            />
        );

        VerticalRecentGroupsCard = (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Recent Groups
                            <Link to="/viewgroups" className="pull-right">
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
        );

        VerticalUserCard = (
            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Mike Andrew"
                                userName="michael24"
                                description={
                                    <span>
                                        "Hello, I'm Mike."
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
        );

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={4}>
                            {VerticalRecentProjectsCard}
                        </Col>
                        <Col md={4}>
                            {VerticalRecentGroupsCard}
                        </Col>
                        <Col md={4}>
                            {VerticalUserCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
