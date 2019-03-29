import React from 'react';

import { storiesOf } from '@storybook/react';

import { TaskForm } from '../components/task-form';
import { TaskStatus } from '../types';
import { makeBasicTask, taskBoardActions } from './utils';
import { makeEmptyTask } from '../utils';

const { add } = storiesOf('Task Components/Task Form', module);

add('Create', () => (
  <TaskForm
    task={makeEmptyTask()}
    actions={taskBoardActions}
  />
));
add('Edit', () => (
  <TaskForm
    actions={taskBoardActions}
    task={makeBasicTask(TaskStatus.BACKLOG)}
  />
));
