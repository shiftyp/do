import React from 'react';
import { Task } from './types';
import { TaskForm } from './task-form';
import { Modal, ModalProps } from './modal';

export type TaskModalProps = {
  task?: Task;
  open: boolean;
};

export const TaskModal: React.SFC<TaskModalProps> = ({ task, open }) => (
  <Modal title={task ? 'Edit Task' : 'Create Task'} open={open}>
    <TaskForm task={task} />
  </Modal>
);
