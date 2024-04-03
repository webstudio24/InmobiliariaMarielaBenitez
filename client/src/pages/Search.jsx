import  { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import ListingItem from '../components/ListingItem';
// Función para remover tildes
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export default function Search() {
  
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm:'',
    type: 'all_type',
    type_property: 'all',
    order:'desc',
    sort:'created_at'
  });
const [loading, setLoading] = useState(false);
const [listings, setListings] = useState([]);
const [showMore, setShowMore] = useState(false);

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const type_propertyFromUrl = urlParams.get('type_property');
    const orderFromUrl = urlParams.get('order');
    const sortFromUrl = urlParams.get('sort');



    if(searchTermFromUrl 
      || typeFromUrl || 
      type_propertyFromUrl || 
      orderFromUrl || 
      sortFromUrl){
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all_type',
        type_property: type_propertyFromUrl || 'all',
        order: orderFromUrl || 'desc',
        sort: sortFromUrl || 'created_at'
      });
    }

    const fetchListings = async ()=>{
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if(data.length>8){
        setShowMore(true);
      }else{
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    
    };

    fetchListings();
    window.scrollTo(0, 0);

  },[location.search]);
 

  const handleChange = (e) => {
    if (e.target.id === 'all_type' || e.target.id === 'rent' || e.target.id === 'sale' || e.target.id === 'season') {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }
    if (e.target.id === 'terreno' || e.target.id === 'galpon' || e.target.id === 'casa' || e.target.id === 'dpto' || e.target.id === 'local' || e.target.id === 'all') {
      setSidebardata({ ...sidebardata, type_property: e.target.id });
    }
    if (e.target.id === 'searchTerm') {
      const searchTerm = e.target.value || ''; // Verificar si e.target.value es null o undefined
      setSidebardata({ ...sidebardata, searchTerm: removeAccents(e.target.value) });
    }
    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';
      const order = e.target.value.split('_')[1] || 'desc';
      setSidebardata({ ...sidebardata, sort, order });
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    urlParams.set('type',sidebardata.type);
    urlParams.set('type_property',sidebardata.type_property);
    urlParams.set('sort',sidebardata.sort);
    urlParams.set('order',sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }
  


  const onShowMoreClick = async()=>{
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if(data.length<9){
      setShowMore(false);
    }
    setListings([...listings,...data]);

  }
  
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className="flex items-center gap-2">
            <label className='whitespace-nowrap font-semibold'>Resultados de la búsqueda:</label>
            <input type="text"
            id='searchTerm' 
            placeholder='Buscar...'
            className='border rounded-lg p-3 w-full'
            value={sidebardata.searchTerm}
            onChange={handleChange}
            />
          </div>
          <div className='flex gap-2 flex-wrap'>
            <label className='font-semibold'> Tipo de contrato:</label>
            <div className="flex gap-2">
              <input type="checkbox" id='all_type' className='w-5' 
              onChange={handleChange}
              checked={sidebardata.type === 'all_type'}
              />
              <span>Todo</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='sale' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type === 'sale'} />
              <span>Venta</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='rent' className='w-5' 
              onChange={handleChange}
              checked={sidebardata.type === 'rent'}/>
              <span>Alquiler</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='season' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type === 'season'} />
              <span>Alquiler por temporada</span>
            </div>
          </div>
          <div className='flex gap-2 flex-wrap'>
            <label className='font-semibold'>Tipo de propiedad</label>
            <div className="flex gap-2">
              <input type="checkbox" id='all' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type_property === 'all'} />
              <span>Todo</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='casa' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type_property === 'casa'} />
              <span>Casa</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='dpto' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type_property === 'dpto'} />
              <span>Departamento</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='local' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type_property === 'local'} />
              <span>Local</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='terreno' className='w-5' 
              onChange={handleChange}
              checked={sidebardata.type_property === 'terreno'}/>
              <span>Terreno</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='galpon' className='w-5'
              onChange={handleChange}
              checked={sidebardata.type_property === 'galpon'} />
              <span>Galpón</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className='font-semibold'>Filtrar por:</label>
            <select
             onChange={handleChange}
             defaultValue={'created_at_desc'}
            className='border rounded-lg p-3'
             id="sort_order">
              <option value="regularPrice_desc">Precio mayor a menor</option>
              <option value="regularPrice_asc">Precio menor a mayor</option>
              <option value="createdAt_desc">Más reciente</option>
              <option value="createdAt_asc">Más antigüo</option>
            </select>
          </div>

          <button className='bg-red-800 text-white p-3 rounded-lg uppercase hover:opacity-95'>Buscar</button>
        </form>
      </div>
      <div className="">
        <h1 className='text-3xl font-semibold border-b p-3 text-red-800 mt-5'>Lista de resultados:</h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && listings.length === 0 && (
            <p className='text-xl text-red-800 p-3'>No se encontraron resultados</p>
          )}
          {loading && (
            <p className='text-xl text-red-800 text-center w-full'>Cargando...</p>
          )}

            {!loading && listings && listings.map((listing) => <ListingItem key={listing._id} listing={listing} />)}


            {showMore && (
              <button onClick={onShowMoreClick} className='text-red-900 hover:underline p-7 text-center w-full'>Mostrar más</button>
            )}
        </div>
      </div>
    </div>
  )
}
