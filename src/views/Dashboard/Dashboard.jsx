import React, { Component } from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import { UserCard } from 'components/UserCard/UserCard.jsx';
import { Card } from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton';

import { projData, projAttributes } from "variables/Variables.jsx";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',
        }
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    
    render() {
        // let VerticalRecentProjectsCard = null;
        // let VerticalRecentGroupsCard = null;
        let VerticalUserCard = null;
        let YourProjectsCard = null;

        YourProjectsCard = (
            <Card
                title="Your Projects"
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

        // VerticalRecentProjectsCard = (
        //     <Card 
        //         title={
        //             <Row>
        //                 <Col md={12}>
        //                     Recent Projects
        //                     <Link to="/viewprojects" className="pull-right">
        //                         <font size="2">View All</font>
        //                     </Link>
        //                 </Col>
        //             </Row>
        //         }
        //         content={
        //             <Row>
        //                 <Col md={12}>
        //                     <Card
        //                         title={projData[0][1]}
        //                         category={projData[0][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {projData[0][3] + " images"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {projData[0][4] + " annotations"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={projData[0][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[0][0]}>View Project</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                     <Card
        //                         title={projData[1][1]}
        //                         category={projData[1][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {projData[1][3] + " images"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {projData[1][4] + " annotations"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={projData[1][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[1][0]}>View Project</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                     <Card
        //                         title={projData[2][1]}
        //                         category={projData[2][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {projData[2][3] + " images"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {projData[2][4] + " annotations"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={projData[2][0]} pullRight onClick={() => window.location.href = '#/project/' + projData[2][0]}>View Project</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                 </Col>
        //             </Row>
        //         } 
        //     />
        // );

        // VerticalRecentGroupsCard = (
        //     <Card 
        //         title={
        //             <Row>
        //                 <Col md={12}>
        //                     Recent Groups
        //                     <Link to="/viewgroups" className="pull-right">
        //                         <font size="2">View All</font>
        //                     </Link>
        //                 </Col>
        //             </Row>
        //         }
        //         content={
        //             <Row>
        //                 <Col md={12}>
        //                     <Card
        //                         title={groupData[0][1]}
        //                         category={groupData[0][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {groupData[0][3] + " members"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {groupData[0][4] + " projects"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={groupData[0][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[0][0]}>View Group</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                     <Card
        //                         title={groupData[1][1]}
        //                         category={groupData[1][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {groupData[1][3] + " members"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {groupData[1][4] + " projects"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={groupData[1][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[1][0]}>View Group</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                     <Card
        //                         title={groupData[2][1]}
        //                         category={groupData[2][2]}
        //                         content={
        //                             <div className="content">
        //                                 <Row>
        //                                     <Col md={5}>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-info"></i> {groupData[2][3] + " members"}
        //                                         </Row>
        //                                         <Row>
        //                                             <i className="fa fa-circle text-danger"></i> {groupData[2][4] + " projects"}
        //                                         </Row>
        //                                     </Col>
        //                                     <Button id={groupData[2][0]} pullRight onClick={() => window.location.href = '#/group/' + groupData[2][0]}>View Group</Button>
        //                                 </Row>
        //                             </div>
        //                         }
        //                     />
        //                 </Col>
        //             </Row>
        //         } 
        //     />
        // );

        VerticalUserCard = (
            <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={this.state.user.photoURL}
                name={this.state.user.displayName}
                userName={this.state.user.email}
                description={
                    <span>
                        "Hello."
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
                        {/* <Col md={4}>
                            {VerticalRecentProjectsCard}
                        </Col>
                        <Col md={4}>
                            {VerticalRecentGroupsCard}
                        </Col> */}
                        <Col md={8}>
                            {YourProjectsCard}
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

export default withCookies(Dashboard);
