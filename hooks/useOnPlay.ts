import useAuthModal from "@/hooks/useAuthModal";
import usePlayer from "@/hooks/usePlayer";
import {useUser} from "@/hooks/useUser";
import {Song} from "@/types";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer()
  const authModal = useAuthModal()
  const { user } = useUser()
  
  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen()
    }
    if (player.setId) {
      player.setId(id)
    }
    if (player.setIds) {
      player.setIds(songs.map((song) => song.id));
    }
  }

  return onPlay;
}

export default useOnPlay