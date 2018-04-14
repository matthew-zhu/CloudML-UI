import React, { Component } from 'react';
import { Grid, Row, Col, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';

import {Card} from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton';

class NotificationsCard extends Component {
    render() {
        return (
            <Card 
                title={
                    <Row>
                        <Col md={12}>
                            Notifications
                            <Link to="/notifications" className="pull-right">
                                <font size="2">View All</font>
                            </Link>
                        </Col>
                    </Row>
                }
                content={
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
                } 
            />
        )
    }
    
}

export {NotificationsCard};