import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskBoard } from '../components/task-board';
import { TaskStatus, Task } from '../components/types';
import { manyTasks, makeBasicTask, basicTasks } from './utils';

const { add } = storiesOf('Task Components/Task Board', module);

add('Empty', () => <TaskBoard tasks={[]} />);

add('With Tasks', () => <TaskBoard tasks={basicTasks} />);

add('With Many Tasks', () => <TaskBoard tasks={manyTasks} />);

add('With Create Modal', () => <TaskBoard tasks={manyTasks} showModal={true} />);

add('With Edit Modal', () => (
  <TaskBoard
    tasks={manyTasks}
    showModal={true}
    editingTask={makeBasicTask(TaskStatus.BACKLOG)}
  />
));
