import { Task, TaskStatus } from './types';

export const makeEmptyTask = (
  status: TaskStatus = TaskStatus.IN_PROGRESS
): Task => ({
  title: '',
  description: '',
  status: status,
  due: new Date(),
  completed: null,
});

export const isNew = (task: Task) => task.id === undefined;
export const isComplete = (task: Task) => task.status === TaskStatus.COMPLETED;

export const formatDate = (date: Date) => date.toLocaleDateString();
