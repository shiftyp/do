import React from 'react';
import { Card } from './card';
import { Button } from './button';

import './board.css';
import { TaskList } from './task-list';
import { Task, TaskStatus } from './types';

export type BoardComponentProps = { tasks: Task[] };

const CompletedList = ({ tasks }: BoardComponentProps) => (
  <TaskList
    title="Completed"
    tasks={tasks.filter(task => task.status == TaskStatus.COMPLETED)}
  />
);

const InProgressList = ({ tasks }: BoardComponentProps) => (
  <TaskList
    title="In Progress"
    tasks={tasks.filter(task => task.status == TaskStatus.IN_PROGRESS)}
  >
    <Button label="Create Task" color="purple" action={() => {}} />
  </TaskList>
);

const BacklogList = ({ tasks }: BoardComponentProps) => (
  <TaskList
    title="In Progress"
    tasks={tasks.filter(task => task.status == TaskStatus.BACKLOG)}
  >
    <Button label="Create Task" color="blue" action={() => {}} />
  </TaskList>
);

export const Board: React.SFC<BoardComponentProps> = ({ tasks }) => (
  <div className="board">
    <BacklogList tasks={tasks} />
    <InProgressList tasks={tasks} />
    <CompletedList tasks={tasks} />
  </div>
);
