import React from 'react';
import Link from 'next/link';
import Layout from './index';
import request from '@/utils/request';
class UserList extends React.Component{
  constructor(props) {
    super(props)
    console.log('UserList constructor');
    //当走到这的时候，已经进入了正常的SPA渲染
    
  }
  componentDidMount(){

  }
  render(){
    console.log('UserList render');
    return (
      <Layout>
        <ul>
          {
            this.props.list.map(user => <li key={user.id}><Link href={`/user/detail/${user.id}`}>{user.name}</Link></li>)
          }
        </ul>
      </Layout>
    )
  }
}
//UserList.loadData 在组件里定义好了，然后在服务器端获取数据
/* UserList.getInitialProps = async () => {
  console.log('UserList getInitialProps');
  const response = await request.get('/api/users');
  return {
    list: response.data.data
  };
} */
//此方法会在每次客户端请求服务器的时候调用
export async function getServerSideProps(){
  console.log('getServerSideProps');
  const response = await request.get('http://localhost:5000/api/users');
  return {
    props:{
      list: response.data.data
    }
  };
}
//此函数仅会在编译阶段使用 
export async function getStaticProps(){
  const response = await request.get('http://localhost:5000/api/users');
  return {
    props: {
      list: response.data.data
    }
  };
}
export default UserList;