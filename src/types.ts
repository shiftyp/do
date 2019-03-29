export enum TaskStatus {
  BACKLOG,
  IN_PROGRESS,
  COMPLETED,
}

export type Task = {
  id?: number;
  title: string;
  status: TaskStatus;
  description: string;
  due: Date;
  completed: Date | null;
};
