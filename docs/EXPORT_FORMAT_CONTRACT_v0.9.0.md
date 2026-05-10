# Export Format Contract v0.9.0

## Supported download formats

| Format | Extension | Purpose |
|---|---:|---|
| Plain text | `.txt` | Fast provider handoff and copy-safe prompt storage |
| Markdown | `.md` | Notion, GitHub, documentation, and human-readable archives |
| JSON | `.json` | Automation, replay, metadata, and future provider pipelines |

## Artifact metadata

Each package includes:

- project ID
- project title
- project status
- template ID
- export count
- generated timestamp
- package version
- supported formats

## UX rule

A download is not just a file. It is a proof object.

Every artifact should answer:

- what project produced it
- when it was generated
- which prompt it contains
- which export history supports it
- how it can be reused
