import { useEffect, useState, useRef } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import logo from "../assets/img/logo_mariela_bgr.png";
import { GiHamburgerMenu } from "react-icons/gi";

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export default function Header() {
  const { currentUser } = useSelector(stats => stats.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInm, setIsOpenInm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const mobileMenuRef = useRef(null);
  const menuRef = useRef(null);
  const menuRefInm = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
  };


  /*menu inmuebles */
  const toggleDropdownInm = () =>{
    setIsOpenInm(!isOpenInm)
  }
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const closeMenuInm = () => {
    setIsOpenInm(false);
  };

  const handleClickOutside = (event) => {
    // Si el menú móvil está abierto y el clic no está dentro del menú o en el botón del menú, ciérralo
    if (isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) && 
        !event.target.closest('.mobile-menu-button')) {
      closeMobileMenu();
    }
  
    // Si el menú de Trámites está abierto y el clic no está dentro del menú o en el botón del menú, ciérralo
    if (isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !event.target.closest('.menu-button')) {
      closeMenu();
    }


    if (isOpenInm && 
      menuRefInm.current && 
      !menuRefInm.current.contains(event.target) && 
      !event.target.closest('.menu-inm')) {
    closeMenuInm();
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTermWithoutAccents = removeAccents(searchTerm);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTermWithoutAccents);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    } else {
      setSearchTerm('');
    }
  }, [location.search]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isOpen, isOpenInm]); // Ejecutar el efecto cada vez que cambie el estado de isMobileMenuOpen o isOpen

  return (
    <header className='bg-red-900'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to='/'>
          <img src={logo} alt="" className='h-16 w-30 sm: w-30' />
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type="text"
            placeholder='Buscar...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm} 
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        <ul className='flex gap-4'>
          <Link to='/about'>
            <li className='hidden sm:inline  text-slate-100 hover:underline'>Nosotros</li>
          </Link>
          <li className='relative'>
            <button onClick={toggleDropdownInm} className='menu-inm hidden sm:inline text-slate-100 hover:underline '>
              Inmuebles<svg className='w-4 h-4 inline-block ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 12l-6-6h12l-6 6z' clip-rule='evenodd'></path></svg>
            </button>
            {isOpenInm && (
              <ul ref={menuRefInm} className='absolute  bg-red-900 rounded-lg shadow-md mt-2 p-4 z-50 text-white'>
                <Link to='/search?searchTerm=&type=sale&type_property=all&sort=created_at&order=desc' onClick={closeMenuInm}><li className='hover:underline'>Venta</li></Link>
                <Link to='/search?searchTerm=&type=rent&type_property=all&sort=created_at&order=desc' onClick={closeMenuInm}><li className='hover:underline'>Alquiler</li></Link>
                <Link to='/tasaciones' onClick={closeMenu}><li className='hover:underline'>Tasaciones</li></Link>               
              </ul>
            )}
          </li>          
          <li className='relative'>
            <button onClick={toggleDropdown} className='menu-button hidden sm:inline text-slate-100 hover:underline '>
              Automotores<svg className='w-4 h-4 inline-block ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 12l-6-6h12l-6 6z' clip-rule='evenodd'></path></svg>
            </button>
            {isOpen && (
              <ul ref={menuRef} className='absolute  bg-red-900 rounded-lg shadow-md mt-2 p-4 z-50 text-white'>
                <Link to='/transferencias' onClick={closeMenu}><li className='hover:underline'>Transferencias</li></Link>
                <Link to='/inscripciones' onClick={closeMenu}><li className='hover:underline'>Inscripciones</li></Link>
                <Link to='/informes' onClick={closeMenu}><li className='hover:underline'>Informes</li></Link>
                <Link to='/altas-bajas' onClick={closeMenu}><li className='hover:underline'>Altas/Bajas</li></Link>
              </ul>
            )}
          </li>
          <li className=' inline sm:inline'>
            <Link to='/profile'>
              {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover inline sm:inline ' src={currentUser.avatar} alt="profile" />
              ) : (<FaUser className='  text-slate-100  inline sm:inline hover:underline ' />)
              }
            </Link>
          </li>

          <li className='inline sm:hidden  text-slate-100 ' >
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <GiHamburgerMenu className='hover:bg-red-800 inline sm:inline rounded-full' />
            </button>
            <ul ref={mobileMenuRef} className={`absolute bg-red-900 rounded-lg shadow-md mt-2 p-6 z-50 mr-5 text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`} style={{ right: 0 }}>
              <Link to='/' onClick={closeMobileMenu}><li className='hover:underline p-2'>Inicio</li></Link>
              <Link to='/about' onClick={closeMobileMenu}><li className='hover:underline p-2'>Nosotros</li></Link>
              <Link to='/transferencias' onClick={closeMobileMenu}><li className='hover:underline p-2'>Transferencias</li></Link>
              <Link to='/inscripciones' onClick={closeMobileMenu}><li className='hover:underline p-2'>Inscripciones</li></Link>
              <Link to='/informes' onClick={closeMobileMenu}><li className='hover:underline p-2'>Informes</li></Link>
              <Link to='/altas-bajas' onClick={closeMobileMenu}><li className='hover:underline p-2'>Altas/Bajas</li></Link>
              <Link to='/tasaciones' onClick={closeMobileMenu}><li className='hover:underline p-2'>Tasaciones</li></Link>
              <Link to='/search?searchTerm=&type=sale&type_property=all&sort=created_at&order=desc' onClick={closeMobileMenu}><li className='hover:underline p-2'>Venta</li></Link>
              <Link to='/search?searchTerm=&type=rent&type_property=all&sort=created_at&order=desc' onClick={closeMobileMenu}><li className='hover:underline p-2'>Alquiler</li></Link>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
