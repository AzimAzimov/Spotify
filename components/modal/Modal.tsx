import React, {FC, ReactNode} from 'react';
import {IoMdClose} from "react-icons/io";

import * as Dialog from '@radix-ui/react-dialog'

interface IModalProps {
  onChange: (open: boolean) => void
  isOpen: boolean
  title: string
  description: string
  children: ReactNode
}

const Modal: FC <IModalProps> = ({children, isOpen, onChange, description, title}) => {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-neutral-900/90
            backdrop-blur-sm
            fixed
            inset-0
          "
        />
        <Dialog.Content
          className="
            fixed drop-shadow-md border border-neutral-700/30
            top-[50%] left-[50%] max-h-full w-full h-full md:h-auto
            md:max-h-[85vh] md:w-[90vh] md:max-w-[450px] translate-x-[-50%]
            translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none
          "
        >
          <Dialog.Title className="text-xl text-center font-bold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            {description}
          </Dialog.Description>
          <div className="">
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="
                text-neutral-400 absolute top-[10px]
                right-[10px] hover:text-white transition
                inline-flex w-[25px] h-[25px] justify-center
                items-center rounded-full focus:outline-none
              "
            >
              <IoMdClose/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;





