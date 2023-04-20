import { lazy } from "react";
import store from "@/store";
import { createBrowserRouter, redirect } from "react-router-dom";


const Home = lazy(() => import('@/pages/Home'))
const Root = lazy(() => import('@/layouts/Root'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <Root />,
        loader: async () => {
          console.log('loader')
          return 'loader返回数据'
        }
      }
    ]
  }
])


export default router