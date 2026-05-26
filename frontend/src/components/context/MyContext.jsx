import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [user, setUser] = useState(() => {

        const savedUser =
            localStorage.getItem("user") ||
            sessionStorage.getItem("user");

        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [activeTab, setActiveTab] = useState("login");

    return (
        <MyContext.Provider
            value={{
                user,
                setUser,
                activeTab,
                setActiveTab
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;