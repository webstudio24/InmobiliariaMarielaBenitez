
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>¿Quiénes somos?</h1>
      <p className='mb-4 text-slate-700'>En Mariela Benítez, no somos solo una inmobiliaria; somos un equipo comprometido con hacer realidad los sueños de nuestros clientes. Desde nuestros inicios, nos hemos dedicado a ofrecer un servicio integral y de calidad en el mercado inmobiliario, marcando la diferencia con nuestro enfoque personalizado y nuestra pasión por ayudar a las personas a encontrar su hogar ideal.</p>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'> Nuestra Historia</h1>
      <p className='mb-4 text-slate-700'>Fundada por Mariela Benítez hace más de una década, nuestra empresa ha crecido y evolucionado gracias a nuestro firme compromiso con la excelencia y la satisfacción del cliente. Lo que comenzó como un pequeño emprendimiento familiar se ha convertido en una referencia en el sector, reconocida por nuestra ética de trabajo, atención personalizada y resultados excepcionales.</p>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>¿Por qué elegirnos?</h1>
      <p className='mb-4 text-slate-700'>Mariela Benítez, reconocida en el mercado inmobiliario, ofrece un servicio de gestoría completo para simplificar trámites tanto inmobiliarios como automotores. Nuestro equipo de profesionales altamente capacitados se encarga meticulosamente de cada paso, desde la preparación de documentación hasta la resolución de problemas. Nos comprometemos a proporcionar a nuestros clientes una experiencia sin contratiempos y personalizada, abordando todas sus necesidades de gestión con eficiencia y profesionalismo. Confíe en Mariela Benítez para facilitar y agilizar sus trámites, asegurando una transición fluida y sin problemas en todos sus procesos inmobiliarios y de vehículos.</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>Misión</h2>
      <p className='mb-4 text-slate-700'>En la inmobiliaria Mariela Benítez nos dedicamos a transformar sueños en hogares, proporcionando un servicio integral y de calidad que satisfaga las necesidades de nuestros clientes. Nuestra misión es facilitar el proceso de compra, venta o alquiler de propiedades, ofreciendo asesoramiento experto, transparencia y compromiso en cada paso del camino.</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>Visión</h2>
      <p className='mb-4 text-slate-700'>Nos visualizamos como la principal opción en el mercado inmobiliario, reconocidos por nuestra ética de trabajo, atención personalizada y resultados excepcionales. Nos esforzamos por ser líderes en innovación y tecnología, adaptándonos constantemente a las necesidades cambiantes de nuestros clientes y del mercado, mientras mantenemos la esencia familiar y cálida que nos distingue.</p>
      <h2 className='text-2xl font-bold mb-4 text-slate-800'>Valores</h2>
      <ul className='mb-4 text-slate-700'>
        <li className='mb-4 text-slate-700'><b>Excelencia:</b> Nos comprometemos a ofrecer un servicio de la más alta calidad, superando las expectativas de nuestros clientes en cada interacción</li>
        <li className='mb-4 text-slate-700'><b>Compromiso con el cliente:</b> Colocamos las necesidades y deseos de nuestros clientes en el centro de todo lo que hacemos, brindando un servicio personalizado y atención individualizada.</li>
        <li className='mb-4 text-slate-700'><b>Trabajo en equipo:</b> Valoramos y fomentamos la colaboración, el respeto y el apoyo mutuo entre nuestro equipo, reconociendo que juntos logramos más.</li>
        <li className='mb-4 text-slate-700'><b>Pasión por el servicio:</b> Nos apasiona lo que hacemos y nos esforzamos por transmitir esa pasión en cada interacción con nuestros clientes, creando experiencias memorables y duraderas.</li>
      </ul>
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
