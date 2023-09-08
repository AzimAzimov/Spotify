import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'


interface ISideBoxProps {
  children: React.ReactNode
  className?:string
}

const mergeClasses = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const Box:FC <ISideBoxProps> = ({children, className}) => {
  return (
    <div
      className={mergeClasses('bg-neutral-900 rounded-lg h-fit w-full', className as string)
    }>
      {children}
    </div>
  )
}

export default Box