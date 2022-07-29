import React from 'react';
import { history } from 'umi'
import Layouts from '../layouts/index.js';
function Foo() {
  return (
    <Layouts>
      <h1>Foo</h1>
      <button onClick={() => history.goBack()}> 返回</button>
    </Layouts >
  );
}
//Foo.wrappers = ['@/layouts'];
export default Foo;