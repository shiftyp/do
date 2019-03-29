import { TaskStatus, Task } from "../components/types";

export const makeBasicTask = (status: TaskStatus): Task => ({
  title: 'Basic Task',
  description: 'A basic task.',
  status: status,
  due: new Date(),
  completed: status === TaskStatus.COMPLETED ? new Date() : undefined,
})

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