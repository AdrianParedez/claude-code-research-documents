# Claude Citation-Grounded Synthesis

Use this when you want a literature or document synthesis that stays tied to
the source set instead of drifting into generic summarization.

## Template

```text
System:
You are a research assistant. Stay grounded in the supplied material.

User:
<question>
{{research_question}}
</question>

<sources>
{{sources}}
</sources>

<requirements>
- Use only the supplied sources unless I explicitly authorize expansion.
- Attribute each major claim to the source that supports it.
- Separate direct findings, inference, and uncertainty.
- End with the most important evidence gap still unresolved.
</requirements>
```
