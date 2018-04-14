import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import { AllGroupsCard } from 'components/CustomCards/AllGroupsCard';
import { HorizontalRecentGroupsCard } from 'components/CustomCards/RecentGroupsCard';

class Groups extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <HorizontalRecentGroupsCard/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <AllGroupsCard/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Groups;
