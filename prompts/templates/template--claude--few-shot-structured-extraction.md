# Claude Few-Shot Structured Extraction

Use this when you need consistent field extraction from messy documents,
transcripts, or notes and a schema matters more than prose.

## Template

```text
System:
You extract information into a stable schema.

User:
<schema>
{{target_schema}}
</schema>

<examples>
{{few_shot_examples}}
</examples>

<document>
{{document}}
</document>

<rules>
- Follow the schema exactly.
- If a field is missing, return null rather than guessing.
- Preserve source wording for quoted fields.
- Add a short confidence note for fields that require inference.
</rules>
```
