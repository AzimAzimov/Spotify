'use client'
import React, { FC, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'

import {Song} from "@/types";

import Box from '../box/Box'

import Library from './Library'
import SidebarItem from './SidebarItem'


interface ISideBareProps {
  children: React.ReactNode
  songs: Song[]
}


const Sidebar:FC <ISideBareProps> = ({children, songs}) => {
  const pathName = usePathname()
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathName !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathName !== '/search',
      href: '/search',
    }
  ], [])

  return (
    <div className="flex h-full">
      <div
        className="
          hidden
          md:flex
          flex-col
          gap-y-2
          bg-black
          h-full
          w-[300px]
          p-2
        "
      >
        <Box>
          <div className="flex flex-col gap-y-4 p-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs}/>
        </Box>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar