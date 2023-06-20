import { createContext, useReducer } from "react";
export const ListingContext = createContext()

export const listingReducer = (state, action)=>{
    switch(action.type){
        case 'SET_LISTINGS':
            return{
                listings:action.payload
            }
        case 'CREATE_LISTING':
            return{
                listings: [ ...state.listings, action.payload]
            }
        case 'DELETE_LISTING':
            return{
                listings: state.listings.filter((l) => l._id !== action.payload._id)
            }
        default: return state
    }
}
export const ListingContextProvider =({children})=>{
    const [state, dispatch] = useReducer(listingReducer,{
        listings: null})
  
    return(
        <ListingContext.Provider value={{...state, dispatch}} >
        {children}
        </ListingContext.Provider>
    )
    
}