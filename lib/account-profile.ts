export type AccountProfileField = {
  label: string;
  purpose: string;
};

export const accountProfileFields: AccountProfileField[] = [
  {
    label: "Display name",
    purpose: "Personalizes the workspace and future shared artifacts.",
  },
  {
    label: "Brand name",
    purpose: "Connects exported visual systems to a user or agency brand.",
  },
  {
    label: "Default export format",
    purpose: "Remembers whether the user prefers TXT, Markdown, or JSON.",
  },
];
