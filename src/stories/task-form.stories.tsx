import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskForm } from '../components/task-form';
import { TaskStatus } from '../types';
import { makeBasicTask } from './utils';

const { add } = storiesOf('Task Components/Task Form', module);

add('Create', () => <TaskForm />);
add('Edit', () => <TaskForm task={makeBasicTask(TaskStatus.BACKLOG)} />);
