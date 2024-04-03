import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import cedulaazul from '../assets/img/cedulas.png';
export default function CedulaAzul() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Cédula Azul: tranquilidad para vos y tu vehículo
</h1>
       <p className='mb-4 text-slate-700'>¿Necesitas que un tercero circule con tu vehículo?
</p>
<p className='mb-4 text-slate-700'>Con la Cédula Azul, podrás autorizar a cualquier persona a conducir tu auto sin necesidad de realizar trámites adicionales.
</p>
  <p>También puede contactarnos a nuestro WhatsApp para obtener asesoramiento sobre este tema. <br/>
¡Esperamos su consulta!</p>
    <img src={cedulaazul} alt="" className="w-50 bg-cover bg-center border rounded-lg" />
      
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
