import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Porque queremos que tu vida sea mucha más sencilla</h1>
      <p className='mb-4 text-slate-700'>Mariela Benitez, pone al alcance de sus clientes, el servicio de gestoría.</p>
      <p className='mb-4 text-slate-700'>Nuestro grupo de profesionales llevan a cabo, de una forma meticulosa, trámites de gestión inmobiliaría y automotor</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>Misión</h2>
      <p className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam quo deleniti velit, quod sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur mollitia explicabo omnis laboriosam quis sapiente dicta nobis. Voluptas laborum deserunt quibusdam consectetur? Eaque quo neque expedita nesciunt aspernatur iusto adipisci voluptates beatae facilis hic.</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>visión</h2>
      <p className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam quo deleniti velit, quod sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur mollitia explicabo omnis laboriosam quis sapiente dicta nobis. Voluptas laborum deserunt quibusdam consectetur? Eaque quo neque expedita nesciunt aspernatur iusto adipisci voluptates beatae facilis hic.</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>Valores</h2>
      <ul className='mb-4 text-slate-700'>
        <li className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis sapiente sint quidem ab suscipit.</li>
        <li className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis sapiente sint quidem ab suscipit.</li>
        <li className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis sapiente sint quidem ab suscipit.</li>
        <li className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis sapiente sint quidem ab suscipit.</li>
        <li className='mb-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis sapiente sint quidem ab suscipit.</li>
      </ul>
       <Link to={
                "https://wa.me/+5493516308388"}
              className={""}
              target={"_blank"}>
        <div className="fixed bottom-[11%] right-[18%] sm:right-[2%] z-10 rounded-full w-12 h-12 flex justify-center items-center bg-green-400 cursor-pointer hover:shadow-xl">
            <FaWhatsapp
              className="text-white text-3xl"

              
            />
          </div>
        </Link>
    </div>
  )
}
