import React from 'react';

import { storiesOf } from '@storybook/react';

import { TaskModal } from '../components/task-modal';
import { TaskStatus } from '../types';
import { makeBasicTask, taskBoardActions } from './utils';
import { makeEmptyTask } from '../utils';

const { add } = storiesOf('Task Components/Task Modal', module);

add('Create', () => <TaskModal task={makeEmptyTask()} open={true} actions={taskBoardActions} />);
add('Edit', () => (
  <TaskModal task={makeBasicTask(TaskStatus.BACKLOG)} open={true} actions={taskBoardActions}/>
));
