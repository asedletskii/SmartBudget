import { DashboardCategory, DashboardGoal } from '@features/dashboard/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { dashboardMock } from '../api/dashboard.mock'

export const getDashboardGoals = createAsyncThunk<
  { goals: DashboardGoal[] },
  void,
  { rejectValue: 'cannotGetDashboardGoals' }
>('getDashboardGoals', async (_, { rejectWithValue }) => {
  try {
    const response = await dashboardMock.getDashboardData()

    return response
  } catch (e: any) {
    return rejectWithValue('cannotGetDashboardGoals')
  }
})

export const getDashboardCategories = createAsyncThunk<
  { categories: DashboardCategory[]; budgetTotalLimit: number },
  void,
  { rejectValue: 'cannotGetDashboardCategories' }
>('getDashboardCategories', async (_, { rejectWithValue }) => {
  try {
    const response = await dashboardMock.getDashboardCategories()

    return response
  } catch (e: any) {
    return rejectWithValue('cannotGetDashboardCategories')
  }
})
