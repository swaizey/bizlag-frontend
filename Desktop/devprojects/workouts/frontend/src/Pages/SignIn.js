import {useState} from 'react'


const SignIn =()=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')

    const [users, setUser] =useState([
        {
            id:1,
            name:'Brad',
            password:'2345',
            mail:'brad@gmail'
        },
        {
            id:2,
            name:'Alex',
            password:'2345',
            mail:'brad@gmail'
        },
        {
            id:3,
            name:'Ben',
            password:'2345',
            mail:'brad@gmail'
        }
    ])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = users.length ? users[users.length -1].id + 1 : 1
    
        
    }
    const canSave = (name) && (password) && (email)
    return(
    <div className='form-control'>
    <form onSubmit={handleSubmit}>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Listing title'
            />
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            />
        <input
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            placeholder='Confirm password'
            />
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            />
         <button
            disabled={!canSave}
         >Create Account</button>
    </form>
    <div className='msg-form'></div>
</div>
    )
}
export default SignIn