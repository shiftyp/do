import React from 'react';
import { Task, TaskStatus } from './types';
import { Button } from './button';
import { Card } from './card';

import './task-card.css';

export type TaskCardProps = {
  task: Task;
};

const TaskCardButtons: React.SFC<TaskCardProps> = ({ task }) => {
  switch (task.status) {
    case TaskStatus.BACKLOG:
      return <Button label="Start" color="purple" action={() => {}} />;
    case TaskStatus.IN_PROGRESS:
      return (
        <React.Fragment>
          <Button label="Backlog" color="blue" action={() => {}} />
          <Button label="Complete" color="green" action={() => {}} />
        </React.Fragment>
      );
    case TaskStatus.COMPLETED:
      return <Button label="Undo" color="blue" action={() => {}} />;
  }
};

const TaskCardDate: React.SFC<TaskCardProps> = ({ task }) => {
  if (task.status === TaskStatus.COMPLETED) {
    return (
      <span className="task-card__date completed">
        Completed {task.completed.toDateString()}
      </span>
    );
  } else {
    return (
      <span className="task-card__date">Due {task.due.toDateString()}</span>
    );
  }
};

export const TaskCard: React.SFC<TaskCardProps> = ({ task }) => {
  const buttons = <TaskCardButtons task={task} />;
  const className = `task-card ${task.completed ? 'completed' : ''}`;

  return (
    <Card title={task.title} buttons={buttons} className={className}>
      <p>{task.description}</p>
      <TaskCardDate task={task} />
    </Card>
  );
};
