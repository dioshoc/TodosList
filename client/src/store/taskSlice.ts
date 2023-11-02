import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { useFetch } from '@/hooks/useFetch';
import type { ITask, ITaskReq } from '@/types/task';
import { ETaskType } from '@/types/task';
import eventBus from '@utils/eventBus';

export type ITaskSliceState = {
  error: any;
  status: boolean;
  taskList: ITask[];
};

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () =>
  useFetch('GET', 'http://localhost:5000/tasks')
);

const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, description }: ITaskReq) =>
    useFetch('POST', 'http://localhost:5000/addTask', {
      title,
      description,
      type: ETaskType[ETaskType.default],
    })
);

const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ id, title, description }: ITaskReq) =>
    useFetch('PATCH', `http://localhost:5000/editTask/${id}`, {
      title,
      description,
    })
);

const removeTask = createAsyncThunk('tasks/addTask', async (id: number) =>
  useFetch('DELETE', `http://localhost:5000/removeTask/${id}`)
);

const taskSlice = createSlice({
  name: 'tasks',
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
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
    builder.addCase(addTask.pending, (state) => {
      state.status = true;
    });
    builder.addCase(addTask.fulfilled, (state) => {
      state.status = false;
      eventBus.emit('closeModal');
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.status = false;
      state.error = action.payload;
    });
    builder.addCase(editTask.pending, (state) => {
      state.status = true;
    });
    builder.addCase(editTask.fulfilled, (state) => {
      state.status = false;
      eventBus.emit('closeModal');
    });
  },
  initialState: {
    error: null,
    status: false,
    taskList: [],
  } as ITaskSliceState,
  reducers: {
    checkTask: (state, action: PayloadAction<number>) => {
      const currentTask = state.taskList.find(
        (task) => (task.id = action.payload)
      );
      if (currentTask) {
        currentTask.type = ETaskType.check;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const taskSliceAction = taskSlice.actions;
export const taskSliceAsyncAction = {
  addTask,
  editTask,
  fetchTasks,
  removeTask,
};

export default taskSlice.reducer;
