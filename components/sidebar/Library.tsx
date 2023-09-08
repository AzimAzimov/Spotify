"use client"
import React, {FC} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {TbPlaylist} from 'react-icons/tb'

import MediaItem from "@/components/song/MediaItem";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import {useUser} from "@/hooks/useUser";
import {Song} from "@/types";

interface ILibraryProps {
  songs: Song[]
}

const Library:FC <ILibraryProps> = ({songs}) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const users = useUser()

  /*HANDLERS*/
  const handleOnClick = () => {
    if (!users) {
      return authModal.onOpen();
    }
    return uploadModal.onOpen()
    console.log(222)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Музыка</p>
        </div>
        <AiOutlinePlus onClick={handleOnClick} size={20} className="cursor-pointer text-neutral-400 transition hover:text-white" />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            key={item.id}
            onClick
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Library