export type ProjectLifecycleStep = {
  status: string;
  explanation: string;
};

export const projectLifecycle: ProjectLifecycleStep[] = [
  {
    status: "Created",
    explanation: "A template is saved as a user project.",
  },
  {
    status: "Edited",
    explanation: "The TAP prompt is refined for a real use case.",
  },
  {
    status: "Exported",
    explanation: "The project produces copyable and downloadable artifacts.",
  },
  {
    status: "Archived",
    explanation: "Old work remains traceable without cluttering active projects.",
  },
];
