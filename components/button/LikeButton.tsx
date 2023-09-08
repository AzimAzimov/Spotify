'use client'
import React, {FC, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

import useAuthModal from "@/hooks/useAuthModal";
import {useUser} from "@/hooks/useUser";
import {useSessionContext} from "@supabase/auth-helpers-react";

interface ILikeButtonProps {
  songId: string
}

const LikeButton:FC<ILikeButtonProps> = ({songId}) => {
  const router = useRouter()
  const { supabaseClient } = useSessionContext()
  const authModal = useAuthModal()
  const { user } = useUser()
  const [isLiked, setIsLiked] = useState<boolean>(false)

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    }

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart
  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId)

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from('liked_songs')
        .insert({
          song_id: songId,
          user_id: user.id
        });

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success('Success');
      }
    }

    router.refresh();
  }


  return (
    <button onClick={handleLike} className="transition hover:opacity-75">
      <Icon color={isLiked ? '#22c55e' : 'white'} size={25}/>
    </button>
  );
};

export default LikeButton;