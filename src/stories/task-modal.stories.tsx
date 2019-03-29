import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskModal } from '../components/task-modal';
import { TaskStatus } from '../components/types';
import { makeBasicTask } from './utils';

const { add } = storiesOf('Task Modal', module);

add('Create', () => <TaskModal open={true} />);
add('Edit', () => (
  <TaskModal task={makeBasicTask(TaskStatus.BACKLOG)} open={true} />
));
