import React from  'react';
import {Layout, Menu} from 'antd';
import RouterComponent from './router';
import styles from './app.module.less'
import { Provider } from 'react-redux'
import {store} from '@/models'

const {Sider, Content} = Layout;
const { Root: RouterComponentRoot, Link} = RouterComponent
const items = [{
  key: 1,
  label: <Link to='/home'>Home</Link>,
}, {
  key: 2,
  label: <Link to='/child?aa=1'>child</Link>,
}]

const App: React.FC = function() {
  return (
    <Provider store={store}>
      <RouterComponentRoot>
        <Layout
          className={styles.container}
        >
          <Sider className={styles.sider}>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
          </Sider>
          <Content>
            <RouterComponent />
          </Content>
        </Layout>
      </RouterComponentRoot>
    </Provider>
  )
}

export default App;