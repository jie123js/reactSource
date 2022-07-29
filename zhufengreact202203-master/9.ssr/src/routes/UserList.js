import React, { Suspense, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionCreators from '@/store/actionCreators/user';
const LazyUserList = React.lazy(() => import('@/components/Users'));
function UserList() {
  const dispatch = useDispatch();
  const resourceRef = useRef()
  if (!resourceRef.current) {
    const promise = dispatch(actionCreators.getUserList());
    const resource = wrapPromise(promise);
    resourceRef.current = resource;
  }
  return (
    <>
      <div>Users上面</div>
      <Suspense fallback={<div>loading userList....</div>}>
        <LazyUserList resource={resourceRef.current} />
      </Suspense>
      <div>Users下面</div>
    </>
  )
}




/* function getUserList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'zhufeng1' }, { id: 2, name: 'zhufeng2' }, { id: 3, name: 'zhufeng3' }]);
    }, 10000);
  });
} */
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(r => {
    status = 'success';
    result = r;
  }, e => {
    status = 'error';
    result = e;
  });
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  }
}

export default UserList;