import React from 'react';

import { Task } from './types';
import { TaskCard } from './task-card';
import { Card } from './card';

import './task-list.css';

export type TaskListProps = {
  title: string;
  tasks: Task[];
};

export const TaskList: React.SFC<TaskListProps> = ({
  title,
  tasks,
  children,
}) => (
  <Card title={title} buttons={children} className="task-list">
    {tasks.map(task => (
      <TaskCard task={task} />
    ))}
  </Card>
);
