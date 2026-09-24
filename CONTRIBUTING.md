# Contributing a design

## Naming

- `style` and `type` must exist in `catalog.json`.
- `slug` is kebab-case, unique within its type: `hazina-secrets-vault`.
- The catalog `id` is `<style>/<type>/<slug>`.

## Rules

- `index.html` must open from the folder or from GitHub Pages. Reference shared assets with relative paths into `styles/<style>/`, never absolute local paths.
- Pin CDN scripts with version and integrity hash.
- Don't commit secrets, real customer data or `.env` files. Mock data only.
- Add a standalone export (`standalone.html`, fully inlined) when a design is sent to a partner such as Vercel or Canva.

## design.json fields

| field | required | notes |
|---|---|---|
| `id` | yes | `<style>/<type>/<slug>` |
| `title` | yes | human name |
| `style` | yes | style id |
| `type` | yes | type id |
| `status` | yes | `draft` · `review` · `final` |
| `viewport` | yes | e.g. `1440x900`, `fluid` |
| `entry` | yes | usually `index.html` |
| `tags` | no | free-form |
| `updated` | yes | ISO date |

## Checks

`node scripts/validate.mjs` fails if a design folder is missing `index.html` or `design.json`, if metadata doesn't match the folder path, or if `catalog.json` and the folders disagree.
