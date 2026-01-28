import { DashboardSliceReducers, DashboardSliceState } from '@features/dashboard/types'
import { createSlice, WithSlice } from '@reduxjs/toolkit'
import { rootReducer } from '@shared/store'
import { getDashboardInitialState } from './dashboard.state'
import { getDashboardCategories, getDashboardGoals } from './dashboard.thunks'

export const dashboardSlice = createSlice<
  DashboardSliceState,
  DashboardSliceReducers,
  'dashboard',
  any
>({
  name: 'dashboard',
  initialState: getDashboardInitialState(),
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDashboardGoals.fulfilled, (state, { payload }) => {
        state.goals = payload.goals
        state.isLoading = false
      })

      .addCase(getDashboardGoals.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(getDashboardGoals.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getDashboardCategories.fulfilled, (state, { payload }) => {
        state.budgetLimit = payload.budgetTotalLimit
        state.categories = payload.categories
        state.isLoading = false
      })

      .addCase(getDashboardCategories.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(getDashboardCategories.pending, (state) => {
        state.isLoading = true
      })
  },
})

declare module '@shared/store' {
  interface AppLazySlices extends WithSlice<typeof dashboardSlice> {}
}

dashboardSlice.injectInto(rootReducer)
