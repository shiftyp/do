import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Board } from '../components/board';
import { TaskStatus, Task } from '../components/types';
import { manyTasks, makeBasicTask, basicTasks } from './utils';

const { add } = storiesOf('Board', module);

add('Empty', () => <Board tasks={[]} />);

add('With Tasks', () => <Board tasks={basicTasks} />);

add('With Many Tasks', () => <Board tasks={manyTasks} />);

add('With Create Modal', () => <Board tasks={manyTasks} showModal={true} />);

add('With Edit Modal', () => (
  <Board
    tasks={manyTasks}
    showModal={true}
    editingTask={makeBasicTask(TaskStatus.BACKLOG)}
  />
));
