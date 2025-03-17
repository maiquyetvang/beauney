/* eslint-disable @next/next/no-img-element */
'use client';
import { cn } from '@/lib/utils';
import { ArrowDown, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ChatButton = () => {
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const [chatInitialized, setChatInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Load the Middo chat widget script
    const chatWidgetURL = process.env.NEXT_PUBLIC_CHAT_WIDGET_URL;
    const helpDeskURL = process.env.NEXT_PUBLIC_HELP_DESK_URL;
    if (!chatWidgetURL || !helpDeskURL) {
      return;
    }
    const script = document.createElement('script');
    script.src = chatWidgetURL;
    script.async = true;
    script.onload = () => {
      // Initialize the chat widget once the script is loaded
      if (window.ChatWidget && !chatInitialized) {
        window.ChatWidget.init(helpDeskURL, 'default');
        setChatInitialized(true);
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [chatInitialized]);

  const handleChatButtonClick = () => {
    if (window.ChatWidget) {
      window.ChatWidget.open();
    }
  };
  return (
    <div
      className={cn(
        'fixed right-6 bottom-[106px] flex flex-col items-end gap-5',
        !chatInitialized && 'bottom-5',
      )}
    >
      {showLabel && chatInitialized && (
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
    </div>
  );
};
