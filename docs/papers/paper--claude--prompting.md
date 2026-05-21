# Writing Optimal Prompts for Claude

Research Review | Claude Prompting | May 21, 2026

Claude Prompting Research

A literature review and applied framework for prompting the Claude family,
centered on Anthropic's current documentation and situated within the broader
prompt-engineering literature.

- **Manuscript type:** Research-style review and applied framework.
- **Prepared for:** Independent technical review across beginner, engineering,
  and research audiences.
- **Author:** Adrian Paredez.

## Manuscript Details

- **Focus:** Prompt design for Anthropic's Claude family
- **Method:** Targeted literature review with vendor-document synthesis
- **Reference mode:** APA-style citations with clickable web references
- **Revision date:** May 21, 2026

## Review Focus

- **Core Question:** What prompt architecture most reliably improves Claude
  behavior for a defined task and evaluation target?
- **Evidence Base:** Anthropic documentation, foundational prompting papers,
  recent prompt-sensitivity studies, and work on automatic prompt optimization.
- **Audience:** Beginners, prompt engineers, and researchers.
- **Working Claim:** For Claude, prompt quality is mostly a task-contract
  problem, not a wording-trick problem.

## Abstract

Optimal Claude prompting is not the hunt for a magic string. It is the problem
of writing the lightest prompt architecture that reliably hits a defined
evaluation target for a specific task, model configuration, and operating
context. Anthropic's current guidance points in a fairly consistent direction:
state the task plainly, define the output contract, structure complex prompts
with XML, use examples only when they buy control, and iterate against
evaluations (Anthropic, n.d.-c; Anthropic, n.d.-d; Anthropic, n.d.-b). The
broader literature supports the underlying mechanism while trimming the hype.
Few-shot prompting, chain-of-thought prompting, and verification can help under
the right conditions, but prompt sensitivity remains real, especially when the
task itself is underspecified (Brown et al., 2020; Wei et al., 2022; Kojima et
al., 2022; Pecher et al., 2026; Chatterjee et al., 2024). For Claude, the
practical implication is simple: prompt design is really interface design.
System prompts, user turns, examples, reasoning controls, and evaluation
procedures work as one stack, not as isolated tricks.

**Keywords:** Claude, Anthropic, prompt engineering, literature review, few-shot
prompting, chain-of-thought, adaptive thinking, XML prompting, evaluation.

## Contents

1. Introduction
2. Scope and Method
3. Literature Review
4. Claude-Specific Evidence
5. Discussion
6. Applied Framework
7. Prompt Templates
8. Audience-Specific Implications
9. Limitations
10. Conclusion
11. References

For Claude, prompt quality lives in the specification. A good prompt gives the
model enough structure to hit the target behavior without dragging in
unnecessary scaffolding.

## 1. Introduction

Prompt engineering used to be treated like lore: try a clever phrasing, hope the
model cooperates, and save the incantation if it works. The literature has made
that story harder to sustain. Early work showed that large language models can
be steered with instructions and examples (Brown et al., 2020), later work
showed that reasoning prompts can help in the right regimes (Wei et al., 2022;
Kojima et al., 2022), and newer papers add the missing discipline: when the task
is underspecified, apparent prompt magic often cashes out as missing task
definition (Chatterjee et al., 2024; Pecher et al., 2026).

For Claude, the story becomes more concrete. Anthropic's current documentation
amounts to a fairly opinionated prompting stack: define success first, write
explicit instructions, separate prompt parts with XML, add examples only when
they buy control, keep system role distinct from user task, and use
Claude-native thinking controls instead of importing every older prompting habit
unchanged (Anthropic, n.d.-c; Anthropic, n.d.-d; Anthropic, n.d.-a).

> The better move is rarely to decorate the prompt. Tighten the spec, then see
> what actually changes in the eval.

## 2. Scope and Method

This review is intentionally Claude-specific. Anthropic's documentation,
retrieved on May 21, 2026, is treated as the primary practical source because
the task here is not generic LLM prompting; it is prompting a moving Claude
family with provider-specific controls, defaults, and recommendations.

The broader academic literature matters in two narrower ways. First, it explains
mechanisms likely to transfer to Claude, such as few-shot prompting, reasoning
traces, self-verification, and automatic prompt optimization. Second, it marks
the limits: prompt sensitivity remains substantial, and some classic prompting
results were established on older model families whose behaviors do not transfer
mechanically to Claude's current adaptive thinking and system-prompt handling
(Wei et al., 2022; Wang et al., 2022; Weng et al., 2022; Pecher et al., 2026; Ma
et al., 2024).

> As of May 21, 2026, Anthropic's main prompting guide describes itself as the
> "single reference" for the latest Claude models and names Claude Opus 4.7,
> Claude Opus 4.6, Claude Sonnet 4.6, and Claude Haiku 4.5 as covered models
> (Anthropic, n.d.-d).

## 3. Literature Review

### 3.1 Foundational prompting results

The contemporary prompt-engineering literature begins with in-context learning.
Brown et al. showed that sufficiently large language models can perform new
tasks from instructions and a small number of examples without gradient updates
(Brown et al., 2020). That finding matters for Claude because it justifies the
continued use of prompt-side control rather than immediate fine-tuning for many
tasks.

A second foundational thread concerns reasoning prompts. Wei et al. demonstrated
that few-shot chain-of-thought prompting can substantially improve complex
reasoning by providing intermediate reasoning exemplars (Wei et al., 2022).
Kojima et al. extended that insight with zero-shot chain-of-thought prompting,
showing that a simple reasoning cue can improve performance even without
handcrafted exemplars (Kojima et al., 2022). Self-consistency and
self-verification then pushed the idea further by demonstrating that reasoning
quality can improve when models generate multiple reasoning paths or explicitly
check candidate answers (Wang et al., 2022; Weng et al., 2022).

### 3.2 Prompt sensitivity and underspecification

The strongest corrective to prompt folklore comes from prompt-sensitivity
research. Chatterjee et al. introduced POSIX as a way to measure prompt
sensitivity and showed that intent-preserving rewrites can still substantially
alter behavior. Their study also found that even one few-shot exemplar often
reduces sensitivity (Chatterjee et al., 2024). Pecher et al. sharpened the
argument by showing that a substantial fraction of observed prompt sensitivity
is attributable to underspecified prompts. Instruction-rich prompts showed lower
variance than sparse, weakly constrained prompts (Pecher et al., 2026).

For Claude prompting, this literature supports a simple but important
proposition: specificity is not decorative verbosity. It is variance control.
Clear task definitions, output contracts, and structured examples reduce the
space in which the model has to guess the user's intent.

### 3.3 Automatic prompt optimization and its limits

A separate research line studies whether prompts can be optimized automatically.
APO, OPRO, Promptbreeder, and DSPy each show that systematic or learned prompt
rewriting can improve task performance under the right conditions (Pryzant et
al., 2023; Yang et al., 2023; Fernando et al., 2023; Khattab et al., 2023).
However, Ma et al. caution that LLM-based prompt optimizers often struggle to
identify the real source of errors and may fail to produce appropriate
refinements in a single step (Ma et al., 2024).

The practical lesson is restrained optimism. Automated prompt improvement is
useful, but only when embedded in an evaluation loop. This aligns closely with
Anthropic's own workflow, which places empirical evaluations upstream of prompt
tuning rather than downstream of it (Anthropic, n.d.-b).

### 3.4 Survey literature and the risk of overgeneralization

Recent surveys organize the prompt-engineering field and are useful as synthesis
documents, but they also reveal a key limitation for Claude-specific work: much
of the literature aggregates results across model families and time periods
(Sahoo et al., 2024; Li et al., 2024). That aggregation is informative for
theory building but weaker for model-specific practice. The current Anthropic
guidance should therefore be interpreted as a model-family update to the broader
literature, rather than as a contradiction of it.

## 4. Claude-Specific Evidence from Anthropic

### 4.1 Start with evaluations, not with clever wording

Anthropic's prompt-engineering overview explicitly assumes that the practitioner
already has a definition of success, a way to test against it, and a first draft
prompt to improve (Anthropic, n.d.-c). The evaluation guide then defines strong
success criteria as specific, measurable, achievable, and relevant (Anthropic,
n.d.-b). This is the most important Claude-specific framing in the documentation
because it shifts prompt engineering from slogan-driven rewriting to measurable
interface design.

### 4.2 Clarity, context, and output contracts are first-order controls

Anthropic's best-practices page emphasizes that Claude responds well to clear,
explicit instructions, that desired output formats and constraints should be
specified directly, and that ordered steps help when completeness matters
(Anthropic, n.d.-d). The same guide also recommends adding contextual motivation
when that context helps the model understand why the instructions matter. This
matches the broader literature on underspecification: clarity and context reduce
guesswork rather than merely making prompts longer.

### 4.3 Examples are reliable, but they must be relevant and structured

Anthropic describes examples as one of the most reliable ways to steer Claude's
output format, tone, and structure, and recommends 3 to 5 relevant, diverse, and
structured examples when examples are warranted (Anthropic, n.d.-d). This lines
up with few-shot prompting research while adding a Claude-specific operational
detail: examples should be wrapped in XML tags so that Claude can distinguish
demonstrations from instructions.

### 4.4 XML is not cosmetic; it is a parsing aid

Anthropic repeatedly recommends XML tags for prompts that combine instructions,
context, examples, and variable inputs. The rationale is explicit: XML helps
Claude parse complex prompts unambiguously and reduces misinterpretation
(Anthropic, n.d.-d). The same guidance extends to prompt templates, where
variables are more effective when wrapped in XML structure (Anthropic, n.d.-a).

### 4.5 System prompts matter more on recent Claude models

Anthropic's current guidance says that setting a role in the system prompt
focuses Claude's behavior and tone and that recent Opus models are more
responsive to the system prompt than earlier versions (Anthropic, n.d.-d). The
same documentation warns that prompts written to force tool or skill use can now
overtrigger on newer models if the language is too aggressive. This is a
Claude-specific reminder that prompt transfer across model generations is not
neutral; old steering language can become too strong.

### 4.6 Claude's reasoning controls update the older CoT story

Anthropic's current best-practices guide makes a model-family-specific claim
that matters for anyone who learned prompting from older chain-of-thought
literature. For Claude Opus 4.6 and Claude Sonnet 4.6, Anthropic recommends
adaptive thinking for workloads that need multi-step reasoning or agentic
behavior and states that adaptive thinking reliably outperforms older
extended-thinking mode in internal evaluations (Anthropic, n.d.-d). It also
recommends starting with general reasoning instructions, such as asking Claude
to think thoroughly, rather than prescribing every reasoning step by hand.

That is not a rejection of chain-of-thought research. It is a refinement. The
classical literature established that reasoning traces can help; Anthropic's
current guidance argues that newer Claude models often generate better reasoning
when given higher-level guidance and model-native thinking controls.

### 4.7 Long-context prompting is layout-sensitive

Anthropic's long-context guidance is unusually concrete. For large inputs, it
recommends placing long-form data near the top of the prompt and the query near
the end, reporting that this arrangement improved response quality by up to 30
percent in Anthropic's tests for complex multi-document inputs (Anthropic,
n.d.-d). It also recommends XML wrappers for multi-document content and
grounding responses in extracted quotes. For Claude work involving retrieval,
research, or document analysis, prompt layout is therefore a major variable, not
a formatting afterthought.

### 4.8 Prompt templates and tools operationalize the workflow

Anthropic's console tooling formalizes prompt engineering as templated,
versioned work. The console docs distinguish fixed prompt content from variable
content, recommend double-braced placeholders for repeated slots, and position
the prompt improver as a structured workflow that extracts examples, adds XML,
and refines reasoning instructions (Anthropic, n.d.-a). The tooling itself is
not the central finding, but it operationalizes Anthropic's theory of prompting:
prompt structure, variable isolation, examples, and evaluations are meant to be
managed as reusable assets.

## 5. Discussion: What Counts as an Optimal Claude Prompt?

Taken together, the literature and Anthropic's documentation support a narrower
and more defensible definition of prompt quality than most online advice. For
Claude, an optimal prompt is not the longest prompt, the sternest prompt, or the
one with the most reasoning scaffolding. It is the prompt architecture that most
reliably meets the evaluation target for the task actually being solved.

| Dimension | Claude-focused implication | Evidence base |
| --- | --- | --- |
| Task fidelity | Define the task and success criteria explicitly before rewriting the prompt. | Anthropic evaluation and overview docs. |
| Variance control | Reduce underspecification with context, structure, and output contracts. | Anthropic best practices; Pecher et al.; Chatterjee et al. |
| Format control | Use XML sections, response schemas, and examples for high-control outputs. | Anthropic best practices; Brown et al. |
| Reasoning quality | Prefer Claude-native thinking controls or high-level reasoning guidance before resorting to rigid hand-written CoT. | Anthropic best practices; Wei et al.; Kojima et al. |
| Long-context performance | Optimize prompt layout, especially document order and query placement. | Anthropic best practices. |
| Maintainability | Treat prompts as templates with fixed and variable layers. | Anthropic console prompting tools; DSPy; prompt optimization literature. |

Two conclusions follow. First, for Claude, prompt optimization is rarely just
wording optimization. It is usually architecture optimization across role, task,
context, examples, variables, reasoning controls, output format, and evaluation.
Second, the choice between minimal and elaborate prompts should be empirical. A
sparse prompt is preferable only if it preserves accuracy and robustness.
Otherwise, it is simply underspecified.

## 6. Applied Framework for Claude Prompt Design

The most useful way to think about a Claude prompt is as a layered interface,
not a one-shot line of prose. The question is what needs to be fixed, what can
stay variable, and what should be measured before the prompt is trusted.

### Layer 1: Evaluation target

State what counts as success and how it will be measured before changing the
prompt.

#### Layer 2: System role

Set the durable behavior, stance, or expertise level in the system prompt, not
in the user task.

#### Layer 3: User task contract

Specify the task, scope, constraints, and acceptable fallback behavior in direct
language.

#### Layer 4: Structured context

Wrap context, documents, examples, and inputs in XML sections to reduce
ambiguity.

#### Layer 5: Examples and reasoning controls

Add examples or thinking guidance only when they improve measured behavior on
the target workload.

#### Layer 6: Output contract

Define the exact response format, length, citation behavior, and verification
expectations.

### 6.1 Design rules derived from the evidence

1. Begin with a baseline zero-shot Claude prompt, then add structure or examples
   only when the eval shows they help.
2. Use the system prompt for role, tone, and durable operating rules; keep
   task-specific content in the user turn.
3. Prefer XML boundaries whenever the prompt contains more than one semantic
   layer.
4. Use few-shot examples to stabilize format, edge-case handling, or domain
   behavior; do not add examples merely because few-shot prompting is
   fashionable.
5. For recent Claude models, prefer adaptive or high-level reasoning guidance
   before imposing a rigid human-authored reasoning script.
6. For long documents, place documents before the question and ground the answer
   in quoted evidence.
7. Store reusable prompts as templates with variables rather than copying and
   editing raw strings.
8. Re-run evaluations after each major prompt revision; keep the version that
   performs best, not the version that sounds best.

## 7. Prompt Templates for Claude

These templates are Claude-specific on purpose. They separate durable role from
live task, use XML where structure helps, and leave room for evaluation-driven
refinement instead of pretending the first draft will be the last draft.

### 7.1 Template A: Beginner-friendly single-task prompt

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
- Answer only using the information that is relevant to the task.
- If the context is insufficient, say exactly: "Insufficient information."
- Keep the response in {{format}}.
</requirements>
```

Use this when the task is narrow and latency matters. It encodes directness,
fallback behavior, and basic output control without overbuilding the prompt.

### 7.2 Template B: Production Claude template with variables

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

This template reflects Anthropic's guidance on XML structure, variable slots,
and long-context ordering. It is the right baseline for research synthesis,
document analysis, or retrieval-grounded tasks.

### 7.3 Template C: Claude prompt with thinking enabled

```text
System:
You are a careful analyst. Use extra reasoning only when it will materially improve answer quality.

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

This template follows Anthropic's current preference for high-level reasoning
guidance and self-checking without forcing a brittle, over-prescribed
chain-of-thought script.

### 7.4 Template D: Researcher template for prompt comparison

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
1. Output
2. Score by rubric criterion
3. Failure modes
4. Recommended prompt change
</deliverable>
```

This template is meant for evaluation loops rather than end-user deployment. It
turns prompt iteration into auditable experimental work.

## 8. Audience-Specific Implications

### 8.1 For beginners

The main beginner error is underexplaining the task and then treating bad
outputs as model failure. The literature and Anthropic docs both suggest a
simpler discipline: describe the task clearly, include the needed context,
specify the desired output, and add examples only if the format or edge cases
remain unstable (Anthropic, n.d.-d; Pecher et al., 2026).

### 8.2 For prompt engineers

Prompt engineers should treat Claude prompts as versioned interfaces. The
practical unit is not a single instruction string but a prompt asset: system
role, user XML structure, variable slots, examples, model settings, and
evaluation set. For Claude specifically, the current evidence favors reusable
templates, explicit XML boundaries, and eval-driven revisions over increasingly
ornate prose (Anthropic, n.d.-a; Anthropic, n.d.-b).

### 8.3 For researchers

Researchers should be cautious about treating Claude prompting results as
provider-agnostic. Anthropic's current guidance on adaptive thinking,
system-prompt responsiveness, and long-context layout indicates that
model-family-specific affordances matter materially. Future prompt research
would benefit from separating general prompting mechanisms from vendor-specific
control surfaces more rigorously (Anthropic, n.d.-d; Sahoo et al., 2024; Li et
al., 2024).

## 9. Limitations

This review has real limits. It is a synthesis of first-party documentation and
prior literature, not a fresh Claude benchmark. That makes it strong on
mechanism and current product guidance, but weaker on independent comparative
measurement across prompt variants.

Second, the paper depends in part on living Anthropic documentation, which may
change after the retrieval date. That matters because Claude prompting guidance
is not static: model generations, system-prompt sensitivity, tool-use behavior,
adaptive thinking recommendations, and long-context advice can all shift over
time. A recommendation that is correct for the documentation retrieved on May
21, 2026 may require revision as Anthropic updates its prompting surface or
introduces new control mechanisms.

Third, part of the academic foundation remains cross-model rather than
Claude-specific. Foundational work on few-shot prompting, chain-of-thought,
self-consistency, and prompt sensitivity is essential for theory, but much of it
was not executed on the exact Claude family covered here. Some transfer claims
are therefore inferential: they are justified by mechanism and by alignment with
Anthropic guidance, but they are not always supported by direct Claude-only
replication in the cited literature.

Fourth, the review does not attempt full coverage of adjacent prompting domains.
It does not substantively cover prompt injection defense, constitutional
prompting as a separate alignment method, multimodal image prompting,
tool-calling benchmark design, or domain-specific optimization for fields such
as law, medicine, or scientific coding. Those omissions are deliberate because
each would require a narrower experimental and methodological treatment than
fits this paper.

Future work should therefore focus on direct Claude benchmarking: structured A/B
prompt tests, model-tier comparisons, adaptive-thinking versus explicit
reasoning comparisons, long-context layout experiments, and robustness checks
across paraphrased prompt variants. That kind of work would turn this review
from a strong design document into a stronger evidence base for Claude-specific
prompt optimization.

## 10. Conclusion

The cleanest answer is also the least romantic. Claude does not need
incantations. It needs a clear specification, explicit structure, selective
examples, model-appropriate reasoning controls, and a way to tell whether the
prompt actually worked.

In practice, treat prompts like interfaces with failure modes. Write the spec,
structure the inputs, choose the lightest mechanism that clears the eval bar,
and keep only the versions that measurably improve behavior.

## References

- Anthropic. (n.d.-a). *Console prompting tools*. Claude API Docs. Retrieved May
  21, 2026, from
  <https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-tools>
- Anthropic. (n.d.-b). *Define success criteria and build evaluations*. Claude
  API Docs. Retrieved May 21, 2026, from
  <https://platform.claude.com/docs/en/test-and-evaluate/develop-tests>
- Anthropic. (n.d.-c). *Prompt engineering overview*. Claude API Docs. Retrieved
  May 21, 2026, from
  <https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview>
- Anthropic. (n.d.-d). *Prompting best practices*. Claude API Docs. Retrieved
  May 21, 2026, from
  <https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices>
- Brown, T. B., Mann, B., Ryder, N., et al. (2020). *Language models are
  few-shot learners*. arXiv. <https://doi.org/10.48550/arXiv.2005.14165>
- Chatterjee, A., Renduchintala, H. S. V. N. S. K., Bhatia, S., & Chakraborty,
  T. (2024). *POSIX: A prompt sensitivity index for large language models*.
  arXiv. <https://doi.org/10.48550/arXiv.2410.02185>
- Fernando, C., Banarse, D., Michalewski, H., Osindero, S., & Rocktaschel, T.
  (2023). *Promptbreeder: Self-referential self-improvement via prompt
  evolution*. arXiv. <https://doi.org/10.48550/arXiv.2309.16797>
- Khattab, O., Singhvi, A., Maheshwari, P., Zhang, Z., Santhanam, K.,
  Vardhamanan, S., Haq, S., Sharma, A., Joshi, T. T., Moazam, H., Miller, H.,
  Zaharia, M., & Potts, C. (2023). *DSPy: Compiling declarative language model
  calls into self-improving pipelines*. arXiv.
  <https://doi.org/10.48550/arXiv.2310.03714>
- Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). *Large
  language models are zero-shot reasoners*. arXiv.
  <https://doi.org/10.48550/arXiv.2205.11916>
- Li, H., Leung, J., & Shen, Z. (2024). *Towards goal-oriented prompt
  engineering for large language models: A survey*. arXiv.
  <https://doi.org/10.48550/arXiv.2401.14043>
- Ma, R., Wang, X., Zhou, X., Li, J., Du, N., Gui, T., Zhang, Q., & Huang, X.
  (2024). *Are large language models good prompt optimizers?* arXiv.
  <https://doi.org/10.48550/arXiv.2402.02101>
- Pecher, B., Spiegel, M., Belanec, R., & Cegin, J. (2026). *Revisiting prompt
  sensitivity in large language models for text classification: The role of
  prompt underspecification*. arXiv. <https://doi.org/10.48550/arXiv.2602.04297>
- Pryzant, R., Iter, D., Li, J., Lee, Y. T., Zhu, C., & Zeng, M. (2023).
  *Automatic prompt optimization with "gradient descent" and beam search*.
  arXiv. <https://doi.org/10.48550/arXiv.2305.03495>
- Sahoo, P., Singh, A. K., Saha, S., Jain, V., Mondal, S., & Chadha, A. (2024).
  *A systematic survey of prompt engineering in large language models:
  Techniques and applications*. arXiv.
  <https://doi.org/10.48550/arXiv.2402.07927>
- Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A.,
  & Zhou, D. (2022). *Self-consistency improves chain of thought reasoning in
  language models*. arXiv. <https://doi.org/10.48550/arXiv.2203.11171>
- Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E.,
  Le, Q., & Zhou, D. (2022). *Chain-of-thought prompting elicits reasoning in
  large language models*. arXiv. <https://doi.org/10.48550/arXiv.2201.11903>
- Weng, Y., Zhu, M., Xia, F., Li, B., He, S., Liu, S., Sun, B., Liu, K., & Zhao,
  J. (2022). *Large language models are better reasoners with
  self-verification*. arXiv. <https://doi.org/10.48550/arXiv.2212.09561>
- Yang, C., Wang, X., Lu, Y., Liu, H., Le, Q. V., Zhou, D., & Chen, X. (2023).
  *Large language models as optimizers*. arXiv.
  <https://doi.org/10.48550/arXiv.2309.03409>

Note on style: this document uses APA-style author-year citations and an
alphabetized clickable reference list. Because Anthropic's documentation is a
living source, retrieval dates are included for those entries.
