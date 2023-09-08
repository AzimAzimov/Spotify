"use client"
import React, { FC } from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FaPlay} from "react-icons/fa";

interface IListItemProps {
  image: string
  name: string
  href: string
}

const ListItem: FC <IListItemProps> = ({image, name, href}) => {
  const router = useRouter()
  //HANDLERS
  const handleOnClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={handleOnClick}
      className="
        relative
        group
        flex
        items-center
        rounded-md
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
        overflow-hidden
      "
    >
      <div className="
        relative
        min-h-[64px]
        min-w-[64px]
      ">
        <Image className="object-cover" fill src={image} alt={"liked"} />
      </div>
      <p className="font-medium truncate px-5">
        {name}
      </p>
      <div className="
        absolute
        transition
        opacity-0
        rounded-full
        flex items-center
        justify-center
        bg-green-500 p-4
        drop-shadow-md
        right-5
        group-hover:opacity-100
        hover:scale-110
      ">
        <FaPlay className="text-black" size={15}/>
      </div>
    </button>
  );
};

export default ListItem;