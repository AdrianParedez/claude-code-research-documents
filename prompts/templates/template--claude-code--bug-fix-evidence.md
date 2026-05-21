# Claude Code Bug Fix With Evidence

Use this when you already have a failing log, stack trace, screenshot, or other
direct evidence of the defect.

## Template

```text
I am seeing this failure: {{failure_artifact}}.

Find the root cause, explain it in at most 5 bullets, implement the smallest
safe fix, and run the affected tests.

Constraints:
- use {{reference_file_or_pattern}} as the style anchor
- stop if the fix requires schema changes, new credentials, or production access
- summarize any remaining risk after the fix
```
