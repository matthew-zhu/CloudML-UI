import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import {Card} from 'components/Card/Card.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import Button from 'elements/CustomButton/CustomButton';

import { thArray, tdArray } from "variables/Variables.jsx";

class Projects extends Component {

    render() {
        return (
            <div className="content">
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
                <div className="row">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="All Projects"
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            {thArray.map((prop, key) => {
                                            return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tdArray.map((prop, key) => {
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
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
                </Grid>
            </div>
        );
    }
    
}

export default Projects;
