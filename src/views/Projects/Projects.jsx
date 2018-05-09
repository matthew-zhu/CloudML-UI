import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import {Card} from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { projAttributes, projData } from "variables/Variables.jsx";


class Projects extends Component {

    render() {
        let AllProjectsCard = null;
        let HorizontalRecentProjectsCard = null;
        AllProjectsCard = (
            <Card
                title="All Projects"
                ctTableFullWidth
                ctTableResponsive
                content={
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
                        <tr key={key} onClick={() => window.location.href = '#/project/' + (key+1)}>
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
        HorizontalRecentProjectsCard = (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Recent Projects
                        </Col>
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
                                            <Button id={projData[0][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[0][0]}>View Project</Button>
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
                                            <Col md={5}>
                                                <Row>
                                                    <i className="fa fa-circle text-info"></i> {projData[1][3] + " images"}
                                                </Row>
                                                <Row>
                                                    <i className="fa fa-circle text-danger"></i> {projData[1][4] + " annotations"}
                                                </Row>
                                            </Col>
                                            <Button id={projData[1][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[1][0]}>View Project</Button>
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
                                            <Button id={projData[2][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[2][0]}>View Project</Button>
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
                            {HorizontalRecentProjectsCard}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {AllProjectsCard}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
}

export default Projects;
