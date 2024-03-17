import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AltasBajas() {
  return (
    <div>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Altas y Bajas</h1>
      <p className='mb-4 text-slate-700'>Este trámite consta en dar de baja al propietario anterior del vehículo y proveer la alta como nuevo titular al comprador del automóvil.</p>
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
   
    // <div className="bg-green-500 text-white rounded-lg uppercase hover:opacity-95 p-3 text-center flex items-center justify-center">
    //             <div className="text-center mr-2 text-2xl">
    //               <FaWhatsapp />
    //             </div>
    //             <div className="text-center ">Contactar por WhatsApp</div>
    //           </div>
  )
}
