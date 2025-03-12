/* eslint-disable @next/next/no-img-element */
'use client';
import { ArrowDown, XIcon } from 'lucide-react';
import { useState } from 'react';

export const ChatButton = () => {
  const [showLabel, setShowLabel] = useState<boolean>(true);
  return (
    <div className="fixed right-5 bottom-5 flex flex-col items-end gap-3">
      {showLabel && (
        <div className="relative rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1">
            <p>
              Click Button belows to{' '}
              <span className="font-semibold">Start a Chat</span> with us!
            </p>
            <ArrowDown className="size-4" />
          </div>
          <button
            onClick={() => setShowLabel(false)}
            className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm"
          >
            <XIcon className="size-3 shrink-0" />
          </button>
        </div>
      )}
      <button className="rounded-full border border-black/10 bg-white/50 p-3 shadow-lg backdrop-blur-lg">
        <img src="/chat-buble.svg" alt="" className="size-12" />
      </button>
    </div>
  );
};
