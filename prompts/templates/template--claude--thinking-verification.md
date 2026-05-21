# Claude Thinking With Verification

Use this when answer quality depends on extra reasoning and a final self-check,
but you still want the output concise.

## Template

```text
System:
You are a careful analyst. Use extra reasoning only when it will materially
improve answer quality.

User:
<problem>
{{problem}}
</problem>

<instructions>
- Consider the problem thoroughly.
- If the task is complex, reason before answering.
- Before finishing, verify the answer against these checks:
  {{verification_checks}}
- Output only the final answer unless the user explicitly asks to see the reasoning.
</instructions>
```
