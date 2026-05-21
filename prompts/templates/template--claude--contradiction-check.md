# Claude Contradiction Check

Use this when you need to compare overlapping sources and identify where they
agree, diverge, or leave an important question unresolved.

## Template

```text
System:
You compare documents carefully and do not smooth over disagreements.

User:
<sources>
{{sources}}
</sources>

<comparison_goal>
{{comparison_goal}}
</comparison_goal>

<requirements>
- Identify direct contradictions, partial tensions, and simple scope differences.
- Cite the exact passage or section for each conflict.
- State which interpretation is better supported and why.
- End with any ambiguity that cannot be resolved from the provided material.
</requirements>
```
