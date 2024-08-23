import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext.jsx";
import { userReducer } from "./userReducer.js";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        isLogged: !!user,
        user: user ||  null,
    };
};

export const UserProvider = ({ children }) => {

    const [userState, setUserState] = useReducer(userReducer, {}, init)

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserState({ type: 'AUTH_LOGIN', payload: { user } });
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ userState, setUserState, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}  