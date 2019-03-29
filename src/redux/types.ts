import { Task, TaskId } from "../types";

export type StoreShape = {
  nextTaskId: TaskId,
  tasks: Record<TaskId, Task>;
  editTask: Task;
  modalVisible: boolean;
};

export type StandardAction<Type extends string, Payload> = Payload extends null
  ? { type: Type }
  : {
      type: Type;
      payload: Payload;
    };

export type SimpleActionCreator<
  Type extends string,
  Payload
> = Payload extends null
  ? () => StandardAction<Type, null>
  : (payload: Payload) => StandardAction<Type, Payload>;


export type SimpleReducer<Payload> = (state: StoreShape, payload: Payload) => StoreShape;

export type SimpleReducerMap = {
  [key: string]: SimpleReducer<any>;
};