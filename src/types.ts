import { number } from "prop-types";

export enum TaskStatus {
  BACKLOG,
  IN_PROGRESS,
  COMPLETED,
}

export type TaskId = number;

export type Task = {
  readonly id?: TaskId;
  readonly title: string;
  readonly status: TaskStatus;
  readonly description: string;
  readonly due: Date;
  readonly completed: Date | null;
};
