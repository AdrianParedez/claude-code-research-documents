# Claude Code Behavioral Refactor

Use this when you want structural cleanup without changing public behavior.

## Template

```text
Refactor {{target_area}} to remove duplication and improve maintainability.

Requirements:
- preserve current behavior and public interfaces
- before editing, list the invariants you will preserve
- use the smallest change set that materially improves the code

Verification:
- run {{relevant_tests}}
- report any observed behavior differences
- stop if the refactor requires a product decision or contract change
```
