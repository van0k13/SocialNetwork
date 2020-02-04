import React from 'react'
import {Field, reduxForm} from "redux-form";
import { Input } from '../common/FormsControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

let maxLength35 = maxLengthCreator(35)
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Input}
                validate={[requiredField, maxLength35]}
                name={'email'}
                placeholder={'email'}
            />
        </div>
        <div>
            <Field
                component={Input}
                validate={[requiredField, maxLength35]}
                name={'password'}
                placeholder={'Password'}
            />
        </div>
        <div>
            <Field
                component={"input"}
                validate={[requiredField, maxLength35]}
                name={'rememberMe'}
                type={"checkbox"}
                placeholder={'Checkbox'}
            /> remember me
        </div>
        <div>
            <button>Sigh In</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    } return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)