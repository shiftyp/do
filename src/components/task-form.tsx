import React from 'react';

import { Button } from './button';
import { Task } from './types';

import './task-form.css';

export type TaskFormProps = {
  task?: Task;
};

const TaskFormButtonBar: React.SFC<TaskFormProps> = ({ task }) => (
  <div className="task-form__button-bar">
    <div className="task-form__button-bar__left">
      {task && <Button label="Delete" color="red" action={() => {}} />}
    </div>
    <div className="task-form__button-bar__right">
      <Button label="Cancel" color="white" action={() => {}} />
      <Button label={task ? 'Save' : 'Create'} color="purple" action={() => {}} />
    </div>
  </div>
);

export const TaskForm: React.SFC<TaskFormProps> = ({ task }) => {
  const {
    title = '',
    description = '',
    due = new Date(),
  } = task || {};

  return (
    <form className="task-form">
      <input name="title" type="text" placeholder="Title" defaultValue={title} />
      <textarea placeholder="Description (optional)" defaultValue={description} />
      <input name="due" type="date" placeholder="Due On" defaultValue={due.toISOString().substr(0, 10)} />
      <TaskFormButtonBar task={task} />
    </form>
  );
};
