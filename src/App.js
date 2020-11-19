import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Register from "./Register/Register";
import ProfileForm from "./Profile/CreateProfile"
import Login from "./Login/Login";
import SwipeProfiles from "./Swiping/SwipeProfiles";
import Matches from "./Matches/Matches";
import Questionnaire from './Questionnaire/Questionnaire';
import Messages from './Messaging/Messages';
import ViewProfile from './Profile/ViewProfile';
import EditProfile from './Profile/EditProfile';
import ViewFriendProfile from './Matches/ViewFriendProfile';

export default class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/createprofile">
                            <ProfileForm />
                        </Route>
                        <Route path="/viewprofile">
                            <ViewProfile />
                        </Route>
                        <Route path="/viewfriendprofile">
                            <ViewFriendProfile />
                        </Route>
                        <Route path="/editprofile">
                            <EditProfile />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/main">
                            <SwipeProfiles />
                        </Route>
                        <Route path="/matches">
                            <Matches />
                        </Route>
                        <Route path="/questionnaire">
                            <Questionnaire />
                        </Route>
                        <Route path="/messages">
                            <Messages />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}