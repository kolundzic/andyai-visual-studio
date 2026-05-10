"use server";

import { redirect } from "next/navigation";
import { getProductDataAdapter } from "@/lib/data";

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function createProjectFromTemplateAction(formData: FormData) {
  const templateId = readText(formData, "templateId");
  const title = readText(formData, "title");
  const description = readText(formData, "description");
  const tapPrompt = readText(formData, "tapPrompt");

  if (!templateId) {
    throw new Error("Template is required.");
  }

  if (!title) {
    throw new Error("Project title is required.");
  }

  if (!tapPrompt) {
    throw new Error("TAP prompt is required.");
  }

  const adapter = getProductDataAdapter();
  const project = await adapter.createProjectFromTemplate({
    templateId,
    title,
    description,
    tapPrompt,
    inputSnapshot: {
      source: "tap-editor",
      version: "v0.7.0"
    }
  });

  redirect(`/projects/${project.id}`);
}
