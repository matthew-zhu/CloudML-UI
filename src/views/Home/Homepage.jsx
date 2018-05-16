import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import '../../css/homepage.css'

import { Card } from 'components/Card/Card.jsx';

import cloudmlLogo from 'assets/img/cloudml-logo-blue.png'


class Homepage extends Component {
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
        return (
            <div className="content">
                <Col md={3}/>
                <Col md={6}>
                    <Card
                        title={
                            <img src={ cloudmlLogo } alt="CloudML Logo" className="cloudml-logo"/>
                        }
                        content={
                            <div>
                                <span className="home-desc">Welcome to CloudML! CloudML is a cloud machine learning SaaS that enhances MIT CSAIL's LabelMe open annotation tool.</span>
                                <br/>
                                <br/>
                                <span className="home-desc">Users can create group projects and interact with other members to improve productivity. 
                                    CloudML's version of the LabelMe tool increases annotation functionality, increasing the effectiveness of training datasets.
                                    CloudML also allows users to manage and interact directly with the training data repository. </span>
                            </div>
                        }
                    />
                </Col>
                <Col md={3}/>
            </div>
        );
    }
}

export default withCookies(Homepage);
