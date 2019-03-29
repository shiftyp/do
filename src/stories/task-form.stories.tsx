import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskForm } from '../components/task-form';
import { TaskStatus } from '../components/types';

const { add } = storiesOf('Task Form', module);

add('Create', () => (
  <TaskForm />
));
add('Edit', () => (
  <TaskForm task={{
    title: 'Basic Task',
    description: 'A basic task.',
    status: TaskStatus.BACKLOG,
    due: new Date(),
    completed: null,
  }}/>
));
