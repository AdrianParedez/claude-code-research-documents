# Claude Code Autonomous Optimization

Use this when the task has a measurable target and you want the agent to
iterate with explicit stop conditions.

## Template

```text
Goal: {{measurable_target}}.

Use {{starting_evidence}} as the starting context.
Work incrementally, verify after each meaningful change, and keep a short log of
what changed and why.

Stop if you need:
- new dependencies
- production access
- secrets or credentials
- irreversible repository operations

At the end, show the before and after result, the files changed, and any tradeoffs.
```
