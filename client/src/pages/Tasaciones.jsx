import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import tasacion from '../assets/img/Tasaciones.jpeg';


export default function CedulaAzul() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
       <h1 className='text-3xl font-bold mb-4 text-slate-800'>Tasaciones
</h1>
       <p className='mb-4 text-slate-700'>Realizamos tasaciones de inmuebles, para poder brindar información útil sobre una propiedad. Describe lo que la hace valiosa y puede mostrar cómo se compara con otras propiedades en la zona. El método empleado en la valuaciones es el Comparativo, que consiste en estudiar antecedentes de venta y ofertas en la zona, teniendo en cuenta además sus cualidades individuales de cada inmueble ofrecido y a su vez comparar con el inmueble a valuar. 
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
