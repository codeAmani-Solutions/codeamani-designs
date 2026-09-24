# Validation workflow (add manually)

The connected GitHub app can't write to `.github/workflows/`. To run `scripts/validate.mjs` on every PR, create `.github/workflows/validate.yml` with:

```yaml
name: validate
on:
  pull_request:
  push:
    branches: [main]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: node scripts/validate.mjs
```
