import React from 'react';

import { Button } from './button';
import { Task } from '../types';

import './task-form.css';
import { TaskBoardActions } from './task-board';
import { isNew, utcShiftDate, unUtcShiftDate } from '../utils';

export type TaskFormProps = {
  task: Task;
  actions: TaskBoardActions;
};

export class TaskForm extends React.Component<TaskFormProps> {
  private form: HTMLFormElement;

  submit = () => {
    const { actions, task } = this.props;

    actions.createOrUpdateTask({
      ...task,
      title: this.form._title.value,
      description: this.form.description.value,
      due: unUtcShiftDate(this.form.due.valueAsDate)
    });
    actions.closeModal();
  };

  renderButtonBar() {
    const { task, actions } = this.props;

    return (
      <div className="task-form__button-bar">
        <div className="task-form__button-bar__left">
          {!isNew(task) && (
            <Button
              label="Delete"
              color="red"
              action={() => {
                actions.deleteTask(task.id);
                actions.closeModal();
              }}
            />
          )}
        </div>
        <div className="task-form__button-bar__right">
          <Button
            label="Cancel"
            color="white"
            action={() => {
              actions.closeModal();
            }}
          />
          <Button
            label={!isNew(task) ? 'Save' : 'Create'}
            color="purple"
            action={this.submit}
          />
        </div>
      </div>
    );
  }
  render() {
    const { task, actions } = this.props;

    return (
      <form
        className="task-form"
        ref={ref => {
          if (ref) {
            this.form = ref;
          }
        }}
        onSubmit={(event) => {
          this.submit();
          event.preventDefault();
        }}
      >
        <input
          name="_title"
          type="text"
          placeholder="Title"
          defaultValue={task.title}
          required={true}
        />
        <textarea
          name="description"
          placeholder="Description (optional)"
          defaultValue={task.description}
        />
        <input
          name="due"
          type="date"
          placeholder="Due On"
          defaultValue={utcShiftDate(task.due).toISOString().substr(0, 10)}
        />
        {this.renderButtonBar()}
      </form>
    );
  }
}
