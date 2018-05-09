import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from 'components/Header/Header';
import HomeHeader from 'components/Header/HomeHeader';
import Sidebar from 'components/Sidebar/Sidebar';
import HomeSidebar from 'components/Sidebar/HomeSidebar';

import { appRoutes, otherRoutes, homeRoutes } from 'routes/app.jsx';

class App extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        var IsLoggedIn = true;
        App = null;

        if (IsLoggedIn) {
            App = (
                <div className="wrapper">
                    <Sidebar {...this.props} />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                            <Switch>
                                {
                                    appRoutes.map((prop,key) => {
                                        if(prop.redirect)
                                            return (
                                                <Redirect from={prop.path} to={prop.to} key={key}/>
                                            );
                                        return (
                                            <Route path={prop.path} component={prop.component} key={key}/>
                                        );
                                    })
                                }
                                {
                                    otherRoutes.map((prop,key) => {
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
                    </div>
                </div>
            );
        } else {
            App = (
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
                    </div>
                </div>
            )
        }

        return (
            <div>
                {App}
            </div>
        );
    }
}

export default App;
