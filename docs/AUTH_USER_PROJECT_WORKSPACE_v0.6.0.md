# AndyAI Visual Studio v0.6.0 — Supabase Auth & User Project Workspace

## Purpose

v0.6.0 introduces the login-ready SaaS workspace layer.

The goal is not paid generation yet. The goal is identity, ownership, and protected product flow.

## New Product Capability

A user can now be represented as an authenticated Supabase user. The dashboard and projects routes are auth-aware. Private project access is designed around owner-scoped project records.

## Added Layers

| Layer | Role |
|---|---|
| Login page | Magic-link Supabase Auth entry point |
| Auth callback route | Exchanges Supabase login code for a session |
| Sign-out route | Clears Supabase session |
| Protected dashboard model | Shows workspace only when a user is signed in |
| Projects route | Lists user-owned visual projects |
| Project detail route | Shows one owner-scoped project |
| Auth-aware Supabase server client | Enables session-aware reads |
| Starter RLS migration | Reinforces owner-only access |

## Canon Rule

No owner. No private project. No export. No paid generation.
