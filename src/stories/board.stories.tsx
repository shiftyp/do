import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Board } from '../components/board';
import { TaskStatus } from '../components/types';

const { add } = storiesOf('Board', module);

add('it works', () => (
  <Board
    tasks={[
      {
        title: 'Basic Task',
        description: 'A basic task.',
        status: TaskStatus.BACKLOG,
        due: new Date(),
        completed: null,
      },
      {
        title: 'Basic Task',
        description: 'A basic task.',
        status: TaskStatus.IN_PROGRESS,
        due: new Date(),
        completed: null,
      },
      {
        title: 'Basic Task',
        description: 'A basic task.',
        status: TaskStatus.COMPLETED,
        due: new Date(),
        completed: new Date(),
      },
    ]}
  />
));