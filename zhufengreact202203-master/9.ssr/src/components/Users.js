import React, { Suspense, useRef } from 'react';
function Users({ resource }) {
  let list = resource.read();
  return (
    <ul>
      {
        list.map(user => (<li key={user.id}>{user.name}</li>))
      }
    </ul>
  )
}
export default Users;