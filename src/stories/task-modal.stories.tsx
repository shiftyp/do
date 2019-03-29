import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskModal } from '../components/task-modal';
import { TaskStatus } from '../types';
import { makeBasicTask } from './utils';

const { add } = storiesOf('Task Components/Task Modal', module);

add('Create', () => <TaskModal open={true} />);
add('Edit', () => (
  <TaskModal task={makeBasicTask(TaskStatus.BACKLOG)} open={true} />
));
