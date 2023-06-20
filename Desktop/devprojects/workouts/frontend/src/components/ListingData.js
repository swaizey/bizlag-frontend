import json from '../data/listings.json'


const listingData = () =>{
    const arr = []
    Object.keys(json).map((data)=>{arr.push(json[data])})

    
    return(
        <form className='filter-listings'>
            <select>
                <option>Select Job</option>
                    {arr.map(data =>(
                        <option key={data}>{data}</option>
                    ))}
            </select>
        </form>
    )
}

export default listingData