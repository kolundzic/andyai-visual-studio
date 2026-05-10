# v2.1.0 — Supabase Production Schema Hardening

## Purpose

This release hardens the product data layer for public beta preparation.

## Added

- Template production status fields
- Project lifecycle status fields
- Export artifact version fields
- Owner/lifecycle indexes
- Template production status indexes
- Clear schema comments for future maintainers

## NOMF Glossary

| Term | English | Serbian explanation |
|---|---|---|
| RLS | Row-Level Security | Pravilo u bazi koje određuje koji red podataka korisnik sme da vidi ili menja. |
| Index | Database Index | Pomoćna struktura koja ubrzava pretragu po važnim kolonama. |
| Lifecycle Status | Lifecycle Status | Stanje objekta kroz njegov životni tok: active, archived, ready, draft, itd. |

## Beta Meaning

The application can now distinguish between demo content, active user projects, archived work, and production-ready templates.
