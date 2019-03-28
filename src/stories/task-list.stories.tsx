import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskList } from '../components/task-list';
import { Button } from '../components/button';
import { TaskStatus } from '../components/types';

const { add } = storiesOf('Task List', module);

add('Empty', () => <TaskList title="Complete" tasks={[]} />);

add('With Button', () => (
  <TaskList title="Complete" tasks={[]}>
    <Button label="Create Task" action={action('create task')} color="blue" />
  </TaskList>
));

add('With Tasks', () => (
  <TaskList
    title="Complete"
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
  >
    <Button label="Create Task" action={action('create task')} color="blue" />
  </TaskList>
));
