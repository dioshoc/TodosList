import { useEffect, useState } from 'react';

import { EModalList } from '@/types/modalList';
import CloseIcon from '@assets/icons/closeIcon';
import type { ITaskModal } from '@components/Modals/TaskModal';
import { TaskModal } from '@components/Modals/TaskModal';
import Button from '@ui/Button';
import type { IOpenModal } from '@utils/eventBus';
import eventBus from '@utils/eventBus';

export const Modal = () => {
  const [modelType, setModelType] = useState<EModalList | null>(null);
  const [argument, setArgument] = useState<ITaskModal | null>(null);

  const openModal = ({ arg, type }: IOpenModal) => {
    setModelType(type);
    setArgument(arg || null);
  };

  const closeModal = () => {
    setModelType(null);
  };

  useEffect(() => {
    eventBus.on('openModal', openModal);
    eventBus.on('closeModal', closeModal);
    return () => {
      eventBus.off('openModal', openModal);
      eventBus.off('closeModal', closeModal);
    };
  }, []);

  const modelComponent = {
    [EModalList.CreateTask]: <TaskModal {...argument} />,
    [EModalList.EditTask]: <TaskModal {...argument} />,
  };

  return modelType ? (
    <div className="h-full w-full fixed flex m-auto">
      <Button
        variant="text"
        className="h-full w-full bg-black opacity-30 fixed z-40"
        onClick={closeModal}
      />
      <div className="bg-white w-fit min-w-2em min-h-2em relative p-14 rounded-3xl m-auto z-50">
        <Button
          variant="text"
          className="absolute top-[-40px] right-[-80px] group"
          onClick={closeModal}>
          <CloseIcon
            color="fill-gray-500"
            className="group-hover:fill-black group-hover:scale-125 transition-all"
          />
        </Button>
        {modelComponent[modelType]}
      </div>
    </div>
  ) : null;
};
