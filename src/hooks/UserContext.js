
// import React, { createContext, useContext, useState } from "react";

// import PropTypes from "prop-types";


// const UserContext = createContext({})

// export const UserProvider = ({ children }) => {
//     const [userData, setUserData] = useState({})


//     const putUserData = async userInfo => {
//         setUserData(userInfo)

//         await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
//     }

//     const logout = async () => {
//         await localStorage.removeItem('codeburger:userData')
//     }

//     return(
//         <UserContext.Provider value={{putUserData, removeItem, userData}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export const useUser = () => {
//     const context = useContext(UserContext)

//     if(!context){
//         throw new Error('useUser name must be used with UserContext')
//     }

//     return context
// }

// UserProvider.propTypes = {
//     children: PropTypes.node
// }

import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const putUserData = async (userInfo) => {
        setUserData(userInfo);

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo));
    };

    const logout = async () => {
        await localStorage.removeItem('codeburger:userData');
    };

    return (
        <UserContext.Provider value={{ putUserData, logout, userData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

UserProvider.propTypes = {
    children: PropTypes.node
};
