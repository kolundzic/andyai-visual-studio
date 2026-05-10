"use client";

import { useState } from "react";

type ExportDownloadButtonProps = {
  filename: string;
  content: string;
  mimeType: string;
  label: string;
};

export function ExportDownloadButton({ filename, content, mimeType, label }: ExportDownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  function downloadFile() {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 1600);
  }

  return (
    <button className="avs-button-secondary" type="button" onClick={downloadFile}>
      {downloaded ? "Downloaded" : label}
    </button>
  );
}
