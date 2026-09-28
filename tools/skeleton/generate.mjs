// Generates the course map from curriculum.mjs.
//   node tools/skeleton/generate.mjs
// ⚠️ OVERWRITES Part/Phase/Module/Project READMEs, ROADMAP.md and PROGRESS.md.
//    Hand-written lesson folders (L01.* …) are never touched.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parts, phases, projects, finals, weights } from './curriculum.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const pad = (n, w = 2) => String(n).padStart(w, '0');
const pascal = (s) =>
  s.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('').slice(0, 40);
const write = (rel, text) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, text.trim() + '\n');
};
const up = (rel) => '../'.repeat(rel.split('/').length); // from a folder back to the root

const partOf = (ph) => parts.find((p) => p.n === ph.part);
const phaseDir = (ph) => `${partOf(ph).folder}/P${pad(ph.n)}.${ph.slug}`;
const allModules = phases.flatMap((ph) => ph.modules.map((m) => ({ ...m, phase: ph })));
const moduleDir = (m) => `${phaseDir(m.phase)}/M${pad(m.n, 3)}.${m.slug}`;
const lessonDir = (i, title) => `L${pad(i + 1)}.${title === 'Module Review' ? 'ModuleReview' : pascal(title)}`;
const projectDir = (p) => `${parts.find((x) => x.n === p.part).folder}/Projects/${p.id}.${p.slug}`;
const finalDir = (f) => `Final/${f.slug}`;
const scheme = (phaseN) => (phaseN <= 16 ? 'A' : 'B');
const weightTable = (w) => ['| Area | Weight |', '|---|---:|', ...Object.entries(w).map(([k, v]) => `| ${k} | ${v}% |`)].join('\n');
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

const GATE = (m) => `
Reading a lesson is **not** finishing it. Tick every box, honestly:

- [ ] **Explain it:** I can answer every question below out loud, simply, without notes.
${m.explain.map((q) => `  - ${q}`).join('\n')}
- [ ] **Implement it:** all exercises are green, and I wrote them without opening solutions first.
- [ ] **Debug it:** I fixed every debugging challenge and can explain *why* each bug happened.
- [ ] **Apply it:** I used this module's ideas in a project or a new program of my own.
- [ ] **Compare alternatives:** I can name another way to solve the same problem.
- [ ] **Identify trade-offs:** I can say when this is the *wrong* tool.`;

// ───────────────────────── Modules ─────────────────────────
allModules.forEach((m, idx) => {
  const dir = moduleDir(m);
  const back = up(dir);
  const prev = allModules[idx - 1];
  const next = allModules[idx + 1];
  const rel = (x) => `${back}${moduleDir(x)}/README.md`;
  const nav = [
    `[🏠 Course](${back}README.md)`,
    `[Phase ${pad(m.phase.n)}](../README.md)`,
    prev && `[⬅ M${pad(prev.n, 3)}](${rel(prev)})`,
    next && `[M${pad(next.n, 3)} ➡](${rel(next)})`,
  ].filter(Boolean).join(' · ');

  const lessonRows = m.lessons.map((t, i) => {
    const d = lessonDir(i, t);
    const ready = exists(`${dir}/${d}/README.md`);
    return `| ${pad(i + 1)} | ${ready ? `[${t}](${d}/README.md)` : t} | ${ready ? '🟢' : '📋'} |`;
  });
  const allReady = m.lessons.every((t, i) => exists(`${dir}/${lessonDir(i, t)}/README.md`));

  write(`${dir}/README.md`, `
# Module ${pad(m.n, 3)}: ${m.title}

${nav}

**Part ${partOf(m.phase).n === 1 ? 'I' : 'II'} · Phase ${pad(m.phase.n)}: ${m.phase.title}** · Status: ${allReady ? '🟢 Ready' : '📋 Planned (lessons are written just before you reach this module)'}

## 🧸 The big idea

${m.bigIdea}

## 📖 Lessons

| # | Lesson | |
|---|---|---|
${lessonRows.join('\n')}

Every lesson follows the 10-part format: Concept → Why it exists → Internal mechanics → Simple example → Real-world example → Coding exercise → Debugging challenge → Design question → Short assessment → Reflection.
${m.build ? `\n## 🛠️ Build it yourself\n\n${m.build.map((b) => `- ${b}`).join('\n')}\n` : ''}
## 🎯 Mastery gate
${GATE(m)}

Record the result in [PROGRESS.md](${back}PROGRESS.md).

## 📊 Scoring for this phase (scheme ${scheme(m.phase.n)})

${weightTable(weights[scheme(m.phase.n)])}
`);
});

// ───────────────────────── Phases ─────────────────────────
for (const ph of phases) {
  const dir = phaseDir(ph);
  const back = up(dir);
  const unlocked = projects.filter((p) => p.after === ph.n);
  const examReady = exists(`${dir}/Phase-Exam/README.md`);
  write(`${dir}/README.md`, `
# Phase ${pad(ph.n)}: ${ph.title}

[🏠 Course](${back}README.md) · [Part ${ph.part === 1 ? 'I' : 'II'}](../README.md) · [🗺️ Roadmap](${back}ROADMAP.md)

⏱️ About **${ph.weeks} week${ph.weeks > 1 ? 's' : ''}** · Scoring scheme **${scheme(ph.n)}**

> ${ph.goal}

## Modules

| Module | Title | Lessons |
|---|---|---:|
${ph.modules.map((m) => `| ${pad(m.n, 3)} | [${m.title}](M${pad(m.n, 3)}.${m.slug}/README.md) | ${m.lessons.length} |`).join('\n')}
${unlocked.length ? `\n## 🏗️ Unlocks these projects\n\n${unlocked.map((p) => `- [${p.id}: ${p.title}](${back}${projectDir(p)}/README.md)`).join('\n')}\n` : ''}
## 🎓 Phase exam${examReady ? ': [open it](Phase-Exam/README.md)' : ''}

Taken only when every module gate in this phase is ticked. Four parts, each scored separately (pass mark **70%** in each):

1. **Knowledge:** a written quiz without notes.
2. **Coding:** timed exercises with no hints.
3. **Debugging:** broken programs, where you fix them *and* explain the causes.
4. **Design:** one open question about how you would structure a solution, and why.

Not passed? Redo the weakest module's exercises from scratch, wait two days, and retake only the failed part.

## 📊 Scoring weights

${weightTable(weights[scheme(ph.n)])}
`);
}

// ───────────────────────── Projects & finals ─────────────────────────
const RUBRIC = `| Area | Points |
|---|---:|
| Functionality: every requirement works, edge cases handled | 30 |
| Code design: clear modules, names, no duplication | 20 |
| Tests: meaningful, green, cover the core logic | 20 |
| Error handling & robustness | 10 |
| Documentation: README + ARCHITECTURE.md | 10 |
| Defence: you can justify every major decision | 10 |`;

for (const p of projects) {
  const dir = projectDir(p);
  const back = up(dir);
  const afterPhase = phases.find((ph) => ph.n === p.after);
  write(`${dir}/README.md`, `
# ${p.id}: ${p.title}

[🏠 Course](${back}README.md) · [🗺️ Roadmap](${back}ROADMAP.md)

**Do after:** [Phase ${pad(p.after)}: ${afterPhase.title}](${back}${phaseDir(afterPhase)}/README.md) · ⏱️ about ${p.weeks} week${p.weeks > 1 ? 's' : ''}

## 🎯 Brief

${p.brief}

## ✅ Requirements

${p.features.map((f) => `- [ ] ${f}`).join('\n')}

## 📦 Deliverables

- Its **own Git repository** (this is portfolio work; link it in PROGRESS.md)
- \`README.md\`: what it is, how to run it, how to test it
- \`ARCHITECTURE.md\`: modules, data flow, and the 3 most important decisions with their trade-offs
- A test suite that passes with one command

## 📊 Rubric (100 points)

${RUBRIC}

## 🚫 Rules

No tutorials, no AI-written code. Use AI only to *explain* concepts or errors.
📋 A detailed spec with acceptance tests is written when you reach this project.
`);
}

for (const f of finals) {
  const dir = finalDir(f);
  const back = up(dir);
  write(`${dir}/README.md`, `
# ${f.title}

[🏠 Course](${back}README.md) · [🗺️ Roadmap](${back}ROADMAP.md)

⏱️ about ${f.weeks} week${f.weeks > 1 ? 's' : ''} · Scoring scheme **B**

## 🎯 Brief

${f.brief}

## ✅ Requirements

${f.features.map((x) => `- [ ] ${x}`).join('\n')}

## 📊 Rubric (100 points)

${RUBRIC}
`);
}

// ───────────────────────── Parts ─────────────────────────
for (const part of parts) {
  const phs = phases.filter((ph) => ph.part === part.n);
  const prj = projects.filter((p) => p.part === part.n);
  write(`${part.folder}/README.md`, `
# Part ${part.n === 1 ? 'I' : 'II'}: ${part.title}

[🏠 Course](../README.md) · [🗺️ Roadmap](../ROADMAP.md)

> ${part.goal}

## Phases

| Phase | Title | Modules | Weeks |
|---|---|---|---:|
${phs.map((ph) => `| ${pad(ph.n)} | [${ph.title}](P${pad(ph.n)}.${ph.slug}/README.md) | ${pad(ph.modules[0].n, 3)}–${pad(ph.modules.at(-1).n, 3)} | ${ph.weeks} |`).join('\n')}

## Projects

| Project | Do after | Weeks |
|---|---|---:|
${prj.map((p) => `| [${p.id}: ${p.title}](Projects/${p.id}.${p.slug}/README.md) | Phase ${pad(p.after)} | ${p.weeks} |`).join('\n')}
`);
}

// ───────────────────────── ROADMAP.md ─────────────────────────
let week = 0;
const rows = [];
const addRow = (kind, label, link, weeks) => {
  week += weeks;
  rows.push(`| ${kind} | [${label}](${link}) | ${weeks} | ${week} | ≈ month ${Math.ceil(week / 4.345)} |`);
};
const moduleRange = (ph) =>
  ph.modules.length === 1 ? `M${pad(ph.modules[0].n, 3)}` : `M${pad(ph.modules[0].n, 3)}–M${pad(ph.modules.at(-1).n, 3)}`;
for (const ph of phases) {
  addRow(`Phase ${pad(ph.n)}`, `${ph.title} (${moduleRange(ph)})`, `${phaseDir(ph)}/README.md`, ph.weeks);
  for (const p of projects.filter((x) => x.after === ph.n)) addRow(`🏗️ ${p.id}`, p.title, `${projectDir(p)}/README.md`, p.weeks);
  if (ph.n === 30) for (const f of finals) addRow(`🎓 ${f.id}`, f.title, `${finalDir(f)}/README.md`, f.weeks);
}
write('ROADMAP.md', `
# 🗺️ Roadmap: the full sequence

[🏠 Course](README.md)

Phases and projects in the order you do them. Week counts are **estimates at a steady pace alongside the Full-Stack course**. Gates, not calendars, decide when you move on.

| Step | What | Weeks | Total weeks | When |
|---|---|---:|---:|---|
${rows.join('\n')}

**Total: about ${week} weeks ≈ ${(week / 4.345).toFixed(0)} months.**
`);

// ───────────────────────── PROGRESS.md ─────────────────────────
write('PROGRESS.md', `
# 📈 My Progress: JavaScript & TypeScript Mastery

**Started on:** ____-__-__

## Module gates

Tick a column only when it's honestly true. E = Explain · I = Implement · D = Debug · A = Apply · C = Compare alternatives · T = Trade-offs.

| Module | E | I | D | A | C | T | Date |
|---|---|---|---|---|---|---|---|
${allModules.map((m) => `| ${pad(m.n, 3)} ${m.title} | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | |`).join('\n')}

## Phase exams (%)

| Phase | Knowledge | Coding | Debugging | Design | Passed? | Date |
|---|---|---|---|---|---|---|
${phases.map((ph) => `| ${pad(ph.n)} ${ph.title} | | | | | ☐ | |`).join('\n')}

## Projects

| Project | Score /100 | Repo link | Date |
|---|---|---|---|
${[...projects, ...finals].map((p) => `| ${p.id} ${p.title} | | | |`).join('\n')}

## Weekly log

\`\`\`md
### Week __ (dates) · Modules __
- Lessons finished:
- Exercises done without looking at solutions: __ / __
- Hardest idea this week:
- What made it click:
- To revisit:
\`\`\`
`);

console.log(`Generated ${parts.length} parts, ${phases.length} phases, ${allModules.length} modules, ${projects.length + finals.length} projects. ${week} weeks.`);
// Print lesson folder names for ready modules (handy when writing lessons)
for (const m of allModules.filter((x) => x.ready)) {
  m.lessons.forEach((t, i) => console.log(`${moduleDir(m)}/${lessonDir(i, t)}`));
}
