import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// http://localhost:3001/

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem('jsontoken')

            console.log('Token:', token);
            
            if(!token) {
                setLoading(false)
                return
            }

            const config = {
                headers : {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await axios('https://challengeme-uy0s.onrender.com/auth/profile', config);
                setAuth(data);
                navigate('/home');
              } catch (error) {
                console.log(error)
                console.log(token)
                setAuth({});
              } finally {
                setLoading(false);
              }
        
        }
        authenticateUser()
    }, [])

    const closeSesionAuth = () => {
        setAuth({})
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth, 
                loading,
                closeSesionAuth
            }}
        >


            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
