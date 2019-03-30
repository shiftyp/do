import React from 'react';

import { storiesOf } from '@storybook/react';

import { TaskBoard } from '../components/task-board';
import { TaskStatus, Task } from '../types';
import {
  manyTasks,
  makeBasicTask,
  basicTasks,
  taskBoardActions,
} from './utils';
import { makeEmptyTask } from '../utils';

const { add } = storiesOf('Task Components/Task Board', module);

add('Empty', () => (
  <TaskBoard
    editingTask={makeEmptyTask()}
    tasks={[]}
    actions={taskBoardActions}
  />
));

add('With Tasks', () => (
  <TaskBoard
    editingTask={makeEmptyTask()}
    tasks={basicTasks}
    actions={taskBoardActions}
  />
));

add('With Many Tasks', () => (
  <TaskBoard
    editingTask={makeEmptyTask()}
    tasks={manyTasks}
    actions={taskBoardActions}
  />
));

add('With Create Modal', () => (
  <TaskBoard
    editingTask={makeEmptyTask()}
    tasks={manyTasks}
    showModal={true}
    actions={taskBoardActions}
  />
));

add('With Edit Modal', () => (
  <TaskBoard
    tasks={manyTasks}
    showModal={true}
    editingTask={makeBasicTask(TaskStatus.BACKLOG)}
    actions={taskBoardActions}
  />
));
