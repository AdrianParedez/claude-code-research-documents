# Claude Code: A Deep Research Review of Anthropic's Agentic Coding System

Deep Research Paper | Claude Code Systems | May 21, 2026

Claude Code Systems Research

A research-style review of Claude Code’s current architecture, product
evolution, safety model, extensibility, deployment options, economics, and
operating practices.

- **Manuscript type:** Deep web research review and applied systems analysis.
- **Prepared for:** Technical readers evaluating Claude Code as a coding
  environment, workflow layer, or organizational platform.
- **Author:** Adrian Paredez.

## Manuscript Details

- **Focus:** Anthropic Claude Code across terminal, IDE, desktop, browser, and
  automation surfaces
- **Method:** Primary-source synthesis of official docs, engineering posts,
  product pages, and release-era materials
- **Reference mode:** APA-style citations with clickable references
- **Revision date:** May 21, 2026

## Review Focus

- **Core Question:** What should Claude Code be understood as: a chatbot
  wrapper, a coding tool, or a governed agent system?
- **Evidence Base:** Official Claude Code documentation, Anthropic product and
  engineering posts, and current operational guidance.
- **Audience:** Developers, engineering managers, AI platform owners, and
  researchers studying agentic coding systems.
- **Working Claim:** Claude Code works more like an operating stack around
  Claude models than like a thin CLI around chat.

## Abstract

Claude Code started as a terminal-centric coding agent launched alongside Claude
3.7 Sonnet on February 24, 2025, and has since expanded into a broader system
spanning terminal, IDE, desktop, browser, GitHub, and programmable SDK surfaces
(Anthropic, 2025a; Claude Code Docs, n.d.-h; Anthropic, 2025b; Anthropic,
2025c). The change is larger than surface expansion. Current documentation shows
a full operating stack: Claude models coupled to a tool harness,
context-management layer, permissions framework, and extensibility system built
from memory files, settings, skills, subagents, hooks, MCP, and the Claude Agent
SDK (Claude Code Docs, n.d.-i; Claude Code Docs, n.d.-m; Claude Code Docs,
n.d.-n; Claude Code Docs, n.d.-f; Claude Code Docs, n.d.-j; Claude Code Docs,
n.d.-l). This paper argues that Claude Code should be treated as an operating
stack for software work. Once framed that way, the relevant questions are no
longer only model capability, but also permission design, context economics,
verification loops, deployment choices, and organizational governance.

**Keywords:** Claude Code, Anthropic, agentic coding, software agents, developer
tooling, AI safety, MCP, coding workflow automation, context management.

## Contents

1. Introduction
2. Scope and Method
3. Product Evolution
4. System Architecture
5. Configuration and Extensibility
6. Safety, Permissions, and Governance
7. Economics and Deployment
8. Adoption and Organizational Impact
9. Operational Guidance
10. Evidence Quality and Comparative Confidence
11. Limitations and Open Questions
12. Conclusion
13. References

On first pass Claude Code looks like a terminal product. The source material
describes something broader: a model wrapped in tools, policy, context
management, and multiple execution surfaces that together turn language-model
capability into software work.

## 1. Introduction

Coding agents change the practical unit of evaluation. The question is no longer
whether a model can answer a programming question in one shot. The question is
whether a system can gather context, take actions across files and tools, verify
what it changed, operate under permissions, and still remain steerable by a
human. Claude Code is Anthropic's answer to that systems problem.

Official docs now describe Claude Code as an agentic coding tool that reads
repositories, edits files, runs commands, and integrates across terminal, IDE,
desktop, and browser surfaces (Claude Code Docs, n.d.-h). Anthropic's product
framing goes further, calling it an "agentic coding system" and implying that
the relevant job is no longer token-level completion but project-level
delegation (Anthropic, 2026d).

> A better mental model is to treat Claude Code as an operating environment for
> model labor, not as a chat interface with extra buttons.

## 2. Scope and Method

This review is based primarily on official Claude Code documentation and
Anthropic-authored product and engineering posts retrieved on May 21, 2026.
Those sources are prioritized because Claude Code is a fast-moving product whose
behavior depends heavily on implementation details, deployment surface, and
permissions policy. Secondary commentary is useful for orientation, but not
strong enough for core technical claims here.

The synthesis is organized around six practical questions: how Claude Code
evolved; how it works architecturally; how it manages context and permissions;
how it is extended and automated; how it is deployed and priced; and what
current evidence suggests about adoption, benefits, and risks. Where the paper
makes evaluative claims, such as treating Claude Code as an operating stack,
those are explicit inferences from the source set rather than vendor phrasing
copied wholesale.

> Date clarity matters here. Claude Code was announced on **February 24, 2025**;
> major autonomy and IDE updates were announced on **September 29, 2025**;
> Claude Code on the web was announced on **October 20, 2025**; and auto mode
> was described in detail on **March 25, 2026** (Anthropic, 2025a; Anthropic,
> 2025b; Anthropic, 2025c; Anthropic, 2026a).

## 3. Product Evolution

### 3.1 From research preview to multi-surface system

Claude Code was introduced on February 24, 2025 alongside Claude 3.7 Sonnet as a
limited research preview for agentic coding in the terminal (Anthropic, 2025a).
By the current documentation, that framing has expanded considerably: Claude
Code is now available across terminal, IDE, desktop app, and browser surfaces
(Claude Code Docs, n.d.-h).

### 3.2 The 2025 expansion cycle

Anthropic’s late-2025 materials show a rapid expansion in surface area and
autonomy. On September 29, 2025, Anthropic announced a native VS Code extension,
checkpoints, a refreshed terminal interface, and Claude Sonnet 4.5 as the new
default model in Claude Code (Anthropic, 2025b). On October 20, 2025, Anthropic
announced Claude Code on the web, where coding sessions run on Anthropic-managed
cloud infrastructure and can be launched in parallel across repositories
(Anthropic, 2025c).

On August 20, 2025, Anthropic also introduced premium-seat packaging and admin
controls for business plans, tying Claude Code more explicitly to enterprise
seat management and observability (Anthropic, 2025d). Together, these changes
suggest a product transition from single-user CLI tool toward a broader
developer platform.

### 3.3 The 2026 safety shift

The March 25, 2026 engineering post on auto mode is particularly important
because it reveals that Anthropic is now optimizing capability together with the
autonomy-security tradeoff. The post explicitly positions auto mode as a middle
ground between manual prompts and `--dangerously-skip-permissions`, using
classifiers to reduce approval fatigue while still blocking unsafe actions
(Anthropic, 2026a).

| Date | Event | Strategic significance |
| --- | --- | --- |
| February 24, 2025 | Claude Code announced alongside Claude 3.7 Sonnet | Initial terminal-first research preview for agentic coding |
| August 20, 2025 | Business-plan admin controls and premium seats | Moves product toward organizational roll-out and governance |
| September 29, 2025 | VS Code extension, checkpoints, refreshed terminal, Sonnet 4.5 default | Expands usability and longer-task handling |
| October 20, 2025 | Claude Code on the web | Adds cloud execution and multi-session parallelism |
| March 25, 2026 | Auto mode engineering write-up | Formalizes classifier-mediated autonomy as a product direction |

## 4. System Architecture

### 4.1 The agentic loop

Claude Code’s own documentation defines its workflow as an agentic loop with
three phases: gather context, take action, and verify results (Claude Code Docs,
n.d.-i). This matters because it formalizes Claude Code as a harness around the
model, not the model itself. The model performs reasoning, but Claude Code
supplies tools, context management, and execution environment.

The strongest implication is architectural. Claude Code is effectively a
developer-facing orchestration layer that turns Claude models into
task-completing agents by binding them to filesystem, shell, search, editing,
web, and integration tools.

### 4.2 Surfaces and environments

The current overview page lists terminal, IDE, desktop app, and browser as
supported interfaces (Claude Code Docs, n.d.-h). The browser experience splits
further into web-hosted sessions and remote control modes with different
permission behaviors (Claude Code Docs, n.d.-k). This means “Claude Code” now
names a family of execution contexts, not a single UI.

### 4.3 Context is a first-class systems constraint

Claude Code’s documentation is unusually explicit that context window management
is central to performance. Its context includes conversation history, file
contents, command output, CLAUDE.md, auto memory, skills, and system
instructions; when the window fills, Claude Code compacts and summarizes the
session (Claude Code Docs, n.d.-i; Claude Code Docs, n.d.-b).

The best-practices page sharpens the point: context is the most important
resource to manage, because performance degrades as it fills (Claude Code Docs,
n.d.-a). For practical use, this means that good Claude Code operation is partly
a context-economics problem.

### 4.4 Prompt caching is part of the operating model

Claude Code manages prompt caching automatically and layers requests as system
prompt, project context, and conversation (Claude Code Docs, n.d.-c). The
documentation also states that model switches, MCP tool-set changes, compaction,
and upgrades can invalidate the cache, making the next turn slower and more
expensive. The operational conclusion is that Claude Code’s economics are tied
not only to model choice but to workflow discipline.

> Claude Code’s architecture is unusually transparent about a fact many AI
> products hide: the agent’s competence is inseparable from how context is
> loaded, cached, trimmed, and reintroduced.

## 5. Configuration and Extensibility

### 5.1 Settings, memory, and precedence

Claude Code’s configuration model is layered. The settings documentation lists
memory files (`CLAUDE.md`), settings JSON, skills, MCP servers, and a precedence
order from higher-level managed settings down to project or user configuration
(Claude Code Docs, n.d.-m). This is important because Claude Code is designed to
be shaped structurally, not only by live prompts.

### 5.2 Skills and slash commands

Slash commands are not merely interface sugar. The slash-commands page shows
that Claude Code bundles prompt-based skills such as `/simplify`, `/batch`,
`/debug`, `/loop`, and `/claude-api`, and also supports custom commands as
reusable prompt assets (Claude Code Docs, n.d.-o). This design blurs the line
between “commands” and “prompt programs.”

### 5.3 Subagents, hooks, and MCP

Three extensibility features define Claude Code’s deeper agentic profile. First,
subagents allow Claude to delegate specialized work into separate contexts,
improving modularity and conserving main-session context (Claude Code Docs,
n.d.-n). Second, hooks expose lifecycle events such as `PreToolUse`,
`PostToolUse`, `SubagentStart`, and `SubagentStop`, giving teams a way to
instrument and constrain execution (Claude Code Docs, n.d.-f). Third, MCP
connects Claude Code to external tools and data sources, allowing it to act
directly on issue trackers, databases, monitoring systems, and design tools
rather than relying on pasted context (Claude Code Docs, n.d.-j).

### 5.4 Agent SDK and GitHub Actions

The Agent SDK extends Claude Code beyond the interactive product. The SDK is
available in TypeScript and Python, and the TypeScript package can bundle a
native Claude Code binary as an optional dependency (Claude Code Docs, n.d.-l).
GitHub Actions builds directly on this SDK, and the current docs note that
GitHub Actions default to Sonnet while allowing explicit configuration of Opus
4.7 (Claude Code Docs, n.d.-g).

#### Memory layer

`CLAUDE.md` and auto memory store durable project instructions and context.

#### Prompt-program layer

Skills and slash commands turn reusable prompts into interface-level behaviors.

#### Delegation layer

Subagents split work into narrower contexts and specialized roles.

#### Policy layer

Hooks and permissions allow preflight checks, audits, retries, and
organization-specific constraints.

#### Integration layer

MCP connects the agent to external systems, reducing manual copy/paste
workflows.

#### Automation layer

The Agent SDK and GitHub Actions make Claude Code programmable beyond the REPL.

## 6. Safety, Permissions, and Governance

### 6.1 Default posture: read-only and explicit approvals

Claude Code’s security documentation states that it uses strict read-only
permissions by default and asks for approval before additional actions such as
editing files, running tests, or executing commands (Claude Code Docs, n.d.-p).
This is a stronger operational claim than generic “human-in-the-loop” language
because it maps directly onto tool execution.

### 6.2 Permission modes as workflow primitives

The permission-modes documentation makes clear that Claude Code’s modes are not
cosmetic. They define different execution contracts: `default`, `acceptEdits`,
`plan`, `auto`, `dontAsk`, and `bypassPermissions` (Claude Code Docs, n.d.-k).
Particularly notable is the distinction between `acceptEdits`, which
auto-approves in-scope file changes, and `auto`, which delegates higher-risk
approvals to classifiers.

### 6.3 Auto mode: classifier-mediated autonomy

Anthropic’s March 25, 2026 engineering post provides rare quantitative detail
about an agent-safety mechanism in production. Auto mode uses a prompt-injection
probe on tool outputs and a transcript classifier on actions. Anthropic reports
that Claude Code users approve 93% of permission prompts anyway, which motivated
the feature, and that the deployed auto-mode pipeline reached a 0.4% false
positive rate, a 17% false negative rate on real overeager actions, and a 5.7%
false negative rate on synthetic exfiltration tasks (Anthropic, 2026a).

That evidence supports a specific interpretation: auto mode is not a guarantee
of safety, but a risk management layer that is substantially safer than fully
bypassing permissions while still reducing prompt fatigue.

### 6.4 Sandboxing and safer autonomy

Anthropic’s October 20, 2025 engineering post on sandboxing adds another layer.
The company reports that sandboxing, combining filesystem and network isolation,
reduced permission prompts by 84% in internal usage (Anthropic, 2025e). The same
post emphasizes that effective sandboxing requires both kinds of isolation. This
is one of the clearest product signals that Anthropic is trying to make higher
autonomy compatible with tighter boundaries.

### 6.5 Data usage and privacy posture

The data-usage page adds nuance that many product summaries omit. Consumer
accounts may be subject to five-year retention when users allow data use for
model improvement, or 30-day retention when they do not; commercial users have a
standard 30-day retention period, and zero data retention is available for
Claude Code on Claude for Enterprise (Claude Code Docs, n.d.-d). The same page
also states that local Claude Code stores session transcripts in plaintext under
`~/.claude/projects/` for 30 days by default to support resumption.

### 6.6 IDE integration creates additional context flows

The VS Code integration documentation is explicit that the extension shares
current editor selection and active file path with Claude, and that the
extension runs a local MCP server to power diffs, selection context, and other
IDE features (Claude Code Docs, n.d.-e). This is operationally important because
it means IDE convenience features also change the boundary of what context is
automatically forwarded to the model.

## 7. Economics and Deployment

### 7.1 Usage and cost profile

The costs documentation reports an average of roughly $6 per developer per day,
with 90% of users remaining under $12 per day, and notes that team usage with
Sonnet 4 averages roughly $100–200 per developer per month, though with large
variance (Claude Code Docs, n.d.-c2). That makes Claude Code less like a flat
subscription utility and more like a managed compute budget.

### 7.2 Authentication and provider options

The authentication docs show that Claude Code currently supports multiple access
paths: Claude Pro or Max via Claude.ai login; Claude for Teams or Enterprise;
Claude Console; and cloud-provider paths including Amazon Bedrock, Google Vertex
AI, and Microsoft Foundry (Claude Code Docs, n.d.-q). The enterprise deployment
overview similarly compares provider differences across authentication, billing,
and monitoring (Claude Code Docs, n.d.-r).

### 7.3 Local, cloud, and containerized execution

Claude Code now spans at least three deployment patterns: local execution on
developer machines, cloud execution on Anthropic-managed infrastructure for
Claude Code on the web, and dev-container-style isolation for more controlled
unattended operation (Claude Code Docs, n.d.-s; Anthropic, 2025c). The
dev-container documentation is careful to warn that even there,
`--dangerously-skip-permissions` does not eliminate all exfiltration risk for
malicious repositories (Claude Code Docs, n.d.-s).

## 8. Adoption and Organizational Impact

Anthropic's product materials position Claude Code as a team-level force
multiplier, not merely a faster autocomplete. The product page claims that a
majority of Anthropic's own code is now written by Claude Code and highlights
examples such as Stripe rolling it out to 1,370 engineers, Ramp cutting incident
investigation time by 80%, Wiz migrating a 50,000-line Python library to Go in
roughly 20 hours of active development, and Rakuten reducing feature delivery
time from 24 working days to 5 (Anthropic, 2026d).

These are vendor-supplied examples, so they should not be read like neutral
benchmark studies. They are still useful because they show the intended
organizational use case clearly: Claude Code is being framed as a workload
reallocation layer across engineering and adjacent technical functions rather
than as a code suggestion widget.

The bigger organizational implication is a shift in where engineering judgment
sits. As agents absorb more implementation work, humans move further toward
scoping, review, sequencing, and exception handling.

## 9. Operational Guidance

### 9.1 What the docs recommend in practice

Claude Code’s best-practices and how-it-works pages consistently recommend a
specific operating style: give Claude a way to verify its work, explore before
implementing, be specific about goals and context, delegate rather than
micromanage, use subagents where useful, and manage context aggressively (Claude
Code Docs, n.d.-a; Claude Code Docs, n.d.-i).

### 9.2 A practical operating model

1. Start new or risky work in `plan` mode or with read-only exploration.
2. Move durable team instructions into `CLAUDE.md` rather than repeating them in
   chat.
3. Keep sessions narrow enough that context remains high quality; compact at
   natural boundaries.
4. Use subagents for research-heavy branches of work to avoid polluting the main
   context window.
5. Use `acceptEdits` for low-risk iteration and `auto` only when interruption
   costs are high enough to justify classifier-mediated autonomy.
6. Treat MCP, hooks, and IDE integrations as trust-boundary changes, not
   convenience-only features.
7. Prefer verification-rich prompts such as “fix and run tests until green” over
   purely generative prompts.
8. For long-running or unattended jobs, consider containers or cloud execution
   with explicit policy design.

### 9.3 Representative prompt patterns

```text
> explore this repository and produce a plan, but do not edit anything yet

> implement the bug fix, run the affected tests, and stop if you need a credential or production access

> use a subagent to research the auth flow, summarize findings, then propose the smallest safe change

> review the diff against main for security, migration risk, and test gaps
```

These patterns align with Claude Code’s own guidance because they bind the agent
to verification targets, explicit constraints, and modular work.

## 10. Evidence Quality and Comparative Confidence

Not every Claude Code claim deserves the same confidence. The current source set
strongly supports descriptions of product surfaces, configuration layers,
permission modes, and documented safety mechanisms, but it is thinner on
independent outcome benchmarking and on claims that appear only in
marketing-style materials. Reading the system well means separating mechanical
facts from directional but less verified claims.

One useful asymmetry in the source set is that Anthropic’s failure analysis is
often more probative than its promotional language. The April 23, 2026
postmortem identifies dated product-layer regressions and plausible mechanisms
for degraded coding quality, while the auto-mode engineering write-up offers
concrete internal safety metrics and operating constraints (Anthropic, 2026b;
Anthropic, 2026a). Those sources are still first-party, but they are
analytically stronger than broad adoption claims because they expose conditions,
tradeoffs, and failure modes rather than only outcomes.

| Claim Category | What This Paper Can Say With Confidence | Confidence | Main Evidentiary Gap |
| --- | --- | --- | --- |
| Documented architecture and configuration behavior | Claude Code is a layered coding-agent system with explicit permissions, settings, context controls, extensibility hooks, SDK surfaces, and multiple deployment modes (Claude Code Docs, n.d.-h; Claude Code Docs, n.d.-i; Claude Code Docs, n.d.-m; Claude Code Docs, n.d.-j; Claude Code Docs, n.d.-l). | **High** | Docs can change quickly, and some implementation details remain abstracted. |
| Safety controls and failure analysis | Anthropic has published unusually specific internal evidence on auto-mode refusal behavior, exfiltration filtering, and real product regressions affecting coding performance (Anthropic, 2026a; Anthropic, 2026b; Claude Code Docs, n.d.-k). | **Moderate to High** | The evidence is first-party and not fully reproduced on external task distributions. |
| Cost and deployment guidance | The product clearly exposes cost-sensitive mechanisms such as model choice, prompt caching, compaction, session duration, and multiple execution surfaces (Claude Code Docs, n.d.-c2; Claude Code Docs, n.d.-c; Claude Code Docs, n.d.-s). | **Moderate** | There is little longitudinal public evidence showing how these costs behave across large teams over time. |
| Adoption and productivity outcomes | Anthropic is positioning Claude Code as a team-scale agentic workflow product and reports substantial customer wins (Anthropic, 2026d). | **Moderate to Low** | The available examples are vendor-selected and do not expose matched baselines, repo conditions, or failure cases. |
| Comparative superiority versus other coding agents | This paper cannot responsibly claim that Claude Code is categorically best-in-class. | **Low / Unresolved** | No matched, independent benchmark in this review compares Claude Code against peers under shared repositories, permissions, and verification rules. |
| Independent external validation | Independent evidence exists only in partial or indirect form within this paper’s source set. | **Low** | The literature and documentation available here are dominated by first-party materials rather than third-party audits or controlled studies. |

In comparative terms, the strongest defensible claim is that Claude Code is now
a richly configurable, policy-bearing coding-agent system. The weakest
defensible claim is that it is the best coding agent overall. The first
proposition is directly supported by the observable product architecture; the
second would require side-by-side evaluation against systems such as Codex,
Cursor, Cline, and similar agents under shared repositories, equalized
permissions, and common success criteria.

> Practical reading rule: trust the architectural and configuration claims most;
> treat productivity, safety-generalization, and competitive-superiority claims
> as conditional on source type, evaluation design, and version date.

## 11. Limitations and Open Questions

The evidence-quality discussion already points to the main limitation: this
review rests on uneven source types. Claude Code is a fast-moving product, so
the most current details live in first-party docs and engineering posts. That
gives the paper strong mechanical specificity, but it also means some
conclusions are better read as well-supported system interpretation than as
finalized, independently validated benchmarks.

The second limitation is temporal instability. Claude Code’s behavior can shift
materially at the product layer even when the underlying model family remains
recognizable. Anthropic’s April 23, 2026 postmortem is especially important here
because it documents three separate product-layer degradations: a default
reasoning-effort change, a context-management bug that dropped prior reasoning
after long idle periods, and a system-prompt change that reduced coding quality
(Anthropic, 2026b). This means any static paper about Claude Code has a built-in
shelf-life problem. A claim that is accurate for one version of the harness, one
default effort level, or one system-prompt regime may become stale after product
updates.

The third limitation is attribution. Claude Code is not a single variable. Its
observed behavior is the combined result of base model capability,
reasoning-effort defaults, tool availability, permission mode, context loading,
cache behavior, extension state, MCP topology, and system-prompt policy. Because
these layers interact, this paper cannot cleanly isolate how much value comes
from the underlying Claude models versus the Claude Code harness itself. In
practical terms, a user may experience “Claude Code quality” as one thing, while
the causal source could actually be model choice, context compaction, cache
invalidation, extension behavior, or permission configuration (Claude Code Docs,
n.d.-i; Claude Code Docs, n.d.-c; Claude Code Docs, n.d.-m).

The fourth limitation is deployment heterogeneity. Claude Code now exists across
local terminal sessions, IDE integrations, desktop surfaces, browser-based cloud
sessions, GitHub Actions, and SDK-based automation. These surfaces do not expose
identical affordances, permission modes, data flows, or trust boundaries (Claude
Code Docs, n.d.-h; Claude Code Docs, n.d.-k; Claude Code Docs, n.d.-e; Claude
Code Docs, n.d.-d). As a result, any generalized statement about “how Claude
Code works” compresses meaningful differences between environments. Advice that
is sound for a local terminal session may be incomplete or misleading for cloud
execution, remote control, or CI.

The fifth limitation is comparative scope. This paper does not independently
benchmark Claude Code against competing coding agents, nor does it evaluate the
same task across multiple tools under matched repository, permission, and
verification settings. It therefore cannot answer whether Claude Code is the
best available coding agent in an absolute sense. At most, it can describe
Claude Code’s current design, claims, and operating model with reasonable
precision.

### 11.1 Open Questions

Several research questions remain open even after reading the current
documentation closely.

1. **How well does auto mode generalize outside Anthropic’s own task
   distribution?** Anthropic’s engineering write-up gives unusually concrete
   safety numbers for auto mode, but those numbers come from internal traffic,
   curated overeager actions, and synthetic exfiltration tasks (Anthropic,
   2026a). It remains unclear how those results transfer to enterprise
   environments with very different repos, shell tooling, secrets layouts, and
   operational norms.
2. **What is the right unit of evaluation for coding agents?** Claude Code’s own
   materials point toward end-to-end task completion rather than one-shot answer
   quality, but the field still lacks stable standards for comparing agentic
   coding systems across permissions, verification loops, and human steering
   intensity.
3. **How much of Claude Code’s advantage is workflow discipline rather than
   model strength?** The docs consistently recommend exploration, verification,
   context management, subagents, and durable instructions in `CLAUDE.md`
   (Claude Code Docs, n.d.-a; Claude Code Docs, n.d.-i). An open question is
   whether observed gains come primarily from the Claude models, from this
   harness and workflow structure, or from the interaction between the two.
4. **How should organizations govern extensibility?** MCP, hooks, custom skills,
   subagents, and IDE bridges increase power but also widen the policy surface
   (Claude Code Docs, n.d.-f; Claude Code Docs, n.d.-j; Claude Code Docs,
   n.d.-e). There is still no widely accepted governance pattern for deciding
   which extensions should be centrally managed, locally configurable, or
   prohibited.
5. **What is the long-run economics of context-heavy agentic work?** Claude
   Code’s costs depend not only on model pricing, but on cache behavior, session
   length, context invalidation, model switching, and compaction timing (Claude
   Code Docs, n.d.-c2; Claude Code Docs, n.d.-c). More longitudinal evidence is
   needed to understand whether the productivity gains remain robust once these
   costs are managed across large teams.
6. **How much surface-specific divergence is acceptable before “Claude Code”
   becomes several products rather than one?** Browser sessions, local sessions,
   IDE sessions, and SDK-driven automations already differ in permissions,
   execution location, and data flow (Claude Code Docs, n.d.-h; Claude Code
   Docs, n.d.-d; Claude Code Docs, n.d.-q). A practical research question is
   whether users and evaluators should treat them as one unified system or as a
   family of related but distinct operating modes.

The strongest next step for research would be independent, repository-level
benchmarking across permission modes, deployment surfaces, and governance
patterns. The strongest next step for practice would be to document which Claude
Code configuration layers are treated as product defaults, which are treated as
organizational policy, and which remain intentionally local to individual
developers.

## 12. Conclusion

Claude Code functions as a full coding system. The core model matters, but so do
the agentic loop, tool harness, configuration stack, context-management
strategy, deployment surface, permission model, and safety controls. Calling it
"just a CLI for Claude" misses both the architecture that makes it useful and
the governance layers that make it operable.

The strongest conclusion from the current source set is that software tooling is
shifting from response generation toward managed delegation. The durable
technical question is no longer whether a model can write code. It is under what
policies, contexts, and verification loops a coding agent can be trusted to do
meaningful software work.

## References

- Anthropic. (2025d, August 20). *Claude Code and new admin controls for
  business plans*.
  <https://www.anthropic.com/news/claude-code-on-team-and-enterprise>
- Anthropic. (2025b, September 29). *Enabling Claude Code to work more
  autonomously*.
  <https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously>
- Anthropic. (2025a, February 24). *Claude 3.7 Sonnet and Claude Code*.
  <https://www.anthropic.com/news/claude-3-7-sonnet>
- Anthropic. (2025e, October 20). *Beyond permission prompts: making Claude Code
  more secure and autonomous*.
  <https://www.anthropic.com/engineering/claude-code-sandboxing>
- Anthropic. (2025c, October 20). *Claude Code on the web*.
  <https://www.anthropic.com/news/claude-code-on-the-web>
- Anthropic. (2026a, March 25). *Claude Code auto mode: a safer way to skip
  permissions*. <https://www.anthropic.com/engineering/claude-code-auto-mode>
- Anthropic. (2026b, April 23). *An update on recent Claude Code quality
  reports*. <https://www.anthropic.com/engineering/april-23-postmortem>
- Anthropic. (2026d). *Claude Code: Anthropic’s agentic coding system*.
  Retrieved May 21, 2026, from <https://www.anthropic.com/product/claude-code>
- Claude Code Docs. (n.d.-a). *Best practices for Claude Code*. Retrieved May
  21, 2026, from <https://code.claude.com/docs/en/best-practices>
- Claude Code Docs. (n.d.-b). *Explore the context window*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/context-window>
- Claude Code Docs. (n.d.-c). *How Claude Code uses prompt caching*. Retrieved
  May 21, 2026, from <https://code.claude.com/docs/en/prompt-caching>
- Claude Code Docs. (n.d.-c2). *Manage costs effectively*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/costs>
- Claude Code Docs. (n.d.-d). *Data usage*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/data-usage>
- Claude Code Docs. (n.d.-e). *Use Claude Code in VS Code*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/ide-integrations>
- Claude Code Docs. (n.d.-f). *Hooks reference*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/hooks>
- Claude Code Docs. (n.d.-g). *Claude Code GitHub Actions*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/github-actions>
- Claude Code Docs. (n.d.-h). *Overview*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/overview>
- Claude Code Docs. (n.d.-i). *How Claude Code works*. Retrieved May 21, 2026,
  from <https://code.claude.com/docs/en/how-claude-code-works>
- Claude Code Docs. (n.d.-j). *Connect Claude Code to tools via MCP*. Retrieved
  May 21, 2026, from <https://code.claude.com/docs/en/mcp>
- Claude Code Docs. (n.d.-k). *Choose a permission mode*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/permission-modes>
- Claude Code Docs. (n.d.-l). *Agent SDK overview*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/agent-sdk/overview>
- Claude Code Docs. (n.d.-m). *Claude Code settings*. Retrieved May 21, 2026,
  from <https://code.claude.com/docs/en/settings>
- Claude Code Docs. (n.d.-n). *Create custom subagents*. Retrieved May 21, 2026,
  from <https://code.claude.com/docs/en/sub-agents>
- Claude Code Docs. (n.d.-o). *Extend Claude with skills*. Retrieved May 21,
  2026, from <https://code.claude.com/docs/en/slash-commands>
- Claude Code Docs. (n.d.-p). *Security*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/security>
- Claude Code Docs. (n.d.-q). *Authentication*. Retrieved May 21, 2026, from
  <https://code.claude.com/docs/en/iam>
- Claude Code Docs. (n.d.-r). *Enterprise deployment overview*. Retrieved May
  21, 2026, from <https://code.claude.com/docs/en/third-party-integrations>
- Claude Code Docs. (n.d.-s). *Development containers*. Retrieved May 21, 2026,
  from <https://code.claude.com/docs/en/devcontainer>

Note on interpretation: where this paper makes claims such as “Claude Code is a
systems layer,” those are analytic conclusions inferred from the cited materials
rather than direct Anthropic phrasing.
