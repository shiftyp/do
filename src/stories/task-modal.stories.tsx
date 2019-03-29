import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskModal } from '../components/task-modal';
import { TaskStatus } from '../components/types';

const { add } = storiesOf('Task Modal', module);

add('Create', () => <TaskModal open={true} />);
add('Edit', () => (
  <TaskModal
    task={{
      title: 'Basic Task',
      description: 'A basic task.',
      status: TaskStatus.BACKLOG,
      due: new Date(),
      completed: null,
    }}
    open={true}
  />
));
