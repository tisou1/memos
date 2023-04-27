import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLayoutStore } from '@/store/module/'
import { resolution } from '@/utils/layout'
import Icon from './Icon'
import layout from '~/store/reducer/layout'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  // const userStore = useUserStore()
  const layoutStore = useLayoutStore()
  const showHeader = layoutStore.state.showHeader
  // const isVisitorMode = userStore.isVisitorMode() && !userStore.state.user

  return (
    <div
      className={`fixed sm:sticky top-0 left-0 w-full sm:w-56 h-full flex-shrink-0 pointer-events-none sm:pointer-events-auto z-20 ${
        showHeader && 'pointer-events-auto'
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none transition-opacity duration-300 sm:!hidden ${
          showHeader && 'opacity-60 pointer-events-auto'
        }`}
        onClick={() => layoutStore.setHeaderStatus(false)}
      ></div>
      x{' '}
      <header
        className={
          'relative w-56 sm:w-full h-full max-h-screen overflow-auto hide-scrollbar'
        }
      >
        <div className="w-full px-2 py-2 flex flex-col justify-start items-center flex-shrink-0 space-y-2">
          {/* <UserBanner /> */}
        </div>
      </header>
    </div>
  )
}

export default Header
