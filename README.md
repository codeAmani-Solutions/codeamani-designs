# codeamani-designs

Public library of codeAmani Labs design mockups. Each design is a self-contained HTML artifact, filed by **style** (design system) and **type** (what it is).

Gallery: `index.html` at the repo root lists every design in `catalog.json`, filterable by style and type. Enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) to publish it at https://codeamani-solutions.github.io/codeamani-designs/.

## Layout

```
styles/<style>/                 design-system assets shared by designs (tokens, component bundle)
designs/<style>/<type>/<slug>/  one design per folder
  index.html                    entry point (required)
  design.json                   metadata (required, see templates/design.json)
  preview.png                   optional thumbnail, 1600x1000
  *.jsx / *.css                 design source
catalog.json                    registry of every design, drives the gallery
templates/                      starter files for a new design
scripts/validate.mjs            structure + catalog check
```

## Styles

| id | Name | Notes |
|---|---|---|
| `glass-dark` | codeAmani Glass-Dark | Hazina console language: navy #070B14, magenta #FF2D95, yellow #FFE600, liquid glass, monospace |

Add a style by creating `styles/<id>/README.md` and adding it to `catalog.json > styles`.

## Types

`console` · `dashboard` · `landing` · `deck` · `doc` · `email` · `flier` · `component` · `social`

Add a type by appending it to `catalog.json > types`.

## Adding a design

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version:

1. Copy `templates/` to `designs/<style>/<type>/<slug>/`.
2. Fill in `design.json` and build `index.html`.
3. Add an entry to `catalog.json > designs`.
4. Run `node scripts/validate.mjs`, open a PR.
