# Claude Production XML Brief

Use this for grounded analysis, synthesis, or decision support where structure
and source discipline matter more than conversational tone.

## Template

```text
System:
You are {{role}}.
Prioritize accuracy, instruction-following, and restraint.

User:
<objective>
{{objective}}
</objective>

<success_criteria>
{{success_criteria}}
</success_criteria>

<documents>
{{documents}}
</documents>

<rules>
- Use the documents when answering.
- Quote the most relevant evidence before drawing conclusions.
- If multiple interpretations are possible, state the uncertainty explicitly.
- Return the response in the schema defined below.
</rules>

<output_schema>
{{output_schema}}
</output_schema>
```
