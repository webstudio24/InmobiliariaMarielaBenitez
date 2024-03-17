import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ListingItem from '../components/ListingItem';
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [houseListings, setHouseListings] = useState([]);
  const [galponListings, setGalponListings] = useState([]);
  const [terrenoListings, setTerrenoListings] = useState([]);
  const [departamentoListings, setDepartamentoListings] = useState([]);
  const [localListings, setLocalListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(houseListings);

  useEffect(() => {
    const fetchHouseListings = async () => {
    
      try {
        const res = await fetch("/api/listing/get?type_property=casa&limit=3");
        const data = await res.json();
        setHouseListings(data);
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
    window.scrollTo(0, 0);
    fetchHouseListings();
    
    
  }, []);
  
  return (
    <div>
      {/*TOP*/}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        {/*top*/}
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
        <div className="text-slate-700 font-bold text-3xl lg:text-6xl ">
          <h1>
          Mariela Benitez Inmobiliaria:  <span className="text-red-900">Construyendo tus Sueños</span>
          </h1>
        </div>
        <div className="text-slate-700 text-xs sm:text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea eveniet nesciunt magnam nisi numquam maxime aliquam voluptatem cumque est perferendis ut ex nostrum iure dolor asperiores mollitia, porro tenetur esse veniam nihil a possimus in! Qui iste nobis id, repudiandae quisquam sit ratione voluptas. <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolor consectetur ullam laboriosam obcaecati!
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-red-900 font-bold hover:underline"
        >
          Ver propiedades...
        </Link>
      </div>

      {/*SWIPER*/}
      <Swiper navigation>
        {houseListings &&
          houseListings.length > 0 &&
          houseListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  backgroundImage: `url(${listing.imageUrls[0]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "500px",
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/*LISTINGS*/}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
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
