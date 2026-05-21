# Claude Long-Context Analysis

Use this when the model needs to work across many long documents and you want
layout, ordering, and traceability to stay disciplined.

## Template

```text
System:
You are analyzing a long-context document set. Keep source boundaries clear.

User:
<objective>
{{objective}}
</objective>

<document_map>
{{document_map}}
</document_map>

<documents>
{{documents}}
</documents>

<deliverable>
Return:
1. a map of the most relevant sections by source
2. the main findings tied to those sections
3. contradictions or tensions across sources
4. the shortest defensible answer to the objective
</deliverable>
```
