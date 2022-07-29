import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd'
import NavBar from '../components/NavBar';
import { Switch, Redirect } from 'dva/router';
import { renderRoutes } from '../utils/router';
const { Content } = Layout;
function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props} />
      <Content>
        <Switch>
          {renderRoutes(props.routes, props.app)}
          <Redirect to="/home" />
        </Switch>
      </Content>
    </Layout>
  );
}


export default connect()(IndexPage);
