import * as firebase from 'firebase';

import { auth } from './firebase';

var provider = new firebase.auth.GoogleAuthProvider();

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign in
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

export const doSignInWithPopup = () =>
    auth.signInWithPopup(provider);