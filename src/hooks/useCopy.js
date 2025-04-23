import { useState } from "react";

function useCopy() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return { copied, handleCopy };
}

export { useCopy };
