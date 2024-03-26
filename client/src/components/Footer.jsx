
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/img/logo_mariela_bgr.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="bg-red-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-center p-1 mt-8 mx-auto max-w-screen ">
        <div className="p-5">
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="h-20 w-30 sm:w-30" />
            <p className="overflow-ellipsis max-w-[220px] text-white">
           
Somos un equipo dedicado a convertir los sueños de nuestros clientes en realidad en el mercado inmobiliario. Con un enfoque personalizado y pasión por ayudar, ofrecemos un servicio integral y de calidad para encontrar el hogar ideal.





            </p>
          </div>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Contactanos</p>
            <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer flex items-center">
              <FaPhoneAlt className="mr-2" />{" "}
              {/* Utilizamos la clase mr-2 para agregar un espacio entre el ícono y el número */}
              <p>+54 9 3516308388</p>
            </li>

            <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer flex items-center">
              <FaEnvelope className="mr-2" />{" "}
              {/* Utilizamos la clase mr-2 para agregar un espacio entre el ícono y el número */}
              <p>marielakbenitez@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul className="">
            <p className="text-white font-bold text-2xl pb-4">Ubicación</p>
            <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.5993934567928!2d-64.19193672459916!3d-31.397607874270378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329863ffcef9eb%3A0x6f1dde91af821119!2sNicol%C3%A1s%20Avellaneda%201466%2C%20X5000LKH%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1710445236199!5m2!1ses!2sar"
                width="250"
                height="250"
                style={{ border: 0, textAlign: "center" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </li>
          </ul>
        </div>

        <div className="p-5 ">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Redes<span className="text-white"> Sociales</span>
            </p>
            <div className="flex gap-6 pb-5 text-white ">
              <a
                href="https://www.instagram.com/inmobiliaria.marielabenitez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
              </a>

              <a
                href="https://es-la.facebook.com/InmobiliariaYGestoriaMarielaBenitez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              {/* <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500" /> */}

              <a
                href="https://wa.me/+5493516308388?text=Buenos días, quisiera solicitar hacer una consulta sobre:  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500" />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-red-900">
        <h1 className=" text-white font-semibold">
          © 2024 Todos los Derechos Reservados| Build by {"Web Studio"}
          <span className="hover:text-blue-600 font-semibold cursor-pointer"></span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
