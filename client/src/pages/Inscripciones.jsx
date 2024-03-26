import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import inscripciones from '../assets/img/inscripciones.png';
export default function Inscripciones() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Inscripciones</h1>
        <p className='mb-4 text-slate-700'>Una vez adquirido un vehículo, ya sea que haya sido inscripto anteriormente o se trate de un 0km, es obligatorio realizar la inscripción o transferencia del mismo en el Registro Seccional de la Propiedad Automotor correspondiente al domicilio del titular o titulares.
</p>
<p className='mb-4 text-slate-700'>Para más información sobre cómo realizar la transferencia de dominio de un vehículo en Córdoba, Argentina, no dude en contactarnos a nuestro WhatsApp. <br />¡Esperamos su consulta!
<img src={inscripciones} alt="" className="w-50 bg-cover bg-center border rounded-lg" />
</p>
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
