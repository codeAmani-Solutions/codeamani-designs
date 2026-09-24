import {readFileSync, readdirSync, existsSync, statSync} from 'node:fs';
import {join} from 'node:path';

const cat = JSON.parse(readFileSync('catalog.json', 'utf8'));
const styles = new Set(cat.styles.map(s => s.id));
const types = new Set(cat.types);
const errors = [];
const dirs = p => existsSync(p) ? readdirSync(p).filter(n => statSync(join(p, n)).isDirectory()) : [];

const found = new Set();
for (const s of dirs('designs')) {
  if (!styles.has(s)) errors.push(`unknown style folder: designs/${s}`);
  for (const t of dirs(join('designs', s))) {
    if (!types.has(t)) errors.push(`unknown type folder: designs/${s}/${t}`);
    for (const slug of dirs(join('designs', s, t))) {
      const base = join('designs', s, t, slug);
      const id = `${s}/${t}/${slug}`;
      found.add(id);
      if (!existsSync(join(base, 'index.html'))) errors.push(`${base}: missing index.html`);
      const mp = join(base, 'design.json');
      if (!existsSync(mp)) { errors.push(`${base}: missing design.json`); continue; }
      const m = JSON.parse(readFileSync(mp, 'utf8'));
      for (const k of ['id', 'title', 'style', 'type', 'status', 'viewport', 'entry', 'updated'])
        if (!m[k]) errors.push(`${mp}: missing "${k}"`);
      if (m.id !== id) errors.push(`${mp}: id "${m.id}" should be "${id}"`);
      if (m.style !== s || m.type !== t) errors.push(`${mp}: style/type don't match folder`);
    }
  }
}
const listed = new Set(cat.designs.map(d => d.id));
for (const id of found) if (!listed.has(id)) errors.push(`catalog.json: missing entry for ${id}`);
for (const id of listed) if (!found.has(id)) errors.push(`catalog.json: ${id} has no folder`);

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`ok · ${found.size} design(s) · ${styles.size} style(s)`);
