import React from 'react';

import { Task, TaskStatus, TaskId } from '../types';

import { Button } from './button';
import { TaskList } from './task-list';
import { TaskModal } from './task-modal';

import './task-board.css';
import { actions } from '../redux/actions';

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
    title="In Progress"
    tasks={tasks.filter(task => task.status == TaskStatus.BACKLOG)}
  >
    <Button label="Create Task" color="blue" action={() => {
      actions.showCreateModal(TaskStatus.BACKLOG);
    }} />
  </TaskList>
);

export const TaskBoard: React.SFC<TaskBoardProps> = ({
  tasks,
  showModal,
  editingTask,
  actions,
}) => (
  <div className="board">
    <BacklogList tasks={tasks} actions={actions} editingTask={editingTask} />
    <InProgressList tasks={tasks} actions={actions} editingTask={editingTask} />
    <CompletedList tasks={tasks} actions={actions} editingTask={editingTask} />
    <TaskModal open={showModal} task={editingTask} actions={actions} />
  </div>
);
