import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { ITask } from '@/types/task';
import { useAddTaskMutation, useEditTaskMutation } from '@store/tasksApi';
import Button from '@ui/Button';
import Input from '@ui/Input';

export type ITaskModal = {
  task?: ITask;
};

type MyForm = {
  title: string;
  description: string;
};

export const TaskModal = ({ task }: ITaskModal) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<MyForm>({
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
    },
  });

  const [addTask] = useAddTaskMutation();
  const [editTask] = useEditTaskMutation();

  const submit: SubmitHandler<MyForm> = (data) => {
    if (task) {
      editTask({ ...data, id: task.id });
    } else {
      addTask(data).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-[600px] flex flex-col">
      <div className="flex flex-col gap-10 mb-10">
        <Input
          placeholder="Введите заголовок"
          label="Заголовок задачи"
          name="title"
          type="text"
          register={register}
          minLength={5}
          maxLength={30}
          required
          errors={!!errors.title}
        />
        <Input
          variant="textarea"
          name="description"
          placeholder="Введите описание задачи"
          label="Описание задачи"
          maxLength={300}
          register={register}
          errors={!!errors.description}
        />
      </div>

      <Button
        type="submit"
        className="font-bold h-[70px]">
        Сохранить
      </Button>
    </form>
  );
};
