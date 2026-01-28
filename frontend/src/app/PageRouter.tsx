import { budgetRoutes } from '@features/budget/routes'
import { dashboardRoutes } from '@features/dashboard/routes'
import { settingsRoutes } from '@features/settings/routes'
import { transactionsRoutes } from '@features/transactions/routes'
import { authRoutes } from '@shared/screens'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { goalsRoutes } from 'src/features/goals/routes'

export const PageRouter = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<Navigate to="/main" replace />} />

      <Route path="/">
        {authRoutes.pages}

        {dashboardRoutes.pages}

        {transactionsRoutes.pages}

        {goalsRoutes.pages}

        {settingsRoutes.pages}

        {budgetRoutes.pages}
      </Route>
    </Routes>
  )
}
