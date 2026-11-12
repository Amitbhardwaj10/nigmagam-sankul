"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.15);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showVolume, setShowVolume] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio Context Fallback (Web Audio gentle 136.1 Hz Om drone)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<{ stop: () => void } | null>(null);

  const startSynthDrone = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.2, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      const freqs = [136.1, 204.15, 272.2];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = i === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
        lfo.connect(lfoGain);

        gain.gain.setValueAtTime(0.05 / (i + 1), ctx.currentTime);
        lfoGain.connect(gain.gain);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start();
        lfo.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = {
        stop: () => {
          oscs.forEach((o) => {
            try {
              o.stop();
            } catch {
              // ignore
            }
          });
          try {
            ctx.close();
          } catch {
            // ignore
          }
        },
      };
    } catch {
      // ignore
    }
  };

  const stopSynthDrone = () => {
    if (oscillatorsRef.current) {
      oscillatorsRef.current.stop();
      oscillatorsRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch {
        // ignore
      }
      audioCtxRef.current = null;
    }
  };

  const startPlayback = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = isMuted ? 0 : volume;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        try {
          startSynthDrone();
          setIsPlaying(true);
        } catch {
          // ignore
        }
      }
    } else {
      startSynthDrone();
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      try {
        audioRef.current.pause();
      } catch {
        // ignore
      }
    }
    stopSynthDrone();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted) setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(val * 0.2, audioCtxRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume;
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setValueAtTime(volume * 0.2, audioCtxRef.current.currentTime);
      }
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      }
    }
  };

  useEffect(() => {
    const audio = new Audio("/audio/vedic-mantra.mp3");
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented by browser policy; start on user's first click
          const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
              audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                  startSynthDrone();
                  setIsPlaying(true);
                });
            }
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
          };

          window.addEventListener("click", handleFirstInteraction, { once: true });
          window.addEventListener("keydown", handleFirstInteraction, { once: true });
          window.addEventListener("touchstart", handleFirstInteraction, { once: true });
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
      stopSynthDrone();
    };
  }, []);

  return (
    /* Positioned on bottom-right, directly above the WhatsApp button (bottom-22 right-6) */
    <div
      className="fixed bottom-22 right-6 z-40 flex items-center"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <div className="flex items-center gap-2 bg-[#F9F8F4]/95 backdrop-blur-md border border-[#E5E2DA] shadow-md rounded-full p-1.5 text-[#1E221E] transition-all">
        {/* Play/Pause Button Only */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D4739] text-white hover:bg-[#22362B] transition-transform active:scale-95 cursor-pointer shadow-xs"
          title={isPlaying ? "Pause Background Music" : "Play Background Music"}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Volume controls (visible when playing or hovered) */}
        {(isPlaying || showVolume) && (
          <div className="flex items-center gap-2 px-2 border-l border-[#E5E2DA] animate-in fade-in duration-200">
            <button
              onClick={toggleMute}
              className="p-1 rounded-full text-[#5E645E] hover:text-[#1E221E] transition-colors cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-[#E5E2DA] rounded-lg appearance-none cursor-pointer accent-[#2D4739]"
              aria-label="Volume slider"
            />
          </div>
        )}
      </div>
    </div>
  );
};
