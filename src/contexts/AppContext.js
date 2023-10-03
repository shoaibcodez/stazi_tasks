import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState();

    const value = {
        navigate,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
    };

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    );
};
