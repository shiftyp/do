import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Board } from '../components/board';
import { TaskCard } from '../components/task-card';
import { TaskStatus } from '../components/types';

const { add } = storiesOf('Task Card', module);

add('Backlog task', () => (
  <TaskCard
    task={{
      title: 'Basic Task',
      description: 'A basic task.',
      status: TaskStatus.BACKLOG,
      due: new Date(),
      completed: null,
    }}
  />
));

add('In Progress task', () => (
  <TaskCard
    task={{
      title: 'Basic Task',
      description: 'A basic task.',
      status: TaskStatus.IN_PROGRESS,
      due: new Date(),
      completed: null,
    }}
  />
));

add('Completed task', () => (
  <TaskCard
    task={{
      title: 'Basic Task',
      description: 'A basic task.',
      status: TaskStatus.COMPLETED,
      due: new Date(),
      completed: new Date(),
    }}
  />
));
