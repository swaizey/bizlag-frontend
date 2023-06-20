import ListingData from '../components/ListingData'
import { Link } from 'react-router-dom'
import './pages.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const Home = ({listings })=>{

return(
    <div className='App'>
        <ListingData />
        {listings && listings.map((listing) =>(
            <div className='list' key={listing._id}>
            <Link to={`/list/${(listing._id)}`}>
            <h4>{listing.title}</h4>
            </Link>
            <p>{listing.location}</p>
            <p>{listing.job}</p>
            <small>{formatDistanceToNow(new Date(listing.createdAt), {addSuffix: true})}</small>
            
            </div>
        ))}
        {!listings &&(<div>No listings at the moment...</div>)}
    </div>
)

}
export default Home
