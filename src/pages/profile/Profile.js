import React, {useCallback, useContext, useState, useEffect} from 'react';
import {AuthContext} from '../../context/Auth.context'
import {useHttp} from '../../hooks/http.hooks'

import {Loader} from '../../components/loader/loader'
import {ProfileCard} from '../../components/profile-card/ProfileCard'

import './profile-page.scss'


export const Profile = () => {

    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const [profile, setProfile] = useState(null)

    const getProfile = useCallback(async () => {
        try {
            const data = await request('https://tager.dev.ozitag.com/api/tager/user/profile', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setProfile(data.data)
        } catch (e) {}
    }, [token, request])

    useEffect (()=> {
        getProfile()
    }, [getProfile])


    return (
        <main className="profile-page-wrap">
            <div className="profile-page">
                {
                    (!loading && profile) ? <ProfileCard profile={profile}/> : <Loader/>
                }
            </div>
        </main>
    )
}