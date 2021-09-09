import React, { createContext, useState } from 'react'

import {
  coloredTheme,
  darkTheme,
  lightTheme,
} from '@/theme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme)

  const changeTheme = value => {
    switch (value) {
      case 'light':
        setTheme(lightTheme)
        break
      case 'dark':
        setTheme(darkTheme)
        break
      case 'colored':
        setTheme(coloredTheme)
        break
      default:
        break
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
