import React from 'react';
import styles from './FormsControl.module.css'
import { Field } from 'redux-form';


const FormControl = ({ input, meta: {error, touched}, children}) => {
    const hasError = error && touched;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError &&
                <span>{error}</span>
            }
        </div>
    )
}
export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text= '') => {
    return <div> <Field
        component={component}
        validate={validators}
        name={name}
        placeholder={placeholder}
        {...props}
    />{text}
    </div>
}

