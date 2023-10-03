import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { AppContext } from '../contexts/AppContext';


const Navbar = () => {

    const { navigate, setSearch, setCurrentPage } = useContext(AppContext);

    return (
        <div className='navbar'>
            <div className="search">
                <input style={{
                    fontSize: '18px',
                    border: 'none', outline: 'none', padding: '4px 6px', width: '350px'
                }} type="text" placeholder='Search' onChange={(e) => {
                    setSearch(e.target.value); setCurrentPage(1); navigate(`/${1}`);
                }} />
                <button className="searchBtn">
                    < FaSearch color='grey' />
                </button>
            </div>
        </div >
    )
}

export default Navbar