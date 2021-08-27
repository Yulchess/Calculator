import React, { lazy, Suspense, useEffect,useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import { connect, useDispatch } from 'react-redux'
import { getLocalStorage } from '@/actions/index'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import { PageLayout } from '@/layouts'
import SettingsPage from '@/pages/Settings'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '@/theme'
import GlobalStyles from '@/globalStyles'

const HomePage = lazy(() => import('@/pages/Home'))

export const Application = ({ getLocalStorage }) => {
  const [currentTheme, setCurrentTheme] = useState(
    darkTheme,
  )

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem('redux-store'),
    )
    getLocalStorage(data?.calculator)
  }, [])

  return (
    <Suspense fallback={<Loader />} fefr>
      <ThemeProvider theme={currentTheme}>
        <PageLayout>
          <Header />
          <Switch>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              component={HomePage}
            />
            <Route
              exact
              path={SETTINGS_PAGE_ROUTE}
              render={props => (
                <SettingsPage
                  currentTheme={currentTheme}
                  setTheme={setCurrentTheme}
                  {...props}
                />
              )}
            />
          </Switch>
        </PageLayout>
        <GlobalStyles />
      </ThemeProvider>
    </Suspense>
  )
}

const mapDispatchToProps = {
  getLocalStorage,
}

export default connect(
  null,
  mapDispatchToProps,
)(Application)
