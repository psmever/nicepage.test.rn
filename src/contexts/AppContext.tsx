import React, {createContext, useEffect} from 'react';

const AppContext = createContext({check: false, init: false, loading: true});

export const AppProvider: React.FC = ({children}) => {
    useEffect(() => {
        console.debug('AppProvider Start');
    }, []);

    useEffect(() => {
        console.debug('AppProvider Loading');
    });

    return (
        <AppContext.Provider value={{check: false, init: false, loading: true}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
