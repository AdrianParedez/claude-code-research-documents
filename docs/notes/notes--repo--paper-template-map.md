# Paper-To-Template Map

Crosswalk | Papers To Templates | May 22, 2026

Claude Code Research Paper-To-Template Map

This note answers one onboarding question directly: which prompt templates come
from which paper?

## Primary Derivation

### From [paper--claude--prompting.md](../papers/paper--claude--prompting.md)

These ten templates are primarily derived from the Claude prompting paper's
task-contract framing, XML guidance, verification emphasis, and
underspecification analysis.

| Template | Main job | Why it belongs here |
| --- | --- | --- |
| [template--claude--single-task-brief.md](../../prompts/templates/template--claude--single-task-brief.md) | Narrow single-turn task | Smallest useful task contract with explicit fallback behavior |
| [template--claude--production-xml-brief.md](../../prompts/templates/template--claude--production-xml-brief.md) | Structured grounded prompting | Direct application of the paper's XML and output-schema guidance |
| [template--claude--thinking-verification.md](../../prompts/templates/template--claude--thinking-verification.md) | Reasoning with a final self-check | Derived from the paper's verification-aware reasoning discussion |
| [template--claude--citation-grounded-synthesis.md](../../prompts/templates/template--claude--citation-grounded-synthesis.md) | Literature and document synthesis | Extends the paper's source-grounding and evidence-before-claim posture |
| [template--claude--few-shot-structured-extraction.md](../../prompts/templates/template--claude--few-shot-structured-extraction.md) | Stable field extraction | Comes from the paper's few-shot and schema-control discussion |
| [template--claude--contradiction-check.md](../../prompts/templates/template--claude--contradiction-check.md) | Compare overlapping sources | Derived from the paper's emphasis on uncertainty and disagreement handling |
| [template--claude--long-context-analysis.md](../../prompts/templates/template--claude--long-context-analysis.md) | Work across many long documents | Follows the paper's long-context ordering and traceability guidance |
| [template--claude--prompt-comparison-eval.md](../../prompts/templates/template--claude--prompt-comparison-eval.md) | Evaluate competing prompt drafts | Directly tied to the paper's eval-first framing |
| [template--claude--rubric-based-grading.md](../../prompts/templates/template--claude--rubric-based-grading.md) | Grade against explicit criteria | Derived from the paper's success-criteria and output-contract logic |
| [template--claude--underspecification-interview.md](../../prompts/templates/template--claude--underspecification-interview.md) | Clarify vague tasks before answering | Comes from the paper's prompt-sensitivity and underspecification review |

### From [paper--claude-code--prompting.md](../papers/paper--claude-code--prompting.md)

These ten templates are primarily derived from the Claude Code prompting
paper's outcome-first agent brief, evidence handling, autonomy boundaries, and
verification loop.

| Template | Main job | Why it belongs here |
| --- | --- | --- |
| [template--claude-code--exploration-plan.md](../../prompts/templates/template--claude-code--exploration-plan.md) | Inspect first, plan before edits | Mirrors the paper's plan-first pattern for large or risky work |
| [template--claude-code--bug-fix-evidence.md](../../prompts/templates/template--claude-code--bug-fix-evidence.md) | Fix from a direct failure artifact | Derived from the paper's artifact-over-paraphrase rule |
| [template--claude-code--pattern-anchored-feature.md](../../prompts/templates/template--claude-code--pattern-anchored-feature.md) | Add work by reusing an existing route or component pattern | Comes from the paper's outcome-plus-reference implementation style |
| [template--claude-code--behavioral-refactor.md](../../prompts/templates/template--claude-code--behavioral-refactor.md) | Clean up structure without changing behavior | Derived from the paper's invariant and verification framing |
| [template--claude-code--autonomous-optimization.md](../../prompts/templates/template--claude-code--autonomous-optimization.md) | Iterate toward a measurable target | Maps to the paper's autonomy-with-stop-conditions contract |
| [template--claude-code--session-memory-review.md](../../prompts/templates/template--claude-code--session-memory-review.md) | Move reusable lessons into memory or skills | Derived from the paper's persistent instruction layer discussion |
| [template--claude-code--diff-risk-review.md](../../prompts/templates/template--claude-code--diff-risk-review.md) | Review an existing diff for risk | Comes from the paper's verification and risk-review posture |
| [template--claude-code--migration-safety-check.md](../../prompts/templates/template--claude-code--migration-safety-check.md) | Evaluate rollout, rollback, and contract risk | Derived from the paper's boundary-setting and proof-of-done logic |
| [template--claude-code--subagent-research-brief.md](../../prompts/templates/template--claude-code--subagent-research-brief.md) | Push deeper exploration into a subagent | Comes from the paper's layered-agent workflow framing |
| [template--claude-code--test-gap-analysis.md](../../prompts/templates/template--claude-code--test-gap-analysis.md) | Check whether code changes outran test coverage | Direct application of the paper's verification loop and completion proof |

## How The Systems Paper Fits

[paper--claude-code--systems.md](../papers/paper--claude-code--systems.md)
does not generate a separate primary template family on its own. That paper is
mainly architectural. It explains why some Claude Code templates need extra
governance language around memory, permissions, context load, and orchestration.

The strongest secondary links are:

- [template--claude-code--session-memory-review.md](../../prompts/templates/template--claude-code--session-memory-review.md)
  because the systems paper explains memory files, settings, and skills as a
  structural layer rather than a chat habit.
- [template--claude-code--subagent-research-brief.md](../../prompts/templates/template--claude-code--subagent-research-brief.md)
  because the systems paper frames Claude Code as a multi-surface, extensible
  agent system.
- [template--claude-code--autonomous-optimization.md](../../prompts/templates/template--claude-code--autonomous-optimization.md)
  because the systems paper is where autonomy, permissions, and context
  economics are treated as operating constraints.
- [template--claude-code--migration-safety-check.md](../../prompts/templates/template--claude-code--migration-safety-check.md)
  because the systems paper emphasizes governance, rollback thinking, and
  deployment risk.
- [template--claude-code--exploration-plan.md](../../prompts/templates/template--claude-code--exploration-plan.md)
  because the systems paper explains why context gathering and tool choice are
  part of the task, not pre-work outside it.

## Practical Short Version

If you want the shortest possible answer:

- all `template--claude--*` files are primarily derived from the Claude
  prompting paper
- all `template--claude-code--*` files are primarily derived from the Claude
  Code prompting paper
- the Claude Code systems paper is the architectural support layer for the
  Claude Code templates that touch memory, permissions, context, and
  orchestration
