interface Window {
  ChatWidget?: {
    init: (url: string, theme: string) => void;
    open: () => void;
  };
}
