import { connect } from 'react-redux';

import { actions } from './redux/actions';

import { TaskBoard, TaskBoardProps } from './components/task-board';
import { StoreShape } from './redux/types';
import { Dispatch, bindActionCreators } from 'redux';

import './app.css';

const mapStateToProps = (state: StoreShape): Partial<TaskBoardProps> => ({
  tasks: Object.values(state.tasks).filter(val => !!val),
  showModal: state.modalVisible,
  editingTask: state.editTask,
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<TaskBoardProps> => ({
  actions: bindActionCreators(actions, dispatch),
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
