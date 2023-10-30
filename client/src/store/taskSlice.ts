import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { ITask } from '@/types/task';
import { ETaskType } from '@/types/task';

export type ITaskSliceState = {
  error: any;
  status: boolean;
  taskList: ITask[];
};

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () =>
  fetch('http://localhost:5000/tasks', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (res) => res.json())
    .catch((err) => {
      console.log(err);
      throw err;
    })
);

const taskSlice = createSlice({
  name: 'tasks',
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = false;
      state.taskList = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = false;
      state.error = action.payload;
    });
  },
  initialState: {
    error: null,
    status: false,
    taskList: [],
  } as ITaskSliceState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.taskList.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        type: ETaskType.default,
      });
    },
    checkTask: (state, action: PayloadAction<number>) => {
      const currentTask = state.taskList.find(
        (task) => (task.id = action.payload)
      );
      if (currentTask) {
        currentTask.type = ETaskType.check;
      }
    },
    editTask: () => {},
    removeTask: (state, action: PayloadAction<number>) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const taskSliceAction = taskSlice.actions;
export const taskSliceAsyncAction = {
  fetchTasks,
};

export default taskSlice.reducer;
