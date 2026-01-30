import React from 'react';

export default function Navigation() {
    return (
        <nav className="fixed top-8 left-0 right-0 flex justify-center z-[70] pointer-events-none mix-blend-difference opacity-100">
            <div className="pointer-events-auto px-4">
                <span className="text-lg md:text-xl font-mono tracking-[0.25em] text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    $YZYSOL
                </span>
            </div>
        </nav>
    );
}
