import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskForm } from '../components/task-form';
import { TaskStatus } from '../components/types';
import { makeBasicTask } from './utils';

const { add } = storiesOf('Task Form', module);

add('Create', () => <TaskForm />);
add('Edit', () => <TaskForm task={makeBasicTask(TaskStatus.BACKLOG)} />);
