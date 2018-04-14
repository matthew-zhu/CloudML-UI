import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import { AllProjectsCard } from 'components/CustomCards/AllProjectsCard';
import { HorizontalRecentProjectsCard } from 'components/CustomCards/RecentProjectsCard';


class Projects extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <HorizontalRecentProjectsCard/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <AllProjectsCard/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
}

export default Projects;
