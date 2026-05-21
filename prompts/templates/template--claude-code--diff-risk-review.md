# Claude Code Diff Risk Review

Use this when you want a review-oriented pass over an existing diff rather than
new implementation work.

## Template

```text
Review the diff against {{comparison_target}}.

Focus on:
- security issues
- migration or rollback risk
- data-loss paths
- missing tests
- behavioral regressions

Deliver findings first, ordered by severity, with file references. Keep the
summary brief and include open questions only if they block confidence.
```
