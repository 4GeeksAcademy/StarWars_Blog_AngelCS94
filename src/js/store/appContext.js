import React, { useState, useEffect } from "react";
import getState from "./flux";

// No cambies esto, aquí es donde inicializamos nuestro contexto, por defecto será null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // esto será pasado como el valor del contexto
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            // Cargar datos una sola vez al montar el componente
            state.actions.loadPersonajes();
            state.actions.loadPlanetas();
            state.actions.loadStarships();
        }, []);

        // El valor inicial del contexto ya no es null, sino el estado actual de este componente,
        // el contexto ahora tendrá disponibles las funciones getStore, getActions y setStore, porque fueron declaradas
        // en el estado de este componente
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
