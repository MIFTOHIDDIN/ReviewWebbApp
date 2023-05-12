
import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";


export const MovieContext = createContext()

export const useMovieContext = () => useContext( MovieContext );

export const MoveProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState )
    function reducer ( state, action ) {
        switch ( action.type )
        {
            case 'all':
                fetch( "http://localhost:5003/books" ).then( res => res.json() ).then( res => dispatch( { type: 'finish', payload: res } ) );
                break;
            case 'search':
                fetch( 'http://localhost:5003/get/all', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }
                    , body: JSON.stringify(
                        {
                            key: action.payload
                        }
                    )
                } ).then( res => res.json() ).then( ( res ) => dispatch( { type: 'finish', payload: res } ) )

            case 'finish': return action.payload
        }
    }
    return (
        <MovieContext.Provider value={ [ state, dispatch ] }>
            { children }
        </MovieContext.Provider>
    )
}