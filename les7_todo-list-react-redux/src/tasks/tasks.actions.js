import { fetchTasksList } from "./tasksGateway";

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
    fetchTasksList().then((tasksList) => {
      dispatch(tasksListReceived(tasksList));
    });
  };

  return thunkAction;
};
