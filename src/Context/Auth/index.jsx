import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)

const can = (capability) => {
        // note shorthand
    return user?.capabilities?.includes(capability)
}

const login = (username, password) => {
// for demonstration the user data is hardcoded
let authCredentials = testUsers[username]

if(authCredentials && authCredentials.password === password) {
    try {
        //validate the token
        _validateToken(authCredentials.token);
    }	
    catch(e) {
        console.error(e);
    }
}
}
}

function _validate(token) {
    try {
        let validUser = jwt_decode(token)
        if(validUser){
            setUser(validUser)
            setIsLoggedIn(true)
            console.log('I am logged in')
            cookie.save('auth', token)
        }
    }
    catch(e) {
        setIsLoggedIn(false)
        setError(e)
        console.error(e)
    }
}

const logout = () => {
    setUser({})
    setIsLoggedIn(false)
    setError(null)
    cookie.remove('auth')

    let values = {
        isLoggedIn,
        user,
        error,
        can,
        login,
        logout,
    }
    return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
    )
}