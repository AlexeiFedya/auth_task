import {useState, useCallback, useEffect} from 'react';


export const useAuth = () => {

    const [token, setToken] = useState(null)
    const storageName = "accessToken"

    const login = useCallback((accessToken) => {
        setToken(accessToken)
        localStorage.setItem(storageName, JSON.stringify({token: accessToken}))
        
    }, [])

    const logout = useCallback((success)=> {
        if (success) {
            setToken(null)
            localStorage.removeItem(storageName)
        }
    }, [])

    console.log(token)

    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token);
        }
        
    }, [login])

    return {login, logout, token}
}