import React, { useCallback } from 'react';

import { useActions } from '@/hooks/useActions';
import { EModalList } from '@/types/modalList';
import type { ITask } from '@/types/task';
import { ETaskType } from '@/types/task';
import CheckIcon from '@assets/icons/checkIcon';
import CloseIcon from '@assets/icons/closeIcon';
import EditIcon from '@assets/icons/editIcon';
import Button from '@ui/Button';
import eventBus from '@utils/eventBus';

const classes = {
  title: 'font-medium',
  task: {
    common:
      'py-5 px-8 rounded-2xl hover:bg-blue-300 group-hover:bg-blue-300 transition-colors text-[32px] group/task flex justify-between items-center',
    [ETaskType.default]: 'bg-gray-500',
    [ETaskType.check]: 'bg-green-200',
    [ETaskType.error]: 'bg-red-100',
  },
  taskAction:
    'flex flex-row gap-7 opacity-0 transition-opacity pointer-events-none group-hover/task:opacity-100 group-hover/task:pointer-events-auto',
};

const Task = ({
  id,
  title = '',
  description = '',
  type = ETaskType.default,
}: ITask) => {
  const { checkTask, removeTask } = useActions('taskSlice');

  const editTask = useCallback((id: number) => {
    eventBus.emit('openModal', {
      arg: {
        task: {
          id,
          title,
          description,
        },
      },
      type: EModalList.EditTask,
    });
  }, []);

  const Buttons = [
    type !== ETaskType.check && {
      action: () => checkTask(id),
      icon: CheckIcon,
    },
    {
      action: editTask,
      icon: EditIcon,
    },
    {
      action: () => removeTask(id),
      icon: CloseIcon,
    },
  ].filter(Boolean);

  return (
    <article className={`${classes.task.common} ${classes.task[type]}`}>
      <section>
        <h4 className={classes.title}>{title}</h4>
        <p>{description}</p>
      </section>
      <section className={classes.taskAction}>
        {Buttons.map(({ action, icon: Icon }) => (
          <Button
            key={Icon.name}
            className="w-14 h-14 flex items-center justify-center group"
            onClick={() => action(id)}
            variant="text">
            <Icon className={'group-hover:fill-black'} />
          </Button>
        ))}
      </section>
    </article>
  );
};

export default Task;
