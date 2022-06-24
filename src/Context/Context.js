import React, {useState, createContext, useEffect} from 'react';

export const ApiContext = createContext();

export const ApiProvider = (props) => {
    const [notification, setNotification] = useState({});

    useEffect(() => {
        setNotification({
            show:false,
        })
    }, [])

    return (
        <ApiContext.Provider value={[notification, setNotification]}>
            {props.children}
        </ApiContext.Provider>
    );
}