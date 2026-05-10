export type AvsAuthUser = {
  id: string;
  email: string;
};

export type AvsAuthState = {
  configured: boolean;
  user: AvsAuthUser | null;
};
