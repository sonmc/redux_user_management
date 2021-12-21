import { DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
  users: [],
};

const deleteUser = (state, userId) => {
  const users = state.users.filter((x) => x.id !== userId);
  return users;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    case DELETE_USER_SUCCESS:
      const newData = deleteUser(state, action.payload);
      return { ...state, users: newData };
  }

  return state;
};

export default rootReducer;
