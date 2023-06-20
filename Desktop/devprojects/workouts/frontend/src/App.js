import Home from './Pages/Home'
import List from './Pages/List'
import CreateListing from './Pages/CreateListing'
import Nav from './components/Nav'
import Missing from './Pages/Missing'
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 
'react-router-dom'
import SignIn from './Pages/SignIn'
import {useListingContext} from './hooks/UseListingContext'
import Form from './Pages/Form'
import { Login } from './Pages/Login'
import { useAuthContext } from './hooks/UseAuthContext'

const App = () => {
  const {user} = useAuthContext()
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [job, setJob] = useState('')
  const [desc, setDesc] = useState('')
  const [loading, setLoading] = useState(null)


  const {listings, dispatch} = useListingContext()
  useEffect(()=>{
    const getListings = async()=>{
      const result = await fetch('http://localhost:4000/listings')
      const response = await result.json()
      if(result.ok){
        dispatch({type:'SET_LISTINGS', payload: response})
      }
    }
    getListings()
  
  }, [])

  
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    
    
      <Route 
      path='/' 
      element={
      <Home
      listings={listings}
 
      />
      } />
    <Route path='/signin' element={ !user ? <Login /> : <Navigate to='/'/>}/>
    <Route path='/signup' element={ !user ? <Form /> : <Navigate to='/'/>}/>
      <Route 
      path='/createlisting' 
      element={
      <CreateListing 
      title={title}
      setTitle={setTitle}
      location={location}
      setLocation={setLocation}
      desc={desc}
      setDesc={setDesc}
      loading={loading}
      setLoading={setLoading}
      job ={job}
      setJob={setJob}
    
      />
      } />
      
      <Route path='/list/:id' element={<List
        listings={listings}
        setLoading={setLoading}
        loading={loading}
      />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='*' element={<Missing/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App