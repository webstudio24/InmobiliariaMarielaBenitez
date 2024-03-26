import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import transferencias from '../assets/img/transferencias.png';
export default function Transferencias() {
  return (
   <div className='py-20 px-4 max-w-6xl mx-auto'>
     <h1 className='text-3xl font-bold mb-4 text-slate-800'>Transferencia de un vehículo: trámite rápido y seguro
</h1>
    <p className='mb-4 text-slate-700'>Siempre que se adquiere un vehículo, es preciso transferir el dominio del mismo a nombre del nuevo dueño. Este trámite es obligatorio y se realiza en el Registro Seccional de la Propiedad Automotor correspondiente al domicilio del comprador. Para más información sobre cómo realizar la transferencia de dominio de un vehículo en Córdoba, Argentina, no dude en contactarnos a nuestro WhatsApp.
</p>
<p className='mb-4 text-slate-700'>¡Esperamos su consulta!</p>

<img src={transferencias} alt="" className="w-50 bg-cover bg-center border rounded-lg" />
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
