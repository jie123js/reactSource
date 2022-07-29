import React from 'react';
//import { useParams } from 'react-router-dom';
function Post(props) {
  console.log('match', props.match);
  //let params = useParams();
  //console.log('params', params);
  return (
    <div>Post</div>
  )
}
export default Post;