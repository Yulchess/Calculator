import { props } from 'bluebird';
import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import theme, { themes } from '@/theme';


const ThemeContext = React.createContext()

export default ThemeContext
// export const THEME_LIGHT: 'light'
// export const THEME_DARK: 'dark'
// export const THEME_COLORED: 'colored'

//  export const ThemeProvider = ({children, ...props}) =>{
//     const [theme, setTheme] = useState(null);

//     const change = (name)=> {
//         setTheme(name)
//     }
//     return (
//         <ThemeContext.Provider value={{theme, change}}
//         {...props}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export default ThemeProvider

// export const useTheme = () => useContext(ThemeProvider)