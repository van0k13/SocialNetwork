import React from 'react';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
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
            );
        }
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mstp, { initializeApp, logout }))(App);
let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store} >
            <AppContainer />
        </Provider >
    </BrowserRouter>
};

export default MainApp;
