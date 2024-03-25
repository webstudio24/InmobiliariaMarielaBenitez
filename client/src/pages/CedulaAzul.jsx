import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CedulaAzul() {
  return (
    <div>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Cédula Azul</h1>
       <p className='mb-4 text-slate-700'>Los trámites de Cédula Azul, la cual autoriza a un tercero, no propietario del vehículo, a la circulación del mismo en la vía pública.</p>
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
