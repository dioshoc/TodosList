import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ITask, ITaskReq } from '@/types/task';
import { ETaskType } from '@/types/task';

export const tasksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (build) => ({
    addTask: build.mutation<ITask, ITaskReq>({
      invalidatesTags: [{ id: 'LIST', type: 'Tasks' }],
      query: (body) => ({
        body: {
          ...body,
          status: ETaskType[ETaskType.default],
        },
        method: 'POST',
        url: 'addTask',
      }),
    }),
    editTask: build.mutation<ITask, ITaskReq>({
      invalidatesTags: [{ id: 'LIST', type: 'Tasks' }],
      query: (body) => ({
        body,
        method: 'PATCH',
        url: `editTask/${body.id}`,
      }),
    }),
    getTasks: build.query<ITask[], void>({
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ id }: { id: number }) => ({
              id,
              type: 'Tasks' as const,
            })),
            { id: 'LIST', type: 'Tasks' },
          ];
        }
        return [{ id: 'LIST', type: 'Tasks' }];
      },
      query: () => `tasks`,
    }),
  }),
  reducerPath: 'tasksApi',
  tagTypes: ['Tasks'],
});

export const { useAddTaskMutation, useEditTaskMutation, useGetTasksQuery } =
  tasksApi;
