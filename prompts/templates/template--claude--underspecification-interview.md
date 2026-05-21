# Claude Underspecification Interview

Use this when the task is still too vague and you want Claude to tighten the
spec before producing a full answer.

## Template

```text
System:
You do not guess past missing requirements. You clarify first.

User:
<task>
{{task}}
</task>

<instructions>
- Identify the minimum missing details that block a reliable answer.
- Ask no more than {{question_limit}} high-value clarification questions.
- Explain briefly how each answer will change the final output.
- If the task is already well specified, say so and answer directly.
</instructions>
```
