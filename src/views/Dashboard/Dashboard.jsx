import React, { Component } from 'react';
import { Grid, Row, Col, Alert, Table } from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { thArray, tdArray } from "variables/Variables.jsx";

class Dashboard extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Notifications</h4>
                        </div>
                        <div className="content">
                            <Row>
                                <Col md={12}>
                                    <Alert bsStyle="info">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Info - </b> This is a regular notification made with bsStyle="info"</span>
                                    </Alert>
                                    <Alert bsStyle="success">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Success - </b> This is a regular notification made with bsStyle="success"</span>
                                    </Alert>
                                    <Alert bsStyle="warning">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Warning - </b> This is a regular notification made with bsStyle="warning"</span>
                                    </Alert>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Grid>
                <Grid fluid>
                    <div className="row">
                        <div className="col-md-12">
                            <Card 
                                title="Recent Projects"
                                content={
                                    <div className="row">
                                        <div className="col-md-4" href="#" onClick={this.handleClick}>
                                            <Card
                                                title={tdArray[0][1]}
                                                category={tdArray[0][2]}
                                                content={
                                                    <div className="content">
                                                        <div className="col-md-8">
                                                            <div className="row">
                                                                <i className="fa fa-circle text-info"></i> {tdArray[0][3] + " images"}
                                                            </div>
                                                            <div className="row">
                                                                <i className="fa fa-circle text-danger"></i> {tdArray[0][4] + " annotations"}
                                                            </div>
                                                        </div>
                                                        <Button>View Project</Button>
                                                    </div>
                                                }
                                            />
                                        </div>
                                        <div className="col-md-4">
                                        <Card
                                            title={tdArray[1][1]}
                                            category={tdArray[1][2]}
                                            content={
                                                <div className="content">
                                                    <div className="col-md-8">
                                                            <div className="row">
                                                                <i className="fa fa-circle text-info"></i> {tdArray[1][3] + " images"}
                                                            </div>
                                                            <div className="row">
                                                                <i className="fa fa-circle text-danger"></i> {tdArray[1][4] + " annotations"}
                                                            </div>
                                                        </div>
                                                        <Button>View Project</Button>
                                                </div>
                                            }
                                        />
                                        </div>
                                        <div className="col-md-4">
                                        <Card
                                            title={tdArray[2][1]}
                                            category={tdArray[2][2]}
                                            content={
                                                <div className="content">
                                                    <div className="col-md-8">
                                                            <div className="row">
                                                                <i className="fa fa-circle text-info"></i> {tdArray[2][3] + " images"}
                                                            </div>
                                                            <div className="row">
                                                                <i className="fa fa-circle text-danger"></i> {tdArray[2][4] + " annotations"}
                                                            </div>
                                                        </div>
                                                        <Button>View Project</Button>
                                                </div>
                                            }
                                        />
                                        </div>
                                    </div>
                            } />
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
