import React from 'react';

export default function StadiumWidget() {
    return (
        <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-[70] hidden md:flex flex-col gap-6 text-[9px] md:text-[10px] font-mono text-white/50 pointer-events-none select-none">
            <div className="flex flex-col gap-1">
                <span className="opacity-30">COORDS</span>
                <div className="border-l-2 border-white pl-2 flex flex-col">
                    <span>19.4326° N</span>
                    <span>99.1332° W</span>
                    <span>ELEV 2240M</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <span className="opacity-30">SYSTEM</span>
                <div className="border-l-2 border-white pl-2 flex flex-col">
                    <span>VISUAL: OK</span>
                    <span>AUDIO: STBY</span>
                    <span>NET: SECURE</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <span className="opacity-30">EVENT</span>
                <div className="border-l-2 border-white pl-2 flex flex-col">
                    <span>CAPACITY: 87K</span>
                    <span>SECTOR: 7G</span>
                </div>
            </div>
        </div>
    );
}
