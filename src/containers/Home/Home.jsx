import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import HomeHeader from 'components/Header/HomeHeader';
import Footer from 'components/Footer/Footer';
import HomeSidebar from 'components/Sidebar/HomeSidebar';

import { homeRoutes } from 'routes/app.jsx';

class Home extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (

                <div className="wrapper">
                    <HomeSidebar {...this.props} />
                    <div id="main-panel" className="main-panel">
                        <HomeHeader {...this.props}/>
                            <Switch>
                                {
                                    homeRoutes.map((prop,key) => {
                                        if(prop.redirect)
                                            return (
                                                <Redirect from={prop.path} to={prop.to} key={key}/>
                                            );
                                        return (
                                            <Route path={prop.path} component={prop.component} key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        <Footer />
                    </div>
                </div>
        );
    }
}

export default Home;
