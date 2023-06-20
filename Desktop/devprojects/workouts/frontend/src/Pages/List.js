import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useAuthContext } from '../hooks/UseAuthContext'
import { useListingContext } from '../hooks/UseListingContext'


const List = ({listings,setLoading, loading}) => {
  const {user} = useAuthContext()
  const {id} = useParams()
  const {dispatch} = useListingContext()

  const list = listings ? listings.find(listing => (listing._id).toString() === id.toString()) : null

    const handleClick = async() =>{
      const response = await fetch('http://localhost:4000/listings/' + list._id,{
        method: 'DELETE'
      })
      const json = await response.json()
      if(response.ok){
        dispatch({type: 'DELETE_LISTING',payload: json})
      }
    }
    

    const userId = user ? user.user._id : null

    const creator = userId ? userId.toString() == list.user_id : null
    return (
    <div>
        {list && (
            <div className='list-single'>
            <h1>{list.title}</h1>
            <h4>Location: {list.location}</h4>
            <p className='desc'>Description:</p>
            <p>{list.desc}</p>

            {creator && 
            (    
           <Link to='/'> <button onClick={handleClick} className='delete btn'>Delete Listing</button></Link>
          
          )}
           {console.log(list._id, id)}
            </div>
        )}
        
    </div>
  )
}

export default List