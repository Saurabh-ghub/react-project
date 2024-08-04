import React from 'react'
import {useContext} from 'react'
export const ThemeContext = React.createContext({
    themeMode:'light',   // these functions will be defined in global
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return  useContext(ThemeContext);
}
