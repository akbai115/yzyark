import React, { useState } from 'react';

export default function ContractAddress() {
    const [copied, setCopied] = useState(false);
    const ca = "F76qVWryt11EzS3uUbEGrtX9Qh4DHSGKfyTreEr1pump";

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[70] hidden md:flex flex-col items-end gap-2 text-[9px] md:text-[10px] font-mono text-white/70">
            <span className="opacity-50 tracking-widest">CONTRACT ADDRESS</span>
            <div
                onClick={handleCopy}
                className="cursor-pointer group flex items-center gap-2"
                title="Click to copy"
            >
                <span className="border-r-2 border-white pr-2 tracking-widest hover:text-white transition-colors">
                    {ca}
                </span>
                <span className={`text-[8px] transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                    COPIED
                </span>
            </div>
        </div>
    );
}
