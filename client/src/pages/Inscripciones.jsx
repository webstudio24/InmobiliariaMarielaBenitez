import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Inscripciones() {
  return (
    <div>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Inscripciones</h1>
        <p className='mb-4 text-slate-700'>Una vez adquirido un vehículo ya sea que haya sido inscripto anteriormente o se trate de un 0km, es reglamentario la inscripción o transferencia del mismo en los registros seccionales correspondientes a nombre del titular o titulares del mismo</p>
        <Link to={
                "https://wa.me/+5493516308388"}
              className={""}
              target={"_blank"}>
        <div className="fixed bottom-[7%] right-[12%] sm:right-[2%] z-10 rounded-full w-12 h-12 flex justify-center items-center bg-green-400 cursor-pointer hover:shadow-xl">
            <FaWhatsapp
              className="text-white text-3xl"

              
            />
          </div>
        </Link>
    </div>

    
    
  )
}
