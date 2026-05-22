# Comparison Frame

Research Note | Repo Comparison | May 21, 2026

Claude, Claude Code Prompting, and Claude Code Systems Are Not the Same Object

This note is the shortest comparison artifact in the repo. If the three papers
get collapsed into one generic "Claude prompting" conversation, the actual
control surface disappears.

## Executive Point

The three papers sit at different layers of the stack:

- Claude prompting optimizes the task contract for a model doing a defined job
- Claude Code prompting optimizes the agent brief inside a tool-using coding
  loop
- Claude Code systems analysis evaluates the operating stack that makes that
  loop possible

Treating those as the same object produces the wrong benchmark, the wrong
prompting advice, and the wrong product conclusions.

## Comparison Matrix

| Question | Claude prompting | Claude Code prompting | Claude Code systems |
| --- | --- | --- | --- |
| What is the object under analysis? | Claude as a model family responding to a defined task | Claude Code as a coding agent receiving a live work brief | Claude Code as a product and operating environment |
| What is the main question? | What prompt architecture most reliably improves task performance for Claude? | What prompt architecture most reliably improves bounded coding-task completion in Claude Code? | What should Claude Code be understood as: wrapper, tool, or governed agent system? |
| What is being optimized? | Output quality against a task and evaluation target | Task completion under tools, context, autonomy, and verification constraints | Architecture, governance, deployment, economics, and operating fit |
| What is the main control surface? | Task definition, output contract, XML structure, examples, and evals | Outcome, evidence, autonomy, constraints, verification, and handoff | Tools, permissions, context management, memory, skills, subagents, surfaces, and deployment model |
| What is the common mistake? | Treating good prompts like magic phrasing | Treating the environment like a one-shot chat box | Treating Claude Code like a thin CLI around chat |
| What does the paper give you? | A task-contract framework plus Claude templates | A governed agent-brief framework plus Claude Code templates | A systems frame for evaluation, rollout, and governance |
| What should you open first? | [paper--claude--prompting.md](../papers/paper--claude--prompting.md) | [paper--claude-code--prompting.md](../papers/paper--claude-code--prompting.md) | [paper--claude-code--systems.md](../papers/paper--claude-code--systems.md) |

## Practical Reading Rule

- Start with the Claude prompting paper if your problem is output quality for a
  direct Claude task.
- Start with the Claude Code prompting paper if your problem is how to brief a
  coding agent inside a repo.
- Start with the systems paper if your problem is evaluation, rollout,
  permissions, memory, or organizational fit.

## Why This Distinction Matters

- A better Claude task prompt will not answer the governance questions in
  Claude Code.
- A better Claude Code live brief will not tell you whether the product should
  be treated as a workflow tool or as an operating stack.
- A systems-level critique of Claude Code does not automatically tell you how
  to write a better single-turn Claude prompt.

Different layer, different benchmark.
