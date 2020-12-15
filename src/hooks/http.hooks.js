import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)


        try {
            console.log("bodyyy",body)
            if (body) {
                // const {email, password} = body
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json';
            }
            
            // const tok = JSON.parse(localStorage.getItem("accessToken"));
            // if (tok && tok.token) {
            //     const access_token = tok.token
            //     headers['Authorization'] = `Bearer ${access_token}`;
            // }


            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            

            if (!response.ok) {
                throw new Error(data.message || 'Something was wrong')
            } 

            setLoading(false)

            return data
        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    // const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError}
}