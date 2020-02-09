import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from './redux/auth_reducer';
import { initializeApp } from './redux/app_reducer';
import Preloader from './components/common/preloader/preloader';



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer />
                        <Navbar store={this.props.store} />
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' render={
                                () => <DialogsContainer />} />

                            <Route path='/profile/:userId?' render={
                                () => <ProfileContainer />} />
                            <Route path='/login' render={
                                () => <Login />} />

                            <Route path='/news' component={News} />
                            <Route path='/music' component={Music} />
                            <Route path='/settings' component={Settings} />
                            <Route path='/users' render={
                                () => <UsersContainer />} />
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mstp, { initializeApp, logout }))(App);

App.propTypes = {
    profilePage: PropTypes.string
};