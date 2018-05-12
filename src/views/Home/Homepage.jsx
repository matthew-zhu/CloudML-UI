import React, { Component } from 'react';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

// import { auth } from '../../firebase';

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
            <div>
                <div>
                    {/* <GoogleButton
                        type="light"
                        onClick={ this.handleGoogleSignIn }
                    /> */}
                </div>
            </div>
        );
    }
}

export default withCookies(Homepage);
