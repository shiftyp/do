import React from 'react';

import { storiesOf } from '@storybook/react';

import { TaskCard } from '../components/task-card';
import { TaskStatus } from '../types';
import { makeBasicTask, taskBoardActions } from './utils';

const { add } = storiesOf('Task Components/Task Card', module);

add('Backlog task', () => (
  <TaskCard
    task={makeBasicTask(TaskStatus.BACKLOG)}
    actions={taskBoardActions}
  />
));

add('In Progress task', () => (
  <TaskCard
    task={makeBasicTask(TaskStatus.IN_PROGRESS)}
    actions={taskBoardActions}
  />
));

add('Completed task', () => (
  <TaskCard
    task={makeBasicTask(TaskStatus.COMPLETED)}
    actions={taskBoardActions}
  />
));
