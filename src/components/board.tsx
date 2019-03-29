import React from 'react';

import { Task, TaskStatus } from './types';

import { Button } from './button';
import { TaskList } from './task-list';
import { TaskModal } from './task-modal';

import './board.css';

export type BoardComponentProps = { tasks: Task[]; editingTask?: Task, showModal?: boolean };

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

export const Board: React.SFC<BoardComponentProps> = ({ tasks, showModal, editingTask }) => (
  <div className="board">
    <BacklogList tasks={tasks} />
    <InProgressList tasks={tasks} />
    <CompletedList tasks={tasks} />
    <TaskModal open={showModal} task={editingTask} />
  </div>
);
