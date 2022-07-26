import Home from './pages/home'
import Child from './pages/child'
import React from 'react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';

interface IRoute {
  path: string
  component: React.ReactNode
  children?: IRoute[]
}

const routes: IRoute[] = [{
  path: '',
  component: <Home />,
  children: [{
    path: '/home',
    component: <Home />,
  }, {
    path: '/child',
    component: <Child />,
  }]
}]

function getRoutes(routes: IRoute[], parentPath?:string): JSX.Element {
  let jsxElement = <>
    {
      routes.map((route) => {
        if (parentPath) {
          route.path = `${parentPath}${route.path}`
        }
        const child = route.children ? getRoutes(route.children, route.path) : null;
        return <>
          <Route path={route.path} element={route.component} />
          {child}
        </>
      })
    }
  </>
  return jsxElement
}

function RouterComponent () {
  return <Routes>
    {
      getRoutes(routes)
    }
  </Routes>
}

RouterComponent.Root = BrowserRouter
RouterComponent.Link = Link

export default RouterComponent