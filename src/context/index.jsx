import React from 'react'
import { ThemeProvider } from './Theme'

import { MoveProvider } from './Movei'



export const MainProvider = ( { children } ) => {
    return (
        <ThemeProvider>
            <MoveProvider>

                { children }
            </MoveProvider>

        </ThemeProvider>
    )
}
export default MainProvider
