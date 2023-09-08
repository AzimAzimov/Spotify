import React, { FC } from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons/lib'
import { twMerge } from 'tailwind-merge'


interface ISidebarItemProps {
  icon: IconType;
  label: string
  active?: boolean
  href: string
}

const SidebarItem: FC <ISidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link href={href} 
      className={
        twMerge(`
        flex flex-row
        h-auto items-center
        w-full gap-x-4 text-md 
        font-medium cursor-pointer
        text-red-400 hover:text-white
        transition py-1`,
        active && "text-white")
      }
    >
      <Icon size={26}/>
      <p className='truncate w-100'>{label}</p>
    </Link>                                                             
  )
}

export default SidebarItem