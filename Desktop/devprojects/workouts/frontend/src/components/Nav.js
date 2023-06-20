import {Link }from 'react-router-dom'
import './nav.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/UseAuthContext'


const Nav = () =>{
    const {user} = useAuthContext()
    const {logout} = useLogout()
    const handelClick =()=>{
        logout()
    }
    return(
        <div className="nav">
            {user && <span>Welcome {user.username}!</span>}
            
           <div className="logo">
            <h1>BizLagos</h1>
            </div> 

            <ul>  
             <li>
             <Link to='/'>Home</Link>
             </li>
             <li>
             <Link to='/createlisting'>Post a listing</Link>
             </li>

             <li>
             <Link to='/about'>About</Link>
             </li>
            </ul>

            { !user &&<Link className='btn-signIn' to='/signin'>Sign In</Link>}
            {user && <button  className='btn-signIn logout' onClick={handelClick}>Log out</button>}
        </div>
    )
}
export default Nav
