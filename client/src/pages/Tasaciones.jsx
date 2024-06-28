import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import tasacion from '../assets/img/Tasaciones.jpeg';


export default function CedulaAzul() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Tasaciones
</h1>
       <p className='mb-4 text-slate-700'>Esta página estará disponible pronto!
</p>
  
    <img src={tasacion} alt="" className="w-50 bg-cover bg-center border rounded-lg" />
      
    <Link to={
                "https://wa.me/+5493516308388"}
              className={""}
              target={"_blank"}>
        <div className="fixed bottom-[5%] right-[7%] sm:right-[2%] z-10 rounded-full w-12 h-12 flex justify-center items-center bg-green-400 cursor-pointer hover:shadow-xl">
            <FaWhatsapp
              className="text-white text-3xl"

              
            />
          </div>
        </Link>
    </div>
   
  )
}
