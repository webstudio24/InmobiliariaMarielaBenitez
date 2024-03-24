import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import "swiper/css/bundle";
import { FaCarAlt } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { CgExpand } from "react-icons/cg";
import { PiArrowSquareUpRightFill } from "react-icons/pi"; //icono para terreno
import { PiSquaresFourFill } from "react-icons/pi";//icono par aambientes
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaArrowsAltH,
  FaWhatsapp,
  FaSwimmingPool,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  console.log(loading);
  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Cargando...</p>}
      {error && <p className="text-center my-7 text-2xl">Algo salió mal...</p>}

      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  {" "}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[7%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[15%]  z-10 rounded-md bg-slate-100 p-2 md:hidden">
              Link copiado!
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4 ">
            <p className="text-2xl font-bold uppercase">
              {listing.name} 
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type_property === "casa"
                  ? "Casa"
                  : listing.type_property === "dpto"
                  ? "Departamento"
                  : listing.type_property === "galpon"
                  ? "Galpón"
                  : listing.type_property === "local"
                  ? "Local"
                  : "Terreno"}
              </p>
                
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "En Alquiler" : (listing.type === "sale" ? "En Venta" : "Alquiler por temporada")}
              </p>

              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountedPrice} OFF
                </p>
              )}
            </div>

            <div className=" rounded-xl border-slate-300 border-2  hover:border-red-900 p-4 bg-white" >
                
            
            <h3 className="text-2xl font-semibold mb-4 border-l-2 ml-2 mr-4 border-red-900 pl-2">{listing.regularPrice} USD</h3>

            <ul className="text-red-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6   ">
              
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <CgExpand className="text-lg" />
                {listing.mts_totales}m² totales
              </li>

              <li className="flex items-center gap-1 whitespace-nowrap ">
                <PiHouseLineFill className="text-lg" />
                {listing.mts_cubiertos}m² cubiertos
              </li>

              {listing.ambientes > 0 && (
                 <li className="flex items-center gap-1 whitespace-nowrap ">
                <PiSquaresFourFill  className="text-lg"/>
                {listing.ambientes > 1
                    ? `${listing.ambientes} ambientes `
                    : `${listing.ambientes} ambiente `}
               </li>
              )}

              {listing.bedrooms > 0 && (
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaBed className="text-lg" />
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} habitaciones `
                    : `${listing.bedrooms} habitación `}
                </li>
              )}

              {listing.bathrooms > 0 && (
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaBath className="text-lg" />
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} baños `
                    : `${listing.bathrooms} baño `}
                </li>
              )}

              {listing.parking === true && (
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaParking className="text-lg" />
                  {listing.parking ? "Garage" : "Sin garage"}
                </li>
              )}

{listing.cochera === true && (
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  < FaCarAlt className="text-lg" />
                  {listing.parking ? "Cochera" : "Sin cochera"}
                </li>
              )}

              {listing.type_property == "casa" ||
                (listing.type_property == "departamento" && (
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaChair className="text-lg" />
                    {listing.furnished ? "Ambueblado" : "Sin Ambueblar"}
                  </li>
                ))}

              {listing.pool && (
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaSwimmingPool className="text-lg" />
                  {listing.furnished ? "Pileta" : "Sin Pileta"}
                </li>
              )}
            </ul>
            </div>
            

            <p className="text-slate-800 rounded-xl p-4 border-slate-300 border-2  hover:border-red-900 bg-white ">
            <h3 className="font-bold text-2xl">Descripción</h3>

              <div className=" text-justify m-l-2 max-w-[770px]  sm: max-w-[96%]">
                {listing.description.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </p>
            
            <Link
              to={
                "https://wa.me/+5493516308388?text=Buenos días, quisiera solicitar más información del inmueble ubicado en: " +
                listing.address
              }
              className={""}
              target={"_blank"}
            >
              <div className="bg-green-500 text-white rounded-lg uppercase hover:opacity-95 p-3 text-center flex items-center justify-center">
                <div className="text-center mr-2 text-2xl">
                  <FaWhatsapp />
                </div>
                <div className="text-center ">Contactar por WhatsApp</div>
              </div>
            </Link>

            

          </div>
        </div>
      )}
    </main>
  );
}
