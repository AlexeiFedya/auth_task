import React, {useContext} from 'react';
import './header.scss'
import {Link} from 'react-router-dom'
import {useHttp} from '../../hooks/http.hooks'
import {AuthContext} from '../../context/Auth.context'

export const Header = ({isAuthenticated}) => {
    const auth = useContext(AuthContext)
    const { loading, request} = useHttp()
    

    const logoutHandler = async () => {
        try{
            const data = await request('/tager/user/profile/logout', 'POST', null, {Authorization: `Bearer ${auth.token}`});
            auth.logout(data.success)
        }catch(e){}
    }

    console.log("токен",auth.token)
    return (
        <header className='header'>
            <nav className="header__nav">
                {isAuthenticated ? 
                    <button 
                        className='header__button' 
                        disabled={loading}
                        onClick={logoutHandler}>
                        Logout
                    </button>
                :  
                    <div className='header__button'
                    >
                        <Link className="nav-link nav-text" to='/'>Login</Link>
                    </div>
                }
            </nav>
        </header>
    )
} 