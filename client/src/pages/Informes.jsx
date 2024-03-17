import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Informes() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Informes</h1>
      <p className='mb-4 text-slate-700'>Antes de concretar cualquier operación de compraventa de un vehículo deberá realizarse un informe detallado del mismo donde consten los datos de dominio, títulos y cédulas de indentificación del mismo</p>
    <Link to={
                "https://wa.me/+5493516308388"}
              className={""}
              target={"_blank"}>
        <div className="fixed bottom-[10%] right-[8%] sm:right-[2%] z-10 rounded-full w-12 h-12 flex justify-center items-center bg-green-400 cursor-pointer hover:shadow-xl">
            <FaWhatsapp
              className="text-white text-3xl"

              
            />
          </div>
        </Link>
    </div>
    
  )
}
