import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TaskList } from '../components/task-list';
import { Button } from '../components/button';
import { basicTasks, manyTasks, taskBoardActions } from './utils';

const { add } = storiesOf('Task Components/Task List', module);

add('Empty', () => (
  <TaskList title="Complete" tasks={[]} actions={taskBoardActions} />
));

add('With Button', () => (
  <TaskList title="Complete" tasks={[]} actions={taskBoardActions}>
    <Button label="Create Task" action={action('create task')} color="blue" />
  </TaskList>
));

add('With Tasks', () => (
  <TaskList title="Complete" tasks={basicTasks} actions={taskBoardActions}>
    <Button label="Create Task" action={action('create task')} color="blue" />
  </TaskList>
));

add('With Many Tasks', () => (
  <TaskList title="Complete" tasks={manyTasks} actions={taskBoardActions}>
    <Button label="Create Task" action={action('create task')} color="blue" />
  </TaskList>
));
