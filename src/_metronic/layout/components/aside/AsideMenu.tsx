import React, {useRef, useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'
import {AsideMenuMain} from './AsideMenuMain'
import {DrawerComponent, ScrollComponent, ToggleComponent} from '../../../assets/ts/components'
import ReactNestedMenu from './ReactMenuAside'
import axios from 'axios'
import './sidebar.css'

type Props = {
  asideMenuCSSClasses: string[]
}

const AsideMenu: React.FC<Props> = ({asideMenuCSSClasses}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const {pathname} = useLocation()
  const [dataMenu, setDataMenu] = useState([])

  useEffect(() => {
    axios.get('data.json').then((res) => 
    setDataMenu(res.data.menu))
    
    setTimeout(() => {
      DrawerComponent.reinitialization()
      ToggleComponent.reinitialization()
      ScrollComponent.reinitialization()
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div
      id='kt_aside_menu_wrapper'
      ref={scrollRef}
      className='hover-scroll-overlay-y my-5 my-lg-5'
      data-kt-scroll='true'
      data-kt-scroll-activate='{default: false, lg: true}'
      data-kt-scroll-height='auto'
      data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
      data-kt-scroll-wrappers='#kt_aside_menu'
      data-kt-scroll-offset='0'
    >
      <div
        id='#kt_aside_menu'
        data-kt-menu='true'
        className={clsx(
          'menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500',
          asideMenuCSSClasses.join(' ')
        )}
      >
        <div className='menu-item test'>
        {/* <ReactNestedMenu
          navParentClassname='vertical nested child-sub'
          navTopLevelParentClassname='vertical'
          navChildClassname='childs child-sub'
          navChildElementClassname='has-child child-sub'
          menuData={dataMenu}
        /> */}
        </div>
        
        <AsideMenuMain />
      </div>
    </div>
  )
}

export {AsideMenu}
