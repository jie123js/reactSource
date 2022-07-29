

import { useContext, useSyncExternalStore } from 'react';
import ReactReduxContext from '../ReactReduxContext';
function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const { getState, subscribe } = store;
  const nextState = getState();
  const selectedState = selector(nextState);
  useSyncExternalStore(subscribe, getState);
  return selectedState;
}
export default useSelector;