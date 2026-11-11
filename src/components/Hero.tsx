"use client";

import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc = '/images/final-video.mp4',
  posterSrc = '/images/5.jpeg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error('Unable to resume hero video playback.', error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <section
      className="
        relative
        w-full
        h-[420px]
        sm:h-[500px]
        md:h-[560px]
        lg:h-[620px]
        overflow-hidden
        bg-black
      "
    >
      {/* Hero Video */}
      <video
        ref={videoRef}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause video' : 'Resume video'}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
      >
        {isPlaying ? (
          <Pause aria-hidden="true" size={20} />
        ) : (
          <Play aria-hidden="true" size={20} />
        )}
      </button>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-10
          -translate-x-1/2
          sm:bottom-8
        "
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-8 w-px bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;