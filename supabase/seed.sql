-- 🅰️💥 AndyAI Visual Studio v0.4.0 starter seed
-- Safe starter data: published templates without private owner data.

insert into public.avs_templates (
  template_code,
  slug,
  title,
  category,
  difficulty,
  status,
  visibility,
  summary,
  prompt_template,
  workflow_json,
  tags
) values
(
  'AVS-001',
  'academic-sci-fi-system-map',
  'Academic Sci-Fi System Map',
  'Architecture Diagram',
  'starter',
  'published',
  'public',
  'A clean academic/business diagram template for explaining complex AI systems as readable blocks.',
  'Create a clean academic sci-fi system map for {{project_name}}. Use serious business style, clear layers, evidence cards, and human approval gates.',
  '{"steps":["define-system","map-layers","add-evidence","export-prompt"]}'::jsonb,
  array['architecture','diagram','visual-canon','business']
),
(
  'AVS-002',
  'saas-product-flow-board',
  'SaaS Product Flow Board',
  'Product Flow',
  'starter',
  'published',
  'public',
  'A visual product flow board for landing page, gallery, detail, editor, export, pricing, and dashboard flows.',
  'Create a SaaS product flow board for {{product_name}} with user journey, monetization checkpoints, and verification steps.',
  '{"steps":["hero","gallery","detail","editor","export","pricing","dashboard"]}'::jsonb,
  array['saas','product','flow','dashboard']
)
on conflict (template_code) do update set
  title = excluded.title,
  category = excluded.category,
  summary = excluded.summary,
  prompt_template = excluded.prompt_template,
  workflow_json = excluded.workflow_json,
  tags = excluded.tags,
  updated_at = now();
