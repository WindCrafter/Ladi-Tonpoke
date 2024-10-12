import { useState, useEffect } from "react";

const useAudio = (url: string, autoPlay: boolean = true) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const audioObj = new Audio(url);
    audioObj.addEventListener('error', (e) => {
      // console.error('Error loading audio:', e);
      setIsPlaying(false);
    });
    setAudio(audioObj);

    return () => {
      audioObj.pause();
      audioObj.currentTime = 0;
      audioObj.loop = false;
    };
  }, [url]);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      if (isPlaying) {
        audio.play().catch((e) => {
          // console.error('Error playing audio:', e);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  }, [audio, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return { isPlaying, togglePlay };
};

export default useAudio;