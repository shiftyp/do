import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskCard } from '../components/task-card';
import { TaskStatus } from '../components/types';
import { makeBasicTask } from './utils';

const { add } = storiesOf('Task Card', module);

add('Backlog task', () => (
  <TaskCard task={makeBasicTask(TaskStatus.BACKLOG)} />
));

add('In Progress task', () => (
  <TaskCard task={makeBasicTask(TaskStatus.IN_PROGRESS)} />
));

add('Completed task', () => (
  <TaskCard task={makeBasicTask(TaskStatus.COMPLETED)} />
));
