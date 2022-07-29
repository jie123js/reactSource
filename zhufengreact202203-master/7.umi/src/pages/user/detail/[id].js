import React from 'react';

function UserDetail(props) {
  return (
    <div>用户ID: {props.match.params.id}</div>
  )
}
export default UserDetail;
//react-router-dom 5 props  history match location
//                 6        useNavigator userParams userLocation