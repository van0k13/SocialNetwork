import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar friends={props.state.dialogsPage.dialogs} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={
                        () => <Dialogs dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}/>
                    } />
                    <Route path='/profile' render={
                        () => <Profile profilePage={props.state.profilePage}
                            friends={props.state.dialogsPage.dialogs}
                            dispatch={props.dispatch}/>
                    } />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

App.propTypes = {
    profilePage: PropTypes.string
};