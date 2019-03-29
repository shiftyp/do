import React from 'react';

import { Task } from '../types';
import { TaskCard } from './task-card';
import { Card } from './card';

import './task-list.css';
import { TaskBoardActions } from './task-board';

export type TaskListProps = {
  title: string;
  tasks: Task[];
  actions: TaskBoardActions;
};

export const TaskList: React.SFC<TaskListProps> = ({
  title,
  tasks,
  actions,
  children,
}) => (
  <Card title={title} buttons={children} className="task-list">
    {tasks.map(task => (
      <TaskCard actions={actions} task={task} />
    ))}
  </Card>
);
