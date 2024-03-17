import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import Transferencias from './pages/Transferencias';
import Inscripciones from './pages/Inscripciones';
import Informes from './pages/Informes';
import AltasBajas from './pages/AltasBajas';
import CedulaAzul from './pages/CedulaAzul';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

import { useSelector } from "react-redux";
import Listing from './pages/Listing';
import Search from './pages/Search';
import Footer from './components/Footer';


export default function App() {

  const { currentUser,loading,error } = useSelector((state) => state.user);
  return (
    <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/listing/:listingId' element={<Listing/>}/>

        
      <Route element={<PrivateRoute/>}> 
        <Route path='/profile' element={<Profile/>}/>
           <Route path='/create-listing' element={<CreateListing/>}/>
 
          <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
        

      </Route>
      <Route path='/transferencias' element={<Transferencias/>}/>
      <Route path='/inscripciones' element={<Inscripciones/>}/>
      <Route path='/informes' element={<Informes/>}/>
      <Route path='/altas-bajas' element={<AltasBajas/>}/>
      <Route path='/cedula-azul' element={<CedulaAzul/>}/>
      

    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}
