import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import YZYScene from './YZYScene';
import Navigation from './Navigation';
import StadiumWidget from './StadiumWidget';
import SpreadButton from './SpreadButton';
import Manifesto from './Manifesto';

export default function App() {
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    // Using 10.wav as observed in directory, fallback to 10.mp3 if needed via naming convention
    audioRef.current = new Audio('/10.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const handleInteract = () => {
      if (!audioStarted && audioRef.current) {
        audioRef.current.play()
          .then(() => setAudioStarted(true))
          .catch(e => console.error("Audio playback failed:", e));
      }
    };

    window.addEventListener('click', handleInteract);
    window.addEventListener('keydown', handleInteract);
    window.addEventListener('touchstart', handleInteract);

    return () => {
      window.removeEventListener('click', handleInteract);
      window.removeEventListener('keydown', handleInteract);
      window.removeEventListener('touchstart', handleInteract);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioStarted]);

  return (
    <div className="relative w-full h-full min-h-screen bg-black overflow-hidden font-mono text-white selection:bg-white selection:text-black">

      {/* z-20: Background Video */}
      <div className="absolute inset-0 z-20 opacity-20 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src="/looop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* z-35: Fabric Plane Overlay */}
      <div
        className="absolute inset-0 z-35 opacity-5 pointer-events-none mix-blend-screen"
        style={{
          backgroundColor: 'rgb(230, 230, 230)', // Bright white 0.9
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`, // Subtle texture
        }}
      />

      {/* z-40: Static Overlays */}
      <div className="absolute top-6 left-6 z-40">
        <img src="/ye.png" alt="YE" className="w-16 md:w-24 opacity-90" />
      </div>

      <div className="absolute bottom-0 right-0 z-40 overflow-hidden pointer-events-none">
        <img
          src="/oh.png"
          alt="HIM"
          className="h-[60vh] md:h-[80vh] w-auto object-contain object-bottom translate-y-full animate-slide-up transform origin-bottom"
        />
      </div>

      {/* z-50: 3D Scene */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <Canvas
          camera={{ position: [0, 2, 12], fov: 30 }}
          gl={{ antialias: true, alpha: true }}
        >
          <YZYScene />
        </Canvas>
      </div>

      {/* z-60: Mexico Header */}
      <div className="absolute top-[20%] left-6 -translate-y-1/2 z-60 pointer-events-none mix-blend-exclusion">
        <img src="/mexico.png" alt="MEXICO CITY" className="w-48 md:w-80 opacity-90" />
      </div>

      {/* z-70: Interactive UI */}
      <Navigation />
      <StadiumWidget />

      <Manifesto />

      <SpreadButton />

      <Loader containerStyles={{ background: 'black' }} dataStyles={{ fontFamily: 'monospace', textTransform: 'uppercase' }} />
    </div>
  );
}
