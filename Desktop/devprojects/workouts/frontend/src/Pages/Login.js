import { useState } from "react"
import { useLogin } from '../hooks/useLogin'
import { Link } from "react-router-dom"

export const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {error, login} = useLogin()

    const handleLogin = async (e)=>{
        e.preventDefault()
        await login(username, password)
    }
    const canSave = (username) && (password)
    return(
        <>
        <div className="loginform">
        <form onSubmit={handleLogin} className="form-control form-login form-err">
        <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
               
                />
        <input 
                type='text'
                placeholder='password'
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
               
                />
                <button disabled={!canSave} className='btn-register' type='submit' >Login</button>

        </form>
        <div><Link to='/signup' >Don't have an account ?  Register </Link></div>
        {error && <div className='erro-msg'>{error}</div>}
        </div>
        </>
    )
}