import React, { useState, useEffect } from 'react';

function useLocalStorage(key, initialState=null) {
    const [token, setToken] = useState(localStorage.getItem('token') || initialState);
    useEffect(function updateKey() {
        if (token === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, token);
        }
    }, [key, token]);
    return [token, setToken];
}
export default useLocalStorage;

