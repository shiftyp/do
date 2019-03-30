import { StandardAction, SimpleActionCreator } from './types';
import { Task, TaskId, TaskStatus } from '../types';

function createStandardAction<Type extends string, Payload>(
  type: Type,
  payload: Payload
): StandardAction<Type, Payload> {
  return {
    type,
    payload,
  } as StandardAction<Type, Payload>;
}

function createSimpleActionCreator<Type extends string, Payload>(
  type: Type
): SimpleActionCreator<Type, Payload> {
  return ((payload: Payload) =>
    createStandardAction(type, payload)) as SimpleActionCreator<Type, Payload>;
}

const CreateOrUpdateTask = 'CreateOrUpdateTask';
const createOrUpdateTask = createSimpleActionCreator<
  typeof CreateOrUpdateTask,
  Task
>(CreateOrUpdateTask);

const DeleteTask = 'DeleteTask';
const deleteTask = createSimpleActionCreator<typeof DeleteTask, TaskId>(
  DeleteTask
);

const ShowCreateModal = 'ShowCreateModal';
const showCreateModal = createSimpleActionCreator<
  typeof ShowCreateModal,
  TaskStatus
>(ShowCreateModal);

const ShowEditModal = 'ShowEditModal';
const showEditModal = createSimpleActionCreator<typeof ShowEditModal, null>(
  ShowEditModal
);

const CloseModal = 'CloseModal';
const closeModal = createSimpleActionCreator<typeof CloseModal, null>(
  CloseModal
);

const setTaskStatus = (task: Task, status: TaskStatus) =>
  createOrUpdateTask({
    ...task,
    status,
    completed: null,
  });

export const actionTypes = {
  CreateOrUpdateTask,
  DeleteTask,
  ShowCreateModal,
  ShowEditModal,
  CloseModal,
};

export const actions = {
  createOrUpdateTask,
  deleteTask,
  showCreateModal,
  showEditModal,
  closeModal,
  setTaskStatus,
};
