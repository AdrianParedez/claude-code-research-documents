# Start Here

Repo Guide | Start Here | May 22, 2026

Claude Code Research Start Here

Use this page if you are new to the repo and do not want to choose among three
papers and twenty templates blind.

## Fastest Paths

### If you want the shortest possible distinction among the three papers

Open [notes--repo--comparison-frame.md](notes--repo--comparison-frame.md)
first. It gives the compact matrix for deciding whether your actual problem is
Claude prompting, Claude Code prompting, or Claude Code systems evaluation.

### If you want the core argument about Claude prompting

1. Read [paper--claude--prompting.md](../papers/paper--claude--prompting.md).
2. Then open three templates first:
   [template--claude--single-task-brief.md](../../prompts/templates/template--claude--single-task-brief.md),
   [template--claude--production-xml-brief.md](../../prompts/templates/template--claude--production-xml-brief.md),
   and
   [template--claude--underspecification-interview.md](../../prompts/templates/template--claude--underspecification-interview.md).
3. If you need the full template lineage, use
   [notes--repo--paper-template-map.md](notes--repo--paper-template-map.md).

### If you want Claude prompts you can use immediately

Start with the Claude templates above, then add:

- [template--claude--citation-grounded-synthesis.md](../../prompts/templates/template--claude--citation-grounded-synthesis.md)
- [template--claude--few-shot-structured-extraction.md](../../prompts/templates/template--claude--few-shot-structured-extraction.md)
- [template--claude--thinking-verification.md](../../prompts/templates/template--claude--thinking-verification.md)

These cover the three recurring jobs in the Claude paper: stable task
contracts, grounded synthesis, and verification-aware reasoning.

### If you want Claude Code prompts you can use immediately

1. Read
   [paper--claude-code--prompting.md](../papers/paper--claude-code--prompting.md).
2. Start with these four templates:
   [template--claude-code--exploration-plan.md](../../prompts/templates/template--claude-code--exploration-plan.md),
   [template--claude-code--bug-fix-evidence.md](../../prompts/templates/template--claude-code--bug-fix-evidence.md),
   [template--claude-code--pattern-anchored-feature.md](../../prompts/templates/template--claude-code--pattern-anchored-feature.md),
   and
   [template--claude-code--test-gap-analysis.md](../../prompts/templates/template--claude-code--test-gap-analysis.md).
3. Use the paper-to-template map if you want the full prompt family.

Those four cover the common Claude Code loop: inspect first, anchor on direct
evidence, reuse an existing pattern, and prove the change.

### If you want the systems picture before the prompt details

Read [paper--claude-code--systems.md](../papers/paper--claude-code--systems.md)
first, then look at the templates most tied to context, memory, and
orchestration:

- [template--claude-code--session-memory-review.md](../../prompts/templates/template--claude-code--session-memory-review.md)
- [template--claude-code--subagent-research-brief.md](../../prompts/templates/template--claude-code--subagent-research-brief.md)
- [template--claude-code--autonomous-optimization.md](../../prompts/templates/template--claude-code--autonomous-optimization.md)

The systems paper is the right framing if you are evaluating Claude Code as an
operating environment rather than only as a prompt surface.

### If you just want the public overview

Use the project site:
[adrianparedez.github.io/claude-code-research-documents](https://adrianparedez.github.io/claude-code-research-documents/).

If you want the short comparison page rather than the full folio, use:
[adrianparedez.github.io/claude-code-research-documents/comparison.html](https://adrianparedez.github.io/claude-code-research-documents/comparison.html).

## Suggested Reading Order

1. [paper--claude--prompting.md](../papers/paper--claude--prompting.md)
2. [paper--claude-code--prompting.md](../papers/paper--claude-code--prompting.md)
3. [paper--claude-code--systems.md](../papers/paper--claude-code--systems.md)

That order moves from direct Claude prompting, to agentic coding workflow
prompting, to the larger Claude Code operating stack.

## Two Supporting Files Worth Keeping Open

- [notes--repo--comparison-frame.md](notes--repo--comparison-frame.md)
- [notes--repo--paper-template-map.md](notes--repo--paper-template-map.md)
- [CITATION.cff](../../CITATION.cff)
