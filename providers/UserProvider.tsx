'use client'
import React, {FC, ReactNode} from 'react';

import {MyUserContextProvider} from "@/hooks/useUser";


interface IUserProviderProps {
  children: ReactNode | never
}
const UserProvider:FC<IUserProviderProps> = ({children}) => {
  return (
    <MyUserContextProvider>{children}</MyUserContextProvider>
  );
};

export default UserProvider;