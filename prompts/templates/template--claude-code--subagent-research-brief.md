# Claude Code Subagent Research Brief

Use this when a branch of work needs deeper exploration but you do not want the
main working context to get noisy.

## Template

```text
Use a subagent to research {{research_topic}}.

The subagent should:
- inspect {{target_files_or_systems}}
- summarize the current flow, constraints, and edge cases
- cite the exact files or artifacts that support each conclusion

Then return to the main task and:
1. summarize the findings in plain language
2. propose the smallest safe change
3. identify what still needs human confirmation
```
