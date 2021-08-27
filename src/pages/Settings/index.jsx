import React,{useState} from 'react'
import {
  BackgroundSetting,
  BlockTheme,
  OptionChange,
  OptionSelect,
  TitleHeader,
  MyButton,
} from './components'
import { clearHistory } from '@/actions/index'
import theme, {
  coloredTheme,
  darkTheme,
  lightTheme,
} from '@/theme'
import { connect } from 'react-redux'
import Display from '@/components/Calculator/Display'

const mapDispatchToProps = {
  clearHistory,
}

export default connect(
  null,
  mapDispatchToProps,
)(({setTheme,clearHistory}) => {
  const [value, setValue] = useState('dark')
  
  const changeThemeHandler = e => {
    switch (e.target.value) {
      case 'light':
        setValue(e.target.value)
        setTheme(lightTheme)
        break
      case 'dark':
        setValue(e.target.value)
        setTheme(darkTheme)
        break
      case 'colored':
        setValue(e.target.value)
        setTheme(coloredTheme)
        break
    }
  }

  function clearHistoryHandle() {
    clearHistory()
  }

  return (
    <BackgroundSetting>
      <TitleHeader>Settings</TitleHeader>
      <div>
        <p>Switch Theme</p>
        <OptionSelect
          onChange={changeThemeHandler}
          value={value}>
          <OptionChange value="light">
            Ligth Theme
          </OptionChange>
          <OptionChange value="colored">
            Colored Theme
          </OptionChange>
          <OptionChange value="dark">
            Dark Theme
          </OptionChange>
        </OptionSelect>
        <div>
          <MyButton onClick={clearHistoryHandle}>
            Clear All History
          </MyButton>
        </div>
      </div>
    </BackgroundSetting>
  )
})
