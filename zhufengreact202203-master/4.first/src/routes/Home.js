
import { useDispatch } from 'react-redux';
import { push } from '../redux-first-history';
function Home() {
  const dispatch = useDispatch();
  return <div onClick={() => {
    dispatch(push('/counter'))
  }}>Home</div>
}
export default Home;