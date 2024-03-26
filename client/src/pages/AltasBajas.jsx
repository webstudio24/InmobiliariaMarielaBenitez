import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import altasbajas from '../assets/img/altas-bajas.png';
export default function AltasBajas() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Altas y Bajas</h1>
      <p className='mb-4 text-slate-700'>En nuestra inmobiliaria, te ayudamos a realizar la transferencia de tu vehículo de forma rápida, segura y sin complicaciones.
Nos encargamos de todo el papeleo y las gestiones necesarias para que no tengas que preocuparte por nada.
</p>
<p className='mb-4 text-slate-700'>El trámite de transferencia consta de dos pasos principales:</p>
<p className='mb-4 text-slate-700'><b>Baja:</b> </p>
<p className='mb-4 text-slate-700'>Baja por robo/ baja por reducción total.
</p>
<p className='mb-4 text-slate-700'><b>Alta: </b></p>
<ul className='mb-4 text-slate-700'>
  <li>Te registramos como nuevo titular del vehículo en el Registro Nacional de la Propiedad Automotor.
</li>
  <li>Te entregamos la nueva Cédula Verde a tu nombre.
</li>
</ul>
<img src={altasbajas} alt="" className="w-50 bg-cover bg-center border rounded-lg" />


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
   
    // <div className="bg-green-500 text-white rounded-lg uppercase hover:opacity-95 p-3 text-center flex items-center justify-center">
    //             <div className="text-center mr-2 text-2xl">
    //               <FaWhatsapp />
    //             </div>
    //             <div className="text-center ">Contactar por WhatsApp</div>
    //           </div>
  )
}
