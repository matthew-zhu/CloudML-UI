import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '../../firebase';
import { Cookies, withCookies} from 'react-cookie';
import { instanceOf } from 'prop-types';

import axios from 'axios';
import url from '../../serverurl'
import swal from 'sweetalert'

import { homeRoutes } from 'routes/app.jsx';

import imagine from 'assets/img/sidebar-4.jpg';
// import logo from 'assets/img/reactlogo.png';
import GoogleButton from 'react-google-button';
import cloudmlLogo from 'assets/img/cloudml-logo-white.png'


class HomeSidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: this.props.cookies.get('token') || '',
            user: this.props.cookies.get('user') || '',

            errorCode: '',
            errorMessage: '',
            email: '',
            credential: '',

            width: window.innerWidth
        }
        this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
    }

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    handleGoogleSignIn(e) {
        e.preventDefault();
        auth.doSignInWithPopup()
            .then(function(result) {
                console.log(result)
                this.setState({
                    token: result.credential.accessToken,
                    user: result.user,
                })
                this.props.cookies.set('token', this.state.token);
                this.props.cookies.set('user', this.state.user);

                if(result.additionalUserInfo.isNewUser) {
                    axios({
                        url: url + '/users',
                        method: 'post',
                        headers: { Authorization: result.credential.accessToken },
                        data: {
                            first_name: result.additionalUserInfo.profile.given_name,
                            last_name: result.additionalUserInfo.profile.family_name,
                            dob: "",
                            config: { },
                        },
                        userRecord: result.user,
                    }).then((response) => {
                            if(response.data.success) {
                                console.log('success')
                                window.location = "#/dashboard";
                                window.location.reload();
                            } else {
                                swal("Error", "", "error");
                            }
                        }).catch((error) => {
                            console.log(error);
                            swal("Network Error", "User could not be created.", "error");
                        })
                } else {
                    window.location = "#/dashboard";
                    window.location.reload();
                }
            }.bind(this))
            .catch(function(error) {
                this.setState({
                    errorCode: error.code,
                    errorMessage: error.message,
                    email: error.email,
                    credential: error.credential,
                })
            }.bind(this));
    }

    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
                        {/* <a href="/" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="/" className="simple-text logo-normal">
                            CloudML
                        </a> */}
                        <img src={ cloudmlLogo } alt="CloudML Logo" className="cloudml-logo"/>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {
                            homeRoutes.map((prop,key) => {
                                if(!prop.redirect)
                                    return (
                                        <li className={prop.upgrade ? "active active-pro":this.activeRoute(prop.path)} key={key}>
                                            <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                        <GoogleButton
                            type="light"
                            onClick={ this.handleGoogleSignIn }
                        />
                    </ul>
                </div>
            </div>
        );
    }
}

export default withCookies(HomeSidebar);
