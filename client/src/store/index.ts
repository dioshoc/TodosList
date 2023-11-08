import { configureStore } from '@reduxjs/toolkit';

import { tasksApi } from '@store/tasksApi';

import taskReducer from './taskSlice';

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
  reducer: {
    taskReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
