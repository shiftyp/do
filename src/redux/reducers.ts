import {StoreShape, StandardAction, SimpleReducerMap } from "./types";
import { actionTypes } from "./actions";
import { Task, TaskStatus, TaskId } from "../types";
import { makeEmptyTask, isComplete, isNew } from "../utils";

const defaultState: StoreShape = {
  tasks: {},
  modalVisible: false,
  editTask: {
    title: '',
    description: '',
    status: TaskStatus.IN_PROGRESS,
    due: new Date(),
    completed: null,
  },
  nextTaskId: 0,
}

function wrapSimpleReducers(map: SimpleReducerMap) {
  return function(state: StoreShape = defaultState, action: StandardAction<any, any>) {
    const reducer = map[action.type];

    if (reducer) {
      return reducer(state, (action as any).payload);
    }
    
    return state;
  }
};

export const reducer = wrapSimpleReducers({
  [actionTypes.CreateOrUpdateTask]: (state, task: Task) => {
    let finalTask = task;
    let {nextTaskId} = state;

    if (isNew(finalTask)) {
      finalTask = {
        ...finalTask,
        id: nextTaskId++,
      }
    }

    if (isComplete(finalTask) && !finalTask.completed) {
      finalTask = {
        ...finalTask,
        completed: new Date(),
      };
    }

    return {
      ...state,
      tasks: {
        ...state.tasks,
        [finalTask.id]: finalTask,
      },
      nextTaskId,
    };
  },
  [actionTypes.DeleteTask]: (state, taskId: TaskId) => ({
    ...state,
    tasks: {
      ...state.tasks,
      [taskId]: null,
    }
  }),
  [actionTypes.ShowCreateModal]: (state: StoreShape, status: TaskStatus) => ({
    ...state,
    modalVisible: true,
    editTask: makeEmptyTask(status),
  }),
  [actionTypes.ShowEditModal]: (state, task: Task) => ({
    ...state,
    modalVisible: true,
    editTask: task,
  }),
  [actionTypes.CloseModal]: (state) => ({
    ...state,
    modalVisible: false,
    editTask: makeEmptyTask(),
  })
});

