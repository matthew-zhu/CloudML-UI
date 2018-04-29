import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { VerticalRecentProjectsCard } from 'components/CustomCards/RecentProjectsCard';
import { VerticalRecentGroupsCard } from 'components/CustomCards/RecentGroupsCard';
// import { NotificationsCard } from 'components/CustomCards/NotificationsCard';
import { UserCard } from 'components/UserCard/UserCard.jsx';

import Button from 'elements/CustomButton/CustomButton';

import avatar from "assets/img/faces/face-3.jpg";

class Dashboard extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    {/* <Row>
                        <Col md={12}>
                            <NotificationsCard/>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md={4}>
                            <VerticalRecentProjectsCard/>
                        </Col>
                        <Col md={4}>
                            <VerticalRecentGroupsCard/>
                        </Col>
                        <Col md={4}>
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
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
