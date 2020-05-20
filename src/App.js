import React from 'react';
import store from './redux/redux-store.js';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app_reducer.js';
import { getNewMessagesTC } from './redux/reducer_dialogs';
import Preloader from './components/common/preloader/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import withSuspense from './HOC/withSuspence';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const DialogsContainer = React.lazy((props) => import('./components/Dialogs/DialogsContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
        setInterval(()=> {
            this.props.getNewMessagesTC();
        }, 100*1000)
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <div className={style.appWrapper}>
                    <div className={style.header}>
                        <HeaderContainer />
                    </div>
                    <div className={style.navbarPlusContent}>
                        <div className={style.navbar}>
                            <Navbar newMessagesCount={this.props.newMessagesCount}/>
                        </div>
                        <div className={style.appWrapperContent}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to='/profile' />} />
                                <Route path='/dialogs/:userId?'
                                    render={(props) => <DialogsContainer
                                        userId={props.match.params.userId} />} />
                                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                                <Route path='/login' render={
                                    () => <Login />} />
                                <Route path='/news' render={withSuspense(News)} />
                                <Route path='/music' render={withSuspense(Music)} />
                                <Route path='/settings' render={withSuspense(Settings)} />
                                <Route path='/users' render={withSuspense(UsersContainer)} />
                                <Route path='*' render={() => <div>404 BAD address</div>} />
                            </Switch>
                        </div>
                        <Friends dialogs={this.props.dialogs} />
                    </div>
                </div>
            );
        }
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized,
    dialogs: state.dialogsPage.dialogs,
    newMessagesCount: state.dialogsPage.newMessagesCount
})
let AppContainer = compose(
    withRouter,
    connect(mstp, { initializeApp, getNewMessagesTC }))(App);
let MainApp = () => {
    return <BrowserRouter>
        <Provider store={store} >
            <AppContainer />
        </Provider >
    </BrowserRouter>
};

export default MainApp;
