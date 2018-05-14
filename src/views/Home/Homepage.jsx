import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

// import { auth } from '../../firebase';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import '../../css/homepage.css'

import { Card } from 'components/Card/Card.jsx';

// import labelmeLogo from 'assets/img/LabelMe_logo3.png'
import cloudmlLogo from 'assets/img/cloudml-logo-blue.png'
// import GoogleButton from 'react-google-button';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',
            // errorCode: '',
            // errorMessage: '',
            // email: '',
            // credential: '',
        }
        // this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
    }

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    // handleGoogleSignIn(e) {
    //     e.preventDefault();
    //     auth.doSignInWithPopup()
    //         .then(function(result) {
    //             this.setState({
    //                 token: result.credential.accessToken,
    //                 user: result.user,
    //             })
    //             this.props.cookies.set('token', this.state.token);
    //             this.props.cookies.set('user', this.state.user);
    //             window.location.reload();
    //         }.bind(this))
    //         .catch(function(error) {
    //             this.setState({
    //                 errorCode: error.code,
    //                 errorMessage: error.message,
    //                 email: error.email,
    //                 credential: error.credential,
    //             })
    //         }.bind(this));
    // }

    render() {
        return (
            <div className="content">
                <Col md={3}/>
                <Col md={6}>
                    <Card
                        title={
                            <img src={ cloudmlLogo } alt="CloudML Logo" className="cloudml-logo"/>
                            // <p className="cloudml-title">CloudML</p>
                        }
                        content={
                            <div>
                                <span className="home-desc">Welcome to CloudML! CloudML is a cloud machine learning SaaS that enhances MIT CSAIL's LabelMe open annotation tool.</span>
                                <br/>
                                <br/>
                                {/* <img src={ labelmeLogo } alt="LabelMe Logo" className="labelme-logo"/> */}
                                <span className="home-desc">Users can create group projects and interact with other members to improve productivity. 
                                    CloudML's version of the LabelMe tool increases annotation functionality, increasing the effectiveness of training datasets.
                                    CloudML also allows users to manage and interact directly with the training data repository. </span>
                            </div>
                        }
                    />
                </Col>
                <Col md={3}/>
            </div>
            // <div>
            //     <div>
            //         <GoogleButton
            //             type="light"
            //             onClick={ this.handleGoogleSignIn }
            //         />
            //     </div>
            // </div>
        );
    }
}

export default withCookies(Homepage);
