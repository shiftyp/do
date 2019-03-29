
import {action} from '@storybook/addon-actions';

import { TaskStatus, Task } from "../types";
import { TaskBoardActions } from '../components/task-board';

export const makeBasicTask = (status: TaskStatus): Task => ({
  id: 0,
  title: 'Basic Task',
  description: 'A basic task.',
  status: status,
  due: new Date(),
  completed: status === TaskStatus.COMPLETED ? new Date() : undefined,
});

export const makeBasicTasks = (): Task[] => [
  makeBasicTask(TaskStatus.BACKLOG),
  makeBasicTask(TaskStatus.IN_PROGRESS),
  makeBasicTask(TaskStatus.COMPLETED),
];

export const basicTasks = makeBasicTasks();

export const manyTasks = [
  ...makeBasicTasks(),
  ...makeBasicTasks(),
  ...makeBasicTasks(),
  ...makeBasicTasks(),
  ...makeBasicTasks(),
  ...makeBasicTasks(),
  ...makeBasicTasks(),
];

export const taskBoardActions: TaskBoardActions = {
  createOrUpdateTask: action('createOrUpdateTask'),
  deleteTask: action('deleteTask'),
  showCreateModal: action('showCreateModal'),
  showEditModal: action('showEditModal'),
  closeModal: action('closeModal'),
  setTaskStatus: action('setTaskStatus'),
};