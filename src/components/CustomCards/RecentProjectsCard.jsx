import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { Card } from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { projData } from "variables/Variables.jsx";

class HorizontalRecentProjectsCard extends Component {
    render() {
        return (
            <Card 
                title={
                    <Row>
                        <Col md={2}>
                            Recent Projects
                        </Col>
                        {/* <Link to="/projects">
                            <font size="2">View All</font>
                        </Link> */}
                    </Row>
                }
                content={
                    <Row>
                        <Col md={4}>
                            <Card
                                title={projData[0][1]}
                                category={projData[0][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
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
                        </Col>
                        <Col md={4}>
                            <Card
                                title={projData[1][1]}
                                category={projData[1][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
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
                        </Col>
                        <Col md={4}>
                            <Card
                                title={projData[2][1]}
                                category={projData[2][2]}
                                content={
                                    <div className="content">
                                        <Row>
                                            <Col md={8}>
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
        )
    }
    
}

class VerticalRecentProjectsCard extends Component {
    render() {
        return (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Recent Projects
                            <Link to="/projects" className="pull-right">
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
        )
    }
}

export { HorizontalRecentProjectsCard, VerticalRecentProjectsCard };