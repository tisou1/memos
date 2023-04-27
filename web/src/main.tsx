import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy'
import { ClickToComponent } from 'click-to-react-component'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'
import './i18n'
// import 'uno.css'
// 使用tailwindcss
import './css/global.css'
import './css/tailwind.css'
import App from './pages'
import Loading from './pages/Loading'
import Footer from './components/footer'

import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}>
            <App />
            <ClickToComponent />
            <Footer />
          </RouterProvider>
        </Suspense>
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
)
