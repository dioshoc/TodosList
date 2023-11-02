import type { EModalList } from '@/types/modalList';
import type { ITaskModal } from '@components/Modals/TaskModal';

export type IOpenModal = {
  arg?: ITaskModal;
  type: EModalList;
};

type EventMap = {
  closeModal: () => void;
  openModal: ({ arg, type }: IOpenModal) => void;
};

class TypedEventEmitter<
  Events extends Record<keyof Events, (...args: any[]) => any>,
> {
  private eventListeners: Partial<
    Record<keyof Events, Array<(...args: any[]) => any>>
  > = {};

  public on<Event extends keyof Events>(
    event: Event,
    listener: Events[Event]
  ): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event]?.push(listener);
  }

  public emit<Event extends keyof Events>(
    event: Event,
    ...args: Parameters<Events[Event]>
  ): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      listeners.forEach((listener) => listener?.(...args));
    }
  }

  public off<Event extends keyof Events>(
    event: Event,
    listener: Events[Event]
  ): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}

const eventBus = new TypedEventEmitter<EventMap>();

export default eventBus;
