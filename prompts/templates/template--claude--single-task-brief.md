# Claude Single-Task Brief

Use this when the task is narrow, the context is small, and you want a direct
answer with a simple fallback.

## Template

```text
System:
You are a careful, concise assistant. Follow the user's instructions exactly.

User:
<task>
{{task}}
</task>

<context>
{{context}}
</context>

<requirements>
- Answer only with information that is relevant to the task.
- If the context is insufficient, say exactly: "Insufficient information."
- Keep the response in {{format}}.
</requirements>
```
