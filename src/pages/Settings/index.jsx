import React from 'react'
import {BackgroundSetting,BlockTheme,OptionChange,OptionSelect} from "./components"

export default () => {
  return (
    <BackgroundSetting>
      <h1>Settings</h1>
      <div>
        <p>Switch Theme</p>
        <OptionSelect>
          <OptionChange>Ligth Theme</OptionChange>
          <OptionChange>Colored Theme</OptionChange>
          <OptionChange>Dark Theme</OptionChange>
        </OptionSelect>
        <BlockTheme>
          <p>Clear All History</p>
        </BlockTheme>
      </div>
    </BackgroundSetting>
  )
}
