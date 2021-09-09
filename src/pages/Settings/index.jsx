import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'

import { clearHistoryAction } from '@/actions/index'
import { ThemeContext } from '@/context/ThemeProvider'

import {
  ButtonClearHistory,
  ButtonsWrapper,
  OptionChangeTheme,
  OptionSelectTheme,
  SettingBlock,
  SettingWrapper,
  SubtitleSettingPage,
  TitleSettingPage,
} from './styles'

const SettingsPage = () => {
  const [selectValue, setSelectValue] = useState('dark')
  const { changeTheme } = useContext(ThemeContext)

  const dispatch = useDispatch()

  const selectOnChange = event => {
    changeTheme(event.target.value)
    setSelectValue(event.target.value)
  }

  const clearHistoryHandle = () => {
    dispatch(clearHistoryAction())
  }

  return (
    <SettingWrapper>
      <TitleSettingPage>Settings</TitleSettingPage>
      <SettingBlock>
        <SubtitleSettingPage>
          Switch Theme
        </SubtitleSettingPage>
        <OptionSelectTheme
          value={selectValue}
          onChange={selectOnChange}>
          <OptionChangeTheme value="light">
            Ligth Theme
          </OptionChangeTheme>
          <OptionChangeTheme value="colored">
            Colored Theme
          </OptionChangeTheme>
          <OptionChangeTheme value="dark">
            Dark Theme
          </OptionChangeTheme>
        </OptionSelectTheme>
        <ButtonsWrapper>
          <ButtonClearHistory onClick={clearHistoryHandle}>
            Clear All History
          </ButtonClearHistory>
        </ButtonsWrapper>
      </SettingBlock>
    </SettingWrapper>
  )
}

export default SettingsPage
