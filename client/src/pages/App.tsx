import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAsyncActions } from '@/hooks/useActions';
import type { RootState } from '@/store';
import { EModalList } from '@/types/modalList';
import type { ITask } from '@/types/task';
import CirclePlusIcon from '@assets/icons/circlePlusIcon';
import Button from '@ui/Button';
import { Modal } from '@ui/Modal/Modal';
import Task from '@ui/Task';
import eventBus from '@utils/eventBus';

const classes = {
  title: 'font-bold text-8xl text-center mt-20 mb-32',
  main: 'flex flex-col items-center bg-blue-300 min-h-screen pb-32',
  shimmer:
    'flex justify-center items-center text-4xl text-gray-700 text-center mb-20 mt-16',
  taskList: 'bg-white w-5/6 p-6 rounded-3xl flex flex-col gap-5',
};

const App = () => {
  const { taskList } = useSelector((state: RootState) => state.taskReducer);
  const { fetchTasks } = useAsyncActions('taskSlice');

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTaskList = useMemo(() => {
    if (taskList.length) {
      return taskList.map((task: ITask) => (
        <Task
          id={task.id}
          key={task.id}
          title={task.title}
          description={task.description}
          type={task.type}
        />
      ));
    }

    return (
      <div className={classes.shimmer}>
        Создайте задачу
        <CirclePlusIcon className="ml-4" />
      </div>
    );
  }, [taskList]);

  const openModal = () => {
    eventBus.emit('openModal', { type: EModalList.CreateTask });
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>To-do List</h1>
      <section className={classes.taskList}>{renderTaskList}</section>
      <Button
        onClick={openModal}
        variant="text"
        className="absolute right-10 bottom-10">
        <CirclePlusIcon
          color="fill-blue-500"
          width={122}
          height={122}
        />
      </Button>
      <Modal />
    </main>
  );
};
export default App;
