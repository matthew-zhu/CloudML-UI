import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';


class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',
        }
        this.handleCreateProject = this.handleCreateProject.bind(this);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    handleCreateProject(e) {
        e.preventDefault();
        //post project

        //redirect to newly created project page
    }


    render() {
       
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Create Project"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                 label : "Project Name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Project Name",
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Project Owner",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Project Owner",
                                                    defaultValue : this.state.user.displayName,
                                                    disabled : true
                                                   }
                                            ]}
                                        />
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>Project Description</ControlLabel>
                                                    <FormControl rows="10" componentClass="textarea" bsClass="form-control" placeholder="Please describe this project."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                            onClick={ this.handleCreateProject }
                                        >
                                            Create Project
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
}

export default withCookies(CreateProject);
