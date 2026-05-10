"use server";

import { redirect } from "next/navigation";
import { getProductDataAdapter } from "@/lib/data";
import type { AvsExportType } from "@/lib/data";

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function normalizeExportType(value: string): AvsExportType {
  if (value === "markdown" || value === "json" || value === "html") {
    return value;
  }
  return "prompt";
}

export async function createPromptExportAction(formData: FormData) {
  const projectId = readText(formData, "projectId");
  const promptSnapshot = readText(formData, "promptSnapshot");
  const exportType = normalizeExportType(readText(formData, "exportType"));
  const label = readText(formData, "label") || `${exportType.toUpperCase()} export`;

  if (!projectId) {
    throw new Error("Project is required.");
  }

  if (!promptSnapshot) {
    throw new Error("Prompt snapshot is required.");
  }

  const adapter = getProductDataAdapter();
  await adapter.createPromptExport({
    projectId,
    exportType,
    label,
    promptSnapshot,
    exportPayload: {
      type: exportType,
      content: promptSnapshot,
      exportedFrom: "project-detail",
      version: "v0.8.0"
    }
  });

  redirect(`/projects/${projectId}?exported=1`);
}
