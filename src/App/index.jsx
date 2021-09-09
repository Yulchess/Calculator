import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { getLocalStorageAction } from '@/actions/index'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import { ThemeContext } from '@/context/ThemeProvider'
import GlobalStyles from '@/globalStyles'
import { PageLayout } from '@/layouts'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

const Application = () => {
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem('redux-store'),
    )
    dispatch(getLocalStorageAction(data?.calculator))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
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
              component={SettingsPage}
            />
          </Switch>
        </PageLayout>
        <GlobalStyles />
      </Suspense>
    </ThemeProvider>
  )
}

export default Application
