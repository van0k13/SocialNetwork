import React from 'react'
import { reduxForm } from "redux-form";
import { Input, createField } from '../common/FormsControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControl/FormsControl.module.css'

let maxLength35 = maxLengthCreator(35)
const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", [requiredField, maxLength35], Input)}
        {createField("Password", "password", [requiredField, maxLength35], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "Checkbox"}, "rememberMe")}
        
        {error && <div className={styles.form_summary_control}>
            {error}
        </div>}
        <div >
            <button>Sigh In</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)