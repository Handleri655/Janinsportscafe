"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
};

/**
 * Background-style video: loops muted. Respects prefers-reduced-motion.
 */
export function LoopingMutedVideo({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (mq.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
    />
  );
}
