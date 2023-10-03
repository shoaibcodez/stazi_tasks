import React, { useContext, useEffect } from 'react'
import Card from './Card';
import Jsondata from '../MOCK_DATA.json';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AppContext } from '../contexts/AppContext';
import { useParams } from "react-router-dom";

const CarCards = () => {

    const { search, currentPage, setCurrentPage, navigate } = useContext(AppContext);
    const { page } = useParams();

    useEffect(() => {
        setCurrentPage(Number(page));
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const data = Jsondata.filter((item) => {
        return search.replaceAll(' ', '').toLowerCase() === '' ? item
            : item.name.toLowerCase().replaceAll(' ', '').includes(search.replaceAll(' ', '').toLowerCase());
    })

    const dataLimit = 6;
    const totalPages = Math.ceil(data.length / dataLimit);
    const pages = [...Array(totalPages + 1).keys()].slice(1);
    const lastIndex = currentPage * dataLimit;
    const firstIndex = lastIndex - dataLimit;

    const prevPageHandler = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/${currentPage - 1}`);
        }
    }

    const nextPageHandler = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
            navigate(`/${currentPage + 1}`);
        }
    }

    return (
        <>
            {data.length > 0 && <div className='carCards'>
                {data.slice(firstIndex, lastIndex).map((card) => {
                    return (
                        <Card card={card} key={card.id} />
                    )
                })}
            </div >}
            {pages.length > 0 ? <div className='paginationBar' >
                <button onClick={prevPageHandler} ><BsArrowLeftCircle size={20} /></button>
                {pages.map((page) => {
                    return (
                        <button key={page}
                            onClick={() => {
                                setCurrentPage(page);
                                navigate(`/${page}`);
                            }}
                            className={`${currentPage === page ? "active" : ""}`}>{page}
                        </button>
                    );
                })}
                <button onClick={nextPageHandler} ><BsArrowRightCircle size={20} /></button>

            </div> : <div style={{ textAlign: 'center' }}><h2>Currently Not Available!</h2></div>}
        </>
    )
}

export default CarCards