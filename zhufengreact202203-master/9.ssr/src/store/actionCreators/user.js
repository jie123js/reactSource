import { SET_USER_LIST, ADD_USER } from '../action-types';
const actionCreators = {
  getUserList() {
    return function (dispatch, getState, request) {
      return request.get(`/api/users`).then((response) => {
        const { data } = response.data;
        dispatch({
          type: SET_USER_LIST,
          payload: data//用户列表的数组
        });
        return getState().user.list;
      });
    }
  },
  addUser(user) {
    return {
      type: ADD_USER,
      payload: user
    }
  }
}
export default actionCreators;