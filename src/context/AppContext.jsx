import { createContext, useContext } from "react";

const AppContext = createContext();
export function AppProvider({ children }) {
    const appName = "FundiLink";
    return (
        <AppContext.Provider value={{ appName }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}