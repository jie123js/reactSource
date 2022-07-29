import React from 'react';
import Layout from '../index';
import request from '@/utils/request';
import dynamic from 'next/dynamic';
//import UserInfo from '@/components/UserInfo';
const DynamicUserInfo = dynamic(()=>import('@/components/UserInfo'))
function UserDetail(props) {
  const [show,setShow ] = React.useState(false);
  return (
    <Layout>
      <div>
        <p>ID:{props.user&&props.user.id}</p>
        <button onClick={()=>setShow(!show)}>显示/隐藏</button> 
        {
          show && props.user && <DynamicUserInfo user={props.user}/>
        }
      </div>
    </Layout>
  )
}
/* UserDetail.getInitialProps = async (ctx) => {
  let response = await request.get(`/api/users/${ctx.query.id}`);
  return { user: response.data.data };
} */
//此函数仅会在编译阶段使用 
export async function getStaticProps({params}) {
  const response = await request.get(`http://localhost:5000/api/users/${ctx.query.id}`);
  return {
    props: {
      user: response.data.data
    }
  };
}
export async function getStaticPaths() {
  const response = await request.get('http://localhost:5000/api/users');
  const users = response.data.data;
  //这是一个用户详情页的路径的字符串数组
  //在编译的时候，会调用此方法，获取路径的数组，然后依次访问这些路径，把这个路径生成静态的HTML文件
  const paths = users.map(user=>`/user/detail/${user.id}`);
  return { paths};
}
export default UserDetail;
//操作系统资源分配不足