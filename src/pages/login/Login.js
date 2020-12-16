import React, {useContext} from 'react'
import { Formik  } from 'formik';
import * as yup from 'yup';

import {PopUp} from '../../components/pop-up/pop-up'
import {useHttp} from '../../hooks/http.hooks'
import {AuthContext} from '../../context/Auth.context'

import './form-contact.scss';
import './wrap-contactpage.scss';
import './wrap-form.scss'

export const Login = () => {
    const auth = useContext(AuthContext)

    const { loading, request, error, clearError} = useHttp()

    const popUpHandleClick = () => {
        if (error) {
            clearError()
        }
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().min(4),
    });
    

    return (
        <>
        <PopUp 
            ifError={error}
            popUpHandleClick={popUpHandleClick}/>

        <main className="wrap-contactpage">
            <div className="wrap-form-contact">
                <Formik
                    initialValues={{
                        email: 'user@ozitag.com',
                        password: 'user',
                    }}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        try{
                            const {email, password} = values
                            const data = await request('https://tager.dev.ozitag.com/api/auth/user', 'POST', {email, password, clientId: 1});
                            // console.log(data.data.accessToken)
                            auth.login(data.data.accessToken)
                        }catch(e){}
                    }}
                >
                    {({values, errors, handleChange, handleBlur, isValid, handleSubmit}) => (
                        <form className="form-contact">
                            <div className="form-contact__group">
                                <input 
                                    type="email" 
                                    className={`form-contact__group__input${errors.email ? " form-contact__group__input__error" : ""}`}
                                    name="email"
                                    value={values.email}
                                    id="email" 
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                <label
                                    htmlFor="email"
                                    className="form-contact__group__label">Email</label>
                            </div>
                            <div className="form-contact__group">
                                <input 
                                    type="password" 
                                    className={`form-contact__group__input${errors.password ? " form-contact__group__input__error" : ""}`}
                                    id="password" 
                                    placeholder="Password" 
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                <label
                                    htmlFor="name"
                                    className="form-contact__group__label">Password</label>
                            </div>
                            <button 
                                type="submit" 
                                className="form-contact__button"
                                disabled={!isValid || loading}
                                onClick={handleSubmit}
                            >Sign In</button>
                        </form>
                    )}
                </Formik>
            </div>
        </main>
        </>
    )
}