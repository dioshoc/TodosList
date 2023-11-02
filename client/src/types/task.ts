export type ITask = {
  id: number;
  title: string;
  description?: string;
  type?: ETaskType;
};

export type ITaskReq = {
  id?: number;
  title: string;
  description?: string;
  type?: ETaskType;
};

export enum ETaskType {
  'default',
  'check',
  'error',
}
