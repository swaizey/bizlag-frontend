import {useListingContext} from '../hooks/UseListingContext'
import {useState} from 'react'
import ListingData from '../components/ListingData'
import { useAuthContext } from '../hooks/UseAuthContext'
import { useParams } from 'react-router-dom'
const CreateListing = ({
    title,
    setTitle,
    location,
    setLocation,
    desc,
    setDesc,
    setLoading,
    loading,
    job, 
    setJob
}) =>{
    const {id} = useParams()
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState(null)
    const {listings, dispatch} = useListingContext()
    const {user} = useAuthContext()

        const handleSubmit = async (e) =>{
            e.preventDefault()

            if(!user){
                setError('You must be logged in')
                return}
            const listing = {title, location, desc, job}

            const response = await fetch('http://localhost:4000/listings',{
                method: 'POST',
                body: JSON.stringify(listing),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(!response.ok){
                setError(json.error)
                setEmptyFields(json.emptyFields)
            }
            
            if(response.ok){
                setTitle('')
                setLocation('')
                setEmptyFields([])
                setDesc('')
                setError(null)
                dispatch({type: 'CREATE_LISTING', payload: json})
            }  
        }
    return (
        <div className='form-control form-err'>
            <form onSubmit={handleSubmit}>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Listing title'
                
                    />
                    <ListingData
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    />
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Location'
                    />
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder='Listing Description'
                    
                    >
                 </textarea>
                 <button
                    
                 >Submit</button>
                {error && <div className="erro-msg">{error}</div>}
            </form>
            <div className='msg-form'>
            </div>
       
        </div>
    )
}
export default CreateListing