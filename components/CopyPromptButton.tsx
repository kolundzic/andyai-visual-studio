"use client";

import { useState } from "react";

type CopyPromptButtonProps = {
  text: string;
  label?: string;
};

export function CopyPromptButton({ text, label = "Copy prompt" }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="avs-button-secondary" type="button" onClick={copyPrompt}>
      {copied ? "Copied" : label}
    </button>
  );
}
