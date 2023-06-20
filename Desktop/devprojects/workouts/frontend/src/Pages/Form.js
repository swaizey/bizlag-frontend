import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignUp'
import {Link} from 'react-router-dom'



const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [formError, setFormError] = useState(null)
    
    const {signUp, error, isLoading} = useSignup()

    const canSave = (username) && (password) && (firstname) && (lastname) && (email) && (confirmPwd) && (number)

    const handleChange = async (e) =>{
        e.preventDefault()

            const response = await signUp(username, password, firstname,lastname, email, number, confirmPwd )  
    }
   
  return (
        <>
        <div className='register'>
      
    <div className='form-control form-err'>

        <form className='' onSubmit={handleChange}>
            <div className='form-flex'>
            <input 
                type='text'
                name='firstname'
                placeholder='Firstname'
                value={firstname}
                onChange = {(e) => setFirstname(e.target.value)}
                
                />
            <input 
                type='text'
                name='lastname'
                placeholder='Lastname'
                value={lastname}
                onChange = {(e) => setLastname(e.target.value)}
               
                />
                </div>

            <input 
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                
                />

                
            <div className='form-flex'>
            <input 
                type='text'
                name='email'
                placeholder='Email'
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                
                />
                <input 
                type='text'
                name='number'
                placeholder='Number'
                value={number}
                onChange = {(e) => setNumber(e.target.value)}
                
                />
            
                </div>
                <input 
                type='text'
                name='password'
                placeholder='Password'
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                
                />
             

            <div className='form-flex'>
        
            <input 
                type='text'
                name='confirmPwd'
                placeholder='Confirm password'
                value={confirmPwd}
                className='form-number'
                onChange = {(e) => setConfirmPwd(e.target.value)}
                />
                <button disabled={!canSave} className='btn-register' type='submit' >Register</button>
                </div>
        </form>
        </div>
        <div><Link to='/signin' >Already have an account ?  Login </Link></div>
    </div>
        {error && <div className='erro-msg'>{error}</div>}
         {formError && <div>{formError}</div>}
    </>
  )
}

export default Form