import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '../../firebase';

import { instanceOf } from 'prop-types';
import { Cookies, withCookies} from 'react-cookie';

import imagine from 'assets/img/sidebar-4.jpg';
import logo from 'assets/img/reactlogo.png';

import { homeRoutes } from 'routes/app.jsx';

import GoogleButton from 'react-google-button';

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
                this.setState({
                    token: result.credential.accessToken,
                    user: result.user,
                })
                this.props.cookies.set('token', this.state.token);
                this.props.cookies.set('user', this.state.user);
                window.location = "#/dashboard";
                window.location.reload();
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
                        <a href="/" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="/" className="simple-text logo-normal">
                            LabelMe
                        </a>
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
