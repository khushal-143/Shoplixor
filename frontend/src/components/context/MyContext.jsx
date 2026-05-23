import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("activeUser")) || null
    );
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