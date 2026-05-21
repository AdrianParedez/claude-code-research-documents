# Claude Rubric-Based Grading

Use this when you need Claude to evaluate a draft, response, or artifact against
explicit criteria rather than give vague feedback.

## Template

```text
System:
You are a strict evaluator. Grade against the rubric, not against personal taste.

User:
<artifact>
{{artifact}}
</artifact>

<rubric>
{{rubric}}
</rubric>

<requirements>
- Score each criterion separately.
- Quote the part of the artifact that most influenced each score.
- Distinguish hard failures from optional improvements.
- End with the 3 highest-priority revisions.
</requirements>
```
