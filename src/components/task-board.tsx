import React from 'react';

import { Task, TaskStatus, TaskId } from '../types';

import { Button } from './button';
import { TaskList } from './task-list';
import { TaskModal } from './task-modal';

import './task-board.css';

export type TaskBoardActions = {
  createOrUpdateTask: (task: Task) => any;
  deleteTask: (id: TaskId) => any;
  showCreateModal: (status: TaskStatus) => any;
  showEditModal: (task: Task) => any;
  closeModal: () => any;
  setTaskStatus: (task: Task, status: TaskStatus) => any;
};

export type TaskBoardProps = {
  tasks: Task[];
  editingTask: Task;
  showModal?: boolean;
  actions: TaskBoardActions;
};

const CompletedList = ({ tasks, actions }: TaskBoardProps) => (
  <TaskList
    actions={actions}
    title="Completed"
    tasks={tasks.filter(task => task.status == TaskStatus.COMPLETED)}
  />
);

const InProgressList = ({ tasks, actions }: TaskBoardProps) => (
  <TaskList
    actions={actions}
    title="In Progress"
    tasks={tasks.filter(task => task.status == TaskStatus.IN_PROGRESS)}
  >
    <Button
      label="Create Task"
      color="purple"
      action={() => {
        actions.showCreateModal(TaskStatus.IN_PROGRESS);
      }}
    />
  </TaskList>
);

const BacklogList = ({ tasks, actions }: TaskBoardProps) => (
  <TaskList
    actions={actions}
    title="Backlog"
    tasks={tasks.filter(task => task.status == TaskStatus.BACKLOG)}
  >
    <Button
      label="Create Task"
      color="blue"
      action={() => {
        actions.showCreateModal(TaskStatus.BACKLOG);
      }}
    />
  </TaskList>
);

export const TaskBoard: React.SFC<TaskBoardProps> = props => (
  <div className="board">
    <BacklogList {...props} />
    <InProgressList {...props} />
    <CompletedList {...props} />
    <TaskModal
      open={props.showModal}
      task={props.editingTask}
      actions={props.actions}
    />
  </div>
);
