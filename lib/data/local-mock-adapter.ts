import { mockTemplates } from "./mock-data";
import type { ProductDataAdapter } from "./types";

export const localMockAdapter: ProductDataAdapter = {
  async listTemplates() {
    return mockTemplates;
  },

  async getTemplate(templateIdOrSlug: string) {
    return (
      mockTemplates.find(
        (template) =>
          template.id === templateIdOrSlug ||
          template.template_id === templateIdOrSlug ||
          template.slug === templateIdOrSlug,
      ) ?? null
    );
  },
};
