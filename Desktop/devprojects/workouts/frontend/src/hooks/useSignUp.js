import {useState} from 'react'
import { useAuthContext}from './UseAuthContext'


export const useSignup=()=>{
    const [error, setError] =useState(null)
    const [isLoading, setIsLoading] =useState(null)
    const { dispatch } = useAuthContext()
    const [emptyFields, setEmptyFields] = useState([])
    
    const signUp = async(username, password, firstname,lastname, email, number, confirmPwd)=>{
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:4000/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password, firstname,lastname, email, number, confirmPwd}),
        })
        const json = await response.json()

        if(!response.ok){
           setError(json.error)
           setIsLoading(true)
           setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            setError(null)
            dispatch({type: 'LOGIN', payload: json})
            setEmptyFields([])
            setIsLoading(false)
        }
    }
    return {signUp, isLoading, error, emptyFields}
}