import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import { useLayoutStore, useUserStore  } from '@/store/module'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div>Header {t('common.test')}</div>
  )
}

export default Header