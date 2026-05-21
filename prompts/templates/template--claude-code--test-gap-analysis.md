# Claude Code Test Gap Analysis

Use this when code has changed and you want the agent to decide whether the
current test coverage is still adequate.

## Template

```text
Inspect {{changed_files_or_feature_area}} and compare the implementation to the
existing tests.

Deliver:
1. the behavior that is already covered
2. the highest-risk gaps
3. the smallest high-value tests to add

If the gap is clear, implement the missing tests, run the relevant suite, and
report any behavior that remains untested.
```
