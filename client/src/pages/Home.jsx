import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ListingItem from '../components/ListingItem';
import { FaWhatsapp } from "react-icons/fa";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
export default function Home() {
  const [houseListings, setHouseListings] = useState([]);
  const [galponListings, setGalponListings] = useState([]);
  const [terrenoListings, setTerrenoListings] = useState([]);
  const [departamentoListings, setDepartamentoListings] = useState([]);
  const [localListings, setLocalListings] = useState([]);
   const [isLoading, setIsLoading] = useState(true); 
  SwiperCore.use([Navigation]);

  
  useEffect(() => {
    const fetchHouseListings = async () => {
     
      try {
        const res = await fetch("/api/listing/get?type_property=casa&limit=3");
        const data = await res.json();
        setHouseListings(data);
        
        fetchGalponListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGalponListings = async () => {
      try {
        const res = await fetch(
          "/api/listing/get?type_property=galpon&limit=3"
        );
        const data = await res.json();
        setGalponListings(data);
        
        fetchDepartamentoListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDepartamentoListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type_property=dpto&limit=3");
        const data = await res.json();
        setDepartamentoListings(data);
       
        fetchTerrenoListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTerrenoListings = async () => {
      try {
        const res = await fetch(
          "/api/listing/get?type_property=terreno&limit=3"
        );
        const data = await res.json();
        setTerrenoListings(data);
         
        fetchLocalListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLocalListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type_property=local&limit=3");
        const data = await res.json();
        setLocalListings(data);
      } catch (error) {
        console.log(error);
      }
    };
 
    
    fetchHouseListings();
     setIsLoading(false);
    
  }, []);
  
  useEffect(() => {
    // Scroll to top solo si los datos no están cargando
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);
  
  return (

      <div className="w-full overflow-x-hidden">
      {/*TOP*/}
      <div className="flex flex-col gap-6 p-8 sm:p-28 mx-auto max-w-screen-lg">
        {/*top*/}
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
        
        <div className="text-slate-700 font-bold text-3xl lg:text-6xl ">
          <h1>
          Mariela Benitez Inmobiliaria:  <span className="text-red-900">Construyendo tus Sueños</span>
          </h1>
        </div>
        <div className="text-slate-700 text-xs sm:text-sm ">
        En la inmobiliaria Mariela Benítez nos dedicamos a ofrecerte soluciones integrales para tus necesidades de vivienda. Nuestro equipo de profesionales está comprometido en brindarte un servicio personalizado y eficiente, ayudándote a encontrar la propiedad perfecta que se adapte a tus requisitos y estilo de vida.  
        Ya sea que estés buscando comprar, vender o alquilar una propiedad, estamos aquí para guiarte en cada paso del proceso con experiencia y dedicación.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-red-900 font-bold hover:underline"
        >
          Ver propiedades...
        </Link>
      </div>

      {/*SWIPER*/}
      <Swiper navigation className="w-full">
      <SwiperSlide>
        <div
        className="w-full"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
          
          
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-500px bg-cover bg-center w-full"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
           
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="h-500px bg-cover bg-center w-full"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
         
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
      {/*LISTINGS*/}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10  w-full">
        {houseListings && houseListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Viviendas</h2>
              <Link className="text-sm text-red-900 hover:underline" to={"/search?type_property=casa"}>
                Mostrar Más Viviendas
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
                {houseListings.map((listings)=>(
                  <ListingItem listing={listings} key={listings._id}/>
                ))
                }
            </div>
          </div>
        )}






{departamentoListings && departamentoListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Departamentos</h2>
              <Link className="text-sm text-red-900 hover:underline" to={"/search?type_property=dpto"}>
                Mostrar Más Departamentos
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
                {departamentoListings.map((listings)=>(
                  <ListingItem listing={listings} key={listings._id}/>
                ))
                }
            </div>
          </div>
        )}









{galponListings && galponListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Galpones</h2>
              <Link className="text-sm text-red-900 hover:underline" to={"/search?type_property=galpon"}>
                Mostrar Más Galpones
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
                {galponListings.map((listings)=>(
                  <ListingItem listing={listings} key={listings._id}/>
                ))
                }
            </div>
          </div>
        )}










{localListings && localListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Locales</h2>
              <Link className="text-sm text-red-900 hover:underline" to={"/search?type_property=local"}>
                Mostrar Más Locales
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
                {localListings.map((listings)=>(
                  <ListingItem listing={listings} key={listings._id}/>
                ))
                }
            </div>
          </div>
        )}








{terrenoListings && terrenoListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Terrenos</h2>
              <Link className="text-sm text-red-900 hover:underline" to={"/search?type_property=terreno"}>
                Mostrar Más Terrenos
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
                {terrenoListings.map((listings)=>(
                  <ListingItem listing={listings} key={listings._id}/>
                ))
                }
            </div>
          </div>
        )}
      </div>
    </div>
  
  );
}
