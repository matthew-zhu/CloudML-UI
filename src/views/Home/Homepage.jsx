import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

var firebase = require("firebase");
var firebaseui = require('firebaseui');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyD70XLq0XkOTOVUiIJsnPyrUzXrn0f1s3k",
    authDomain: "cloudml-202000.firebaseapp.com",
    databaseURL: "https://cloudml-202000.firebaseio.com",
    storageBucket: "cloudml-202000.appspot.com",
};
firebase.initializeApp(config);

class Homepage extends Component {
    render() {
        return (
            <div />
            // <head>
            //     <meta charset="UTF-8"/>
            //     <title>Sample FirebaseUI App</title>
            //     <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
            //     <script>
            //     // Initialize Firebase
            //     var config = {
            //         apiKey: "AIzaSyD70XLq0XkOTOVUiIJsnPyrUzXrn0f1s3k",
            //         authDomain: "cloudml-202000.firebaseapp.com",
            //         databaseURL: "https://cloudml-202000.firebaseio.com",
            //         projectId: "cloudml-202000",
            //         storageBucket: "cloudml-202000.appspot.com",
            //         messagingSenderId: "100618394817"
            //     };
            //     firebase.initializeApp(config);
            //     </script>
            //     <script src="https://cdn.firebase.com/libs/firebaseui/2.7.0/firebaseui.js"></script>
            //     <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.7.0/firebaseui.css" />
            //     <script type="text/javascript"/>
            //     {/* // FirebaseUI config. */}
            //     var uiConfig = {
            //         signInSuccessUrl: '<url-to-redirect-to-on-success>',
            //         signInOptions: [
            //         // Leave the lines as is for the providers you want to offer your users.
            //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //         firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //         firebase.auth.PhoneAuthProvider.PROVIDER_ID
            //         ],
            //         // Terms of service url.
            //         tosUrl: '<your-tos-url>'
            //     };

            //     {/* // Initialize the FirebaseUI Widget using Firebase. */}
            //     var ui = new firebaseui.auth.AuthUI(firebase.auth());
            //     {/* // The start method will wait until the DOM is loaded. */}
            //     ui.start('#firebaseui-auth-container', uiConfig);
            //     </script>
            // </head>
            // <body>
            //     <!-- The surrounding HTML is left untouched by FirebaseUI.
            //         Your app may use that space for branding, controls and other customizations.-->
            //     <h1>Welcome to My Awesome App</h1>
            //     <div id="firebaseui-auth-container"></div>
            // </body>
            // <div className="content">
                
            // </div>
        );
    }
}

export default Homepage;
