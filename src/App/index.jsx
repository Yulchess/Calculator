import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE,SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import { PageLayout } from '@/layouts'
import SettingsPage from '@/pages/Settings'

const HomePage = lazy(() => import('@/pages/Home'))

export default () => (
  <Suspense fallback={<Loader />}>
    <PageLayout>
    <Header />
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route exact path={SETTINGS_PAGE_ROUTE} component={SettingsPage} />
    </Switch>
    </PageLayout>
   
  </Suspense>
)
