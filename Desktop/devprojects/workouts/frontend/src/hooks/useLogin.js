import {useState} from 'react'
import { useAuthContext}from './UseAuthContext'

export const useLogin = ()=>{
    const [error, setError] =useState(null)
    const { dispatch } = useAuthContext()

    const login = async (username, password) =>{
        const response = await fetch('http://localhost:4000/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            localStorage.setItem('user', JSON.stringify(json))
           
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return{login, error}
}