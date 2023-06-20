import { Link } from "react-router-dom"

const Missing = ()=>{
    
    return(
        <div>
            <h1>Oops something went wrong go {<Link to='/'>home</Link>}</h1>
        </div>
    )
}
export default Missing