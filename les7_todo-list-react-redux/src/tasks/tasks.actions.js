import { tasksListSelector } from "./tasks.selectors";
import * as tasksGateway from "./tasksGateway";

export const TASKS_LIST_RECEIVED = "TASKS_LIST_RECEIVED";

export const tasksListReceived = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };

  return action;
};

export const getTasksList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTasksList().then((tasksList) => {
      dispatch(tasksListReceived(tasksList));
    });
  };

  return thunkAction;
};

export const updateTask = (taskId) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(
      (task) => task.id === taskId
    );
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()));
  };

  return thunkAction;
};
export const deleteTask = (taskId) => {
  const thunkAction = function (dispatch) {
    tasksGateway
      .deleteTask(taskId)
      .then(() => dispatch(getTasksList()));
  };

  return thunkAction;
};

export const createTask = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway
      .createTask(taskData)
      .then(() => dispatch(getTasksList()));
  };

  return thunkAction;
};
