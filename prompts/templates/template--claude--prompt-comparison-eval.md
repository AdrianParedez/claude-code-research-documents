# Claude Prompt Comparison Eval

Use this when you are iterating on prompts and want a repeatable evaluation loop
instead of vibe-based judgment.

## Template

```text
System:
You are evaluating prompt behavior for Claude.

User:
<task>
Run the target task below and score the output against the rubric.
</task>

<prompt_version>
{{prompt_version}}
</prompt_version>

<input_case>
{{input_case}}
</input_case>

<rubric>
{{rubric}}
</rubric>

<deliverable>
Return:
1. output
2. score by rubric criterion
3. failure modes
4. recommended prompt change
</deliverable>
```
