import React from 'react';
import styles from './Home.css';
//import useStyles from 'isomorphic-style-loader-react18/useStyles';
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import { Helmet } from 'react-helmet';
function Home() {
  //useStyles(styles);
  return (
    <>
      <Helmet>
        <title>我是首页的标题</title>
        <meta name="description" content='我是首页的描述'></meta>
      </Helmet>
      <div className={styles.theme}>
        Home
      </div>
    </>

  )
}
export default withStyles(styles)(Home);
//style-loader不需要withStyles也不需要useStyles