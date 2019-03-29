import React from 'react';
import { Task } from '../types';
import { TaskForm } from './task-form';
import { Modal, ModalProps } from './modal';

import { TaskBoardActions } from './task-board';
import { isNew } from '../utils';

export type TaskModalProps = {
  task: Task;
  open: boolean;
  actions: TaskBoardActions;
};

export const TaskModal: React.SFC<TaskModalProps> = ({ task, open, actions }) => (
  <Modal title={!isNew(task) ? 'Edit Task' : 'Create Task'} open={open}>
    {open && <TaskForm task={task} actions={actions} />}
  </Modal>
);
