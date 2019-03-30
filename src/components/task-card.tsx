import React from 'react';
import { Task, TaskStatus } from '../types';
import { Button } from './button';
import { Card } from './card';

import './task-card.css';
import { TaskBoardActions } from './task-board';
import { isComplete, formatDate } from '../utils';

export type TaskCardProps = {
  task: Task;
  actions: TaskBoardActions;
};

const TaskCardButtons: React.SFC<TaskCardProps> = ({ task, actions }) => {
  switch (task.status) {
    case TaskStatus.BACKLOG:
      return (
        <Button
          label="Start"
          color="purple"
          action={() => {
            actions.setTaskStatus(task, TaskStatus.IN_PROGRESS);
          }}
        />
      );
    case TaskStatus.IN_PROGRESS:
      return (
        <React.Fragment>
          <Button
            label="Backlog"
            color="blue"
            action={() => {
              actions.setTaskStatus(task, TaskStatus.BACKLOG);
            }}
          />
          <Button
            label="Complete"
            color="green"
            action={() => {
              actions.setTaskStatus(task, TaskStatus.COMPLETED);
            }}
          />
        </React.Fragment>
      );
    case TaskStatus.COMPLETED:
      return (
        <Button
          label="Undo"
          color="blue"
          action={() => {
            actions.setTaskStatus(task, TaskStatus.IN_PROGRESS);
          }}
        />
      );
  }
};

const TaskCardDate: React.SFC<TaskCardProps> = ({ task }) => {
  if (isComplete(task)) {
    return (
      <span className="task-card__date completed">
        Completed {formatDate(task.completed)}
      </span>
    );
  } else {
    return <span className="task-card__date">Due {formatDate(task.due)}</span>;
  }
};

export const TaskCard: React.SFC<TaskCardProps> = ({ task, actions }) => {
  const buttons = <TaskCardButtons task={task} actions={actions} />;
  const className = `task-card ${isComplete(task) ? 'completed' : ''}`;

  return (
    <Card
      onClick={() => {
        actions.showEditModal(task);
      }}
      title={task.title}
      buttons={buttons}
      className={className}
    >
      <p className="task-card__description">{task.description}</p>
      <TaskCardDate task={task} actions={actions} />
    </Card>
  );
};
