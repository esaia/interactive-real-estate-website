export const useLazyVimeoScript = () => {
  const loadVimeoScript = () => {
    return new Promise((resolve: any, reject: any) => {
      // Check if script is already loaded
      if (
        document.querySelector(
          'script[src="https://player.vimeo.com/api/player.js"]',
        )
      ) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Vimeo script"));
      document.head.appendChild(script);
    });
  };

  return { loadVimeoScript };
};
