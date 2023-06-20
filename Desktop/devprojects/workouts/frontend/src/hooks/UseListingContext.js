import { ListingContext } from "../context/ListingContext";
import { useContext } from "react";

export const useListingContext =()=>{
    const context= useContext(ListingContext)

    if(!context){
        throw Error('Uselistingcontext must be used inside a listingcontextprovider')
    }

    return context
}