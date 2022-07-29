

import { useContext } from 'react';
import { bindActionCreators } from '../../redux';
import ReactReduxContext from '../ReactReduxContext';
function useBoundDispatch(actionCreators) {
  const { store } = useContext(ReactReduxContext);
  return bindActionCreators(actionCreators, store.dispatch);
}
export default useBoundDispatch;