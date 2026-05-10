export type VersionedArtifact = {
  version: string;
  format: string;
  purpose: string;
};

export const versionedArtifacts: VersionedArtifact[] = [
  {
    version: "v1",
    format: "TXT",
    purpose: "Fast copy/paste prompt handoff.",
  },
  {
    version: "v2",
    format: "Markdown",
    purpose: "Readable documentation and GitHub-ready artifact.",
  },
  {
    version: "v3",
    format: "JSON",
    purpose: "Structured data for future automation and API use.",
  },
];
