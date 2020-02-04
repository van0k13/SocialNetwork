import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData, setAuth, logout} from '../../redux/auth_reducer';


class HeaderContainer extends React.Component {
componentDidMount() {
    this.props.setAuth()
}
    render() {
        return (
            <Header  {...this.props} />
        )
    }
}

const mstp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mstp, {setAuthUserData, setAuth, logout} )(HeaderContainer);