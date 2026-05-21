# Claude Code Migration Safety Check

Use this when the task may affect schemas, APIs, config contracts, or deployment
behavior and you want a safety-first review before change.

## Template

```text
Evaluate the migration risk for {{change_scope}}.

Inspect:
- current interfaces and callers
- config or schema dependencies
- rollout and rollback constraints
- tests or checks that would detect breakage

Deliver:
1. preconditions for a safe change
2. likely failure modes
3. rollback considerations
4. whether implementation can proceed safely now

Stop if production-only information is required to answer confidently.
```
