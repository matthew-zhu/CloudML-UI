import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD70XLq0XkOTOVUiIJsnPyrUzXrn0f1s3k",
    authDomain: "cloudml-202000.firebaseapp.com",
    databaseURL: "https://cloudml-202000.firebaseio.com",
    projectId: "cloudml-202000",
    storageBucket: "cloudml-202000.appspot.com",
    messagingSenderId: "100618394817"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };