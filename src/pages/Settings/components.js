import styled from 'styled-components'
import theme from '@/theme'

export const BackgroundSetting = styled.div`
  width: 100%;
  height: 560px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`
export const BlockTheme = styled.div`
  border: 2px solid ${theme.colors.neutral};
  width: 170px;
  font-size: 18px;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
`
export const OptionChange = styled.option`
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  border-bottom: ${theme.colors.neutral};
`
export const OptionSelect = styled.select`
  width: 170px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 7px;
  border-radius: 5px;
  border: 2px solid ${theme.colors.neutral};
  cursor: pointer;
`

export const MyButton = styled.button`
  width: 170px;
  padding: 7px;
  border-radius: 5px;
  border: 2px solid ${theme.colors.neutral};
  font-size: 18px;
  text-align: left;
  margin-rigth: 10px;
  cursor: pointer;
`

export const TitleHeader = styled.h1`
  margin-bottom: 25px;
  size: 30px;
`
