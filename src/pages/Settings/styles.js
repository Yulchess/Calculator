import styled from 'styled-components'

import theme from '@/theme'

const SETTING_WRAPPER_HEIGTH = 560

export const SettingWrapper = styled.div`
  width: 100%;
  height: ${SETTING_WRAPPER_HEIGTH}px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces[10]}px ${theme.spaces[12]}px;
`

export const OptionChangeTheme = styled.option`
  font-size: ${theme.spaces[15]}px;
  border-radius: ${theme.spaces[3]}px;
  border: ${theme.spaces[1]}px solid black;
  border-bottom: ${theme.colors.neutral};
`
export const OptionSelectTheme = styled.select`
  width: ${theme.spaces[18]}px;
  font-size: ${theme.spaces[15]}px;
  margin-bottom: ${theme.spaces[6]}px;
  padding: ${theme.spaces[4]}px;
  border-radius: ${theme.spaces[3]}px;
  border: ${theme.spaces[2]}px solid ${theme.colors.neutral};
  cursor: pointer;
`

export const ButtonClearHistory = styled.button`
  width: ${theme.spaces[18]}px;
  padding: ${theme.spaces[4]}px;
  border-radius: ${theme.spaces[3]}px;
  border: ${theme.spaces[2]}px solid ${theme.colors.neutral};
  font-size: ${theme.spaces[15]}px;

  text-align: left;
  margin-rigth: ${theme.spaces[5]}px;
  cursor: pointer;
`

export const TitleSettingPage = styled.h1`
  margin-bottom: ${theme.spaces[8]}px;
  size: ${theme.spaces[10]}px;
`

export const SubtitleSettingPage = styled.p``
export const ButtonsWrapper = styled.div``
export const SettingBlock = styled.div``
