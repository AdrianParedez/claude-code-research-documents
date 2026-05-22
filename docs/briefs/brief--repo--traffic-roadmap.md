# Repo Traffic Roadmap

Strategy Brief | Repo Traffic | May 22, 2026

Claude Code Research Traffic Brief

A repo-specific roadmap for turning the current Claude Code research repository
into a discoverable public asset and using it to increase traffic to the
`AdrianParedez` GitHub profile.

- **Revision date:** May 22, 2026
- **Source snapshot:** GitHub repo/profile metadata and traffic endpoints
  reviewed on May 22, 2026
- **Audience:** repository maintainer

## Executive Point

The GitHub-native setup phase is mostly done. The first traffic wave is now
live, but it is still too early to measure.

As of **May 22, 2026**, the repo now has a live Pages site, homepage URL,
custom repository social preview, public profile README, pinned flagship repo,
filled profile fields, Discussions, `CITATION.cff`, a `Start here` guide, a
paper-to-template map, and a current public release in `v0.2.0`.

That means the bottleneck has moved. The main problem is no longer repo
packaging. It is distribution feedback. The repository still has zero stars,
zero watchers, zero forks, and zero recorded 14-day views, but the first
outbound package now exists: one comparison artifact plus three public
paper-derived Discussions. The next job is to measure what actually gets
clicked, then iterate from real referrers and real paths instead of guesswork.

## Roadmap Status

- **Phase 1: GitHub-native discovery surface:** complete enough
- **Phase 2: distribution and referral generation:** started and publicly live
- **Phase 3: traffic review and iteration:** pending the first measurable
  traffic signal

This matters because it changes what should count as progress. More polish on
already-finished repo metadata is low leverage now. Distribution is the only
part likely to change the graph.

## Current State

- **Repo created:** May 21, 2026
- **Latest observed push:** May 22, 2026
- **Visibility:** public
- **GitHub Pages:** live
- **Repo description:** present
- **Repo homepage URL:** set to the GitHub Pages site
- **Custom repo social preview:** set
- **Topics already set:** `agentic-coding`, `ai-research`, `anthropic`,
  `claude`, `claude-code`, `prompt-engineering`, `prompt-templates`,
  `research-papers`
- **Discussions:** enabled
- **Comparison artifact:** live at `/comparison.html`
- **Public Discussions:** three `Show and tell` posts live
- **Releases:** `v0.2.0` latest, `v0.1.0` earlier checkpoint
- **14-day traffic:** 0 views, 0 uniques
- **Popular paths:** none yet
- **Account followers:** 3
- **Public repos on profile:** 5
- **Public profile README repo:** present
- **Public profile fields:** name, bio, and blog link are set
- **Flagship repo pinned on profile:** yes

## Diagnosis

The roadmap has changed because the bottleneck has changed.

1. **GitHub discovery loop:** mostly repaired. The repo can now convert better
   when someone lands on it because the public surfaces are coherent.
2. **Profile conversion loop:** materially stronger. The profile now tells a
   cleaner story and points people back to the repo and Pages site.
3. **Content distribution loop:** now initialized. The papers have been turned
   into a comparison artifact plus three outward-facing GitHub Discussions, but
   there is still no measurement signal yet.

So the current problem is narrower now: the first outbound motion exists, but
there is still no traffic signal to learn from.

## Completed Foundation Work

These items are no longer the roadmap's center of gravity:

- set the repository homepage URL
- upload a custom repository social preview image
- create the public `AdrianParedez/AdrianParedez` profile README
- pin this repository on the public profile
- fill in public profile name, bio, and website fields
- enable Discussions
- add `CITATION.cff`
- add a `Start here` entry point
- add a paper-to-template map
- publish releases, now including `v0.2.0`

This is enough setup. More time here would be polishing the shelf instead of
getting people to the shelf.

## Remaining High-Leverage Work

| Priority | Move | Why It Matters | Status |
| --- | --- | --- | --- |
| High | Publish one easy-to-share comparison artifact | You need a visual or compact comparative object that travels better than a repo link alone. | Completed |
| High | Publish three derivative posts sourced from the papers | The papers are the traffic engine, but only if their claims get repackaged into click-worthy posts. | Completed |
| High | Review traffic, referrers, and popular paths after the first outbound wave | Without measurement, there is no way to tell whether the hooks or channels are working. | Remaining |
| Medium | Open one public Discussion that frames the repo as a living research artifact | Gives new visitors a visible conversational entry point once traffic arrives. | Completed |
| Medium | Add one compact comparison matrix or top-5 template entry point | Improves conversion after a visitor lands, but it is secondary to getting visits at all. | Completed |

## First Outbound Wave Published

The repository now has four outward-facing traffic objects tied directly to the
papers:

- comparison artifact:
  [comparison.html](https://adrianparedez.github.io/claude-code-research-documents/comparison.html)
- Discussion 1:
  [Claude prompting is mostly a task-contract problem, not a wording-trick problem](https://github.com/AdrianParedez/claude-code-research-documents/discussions/1)
- Discussion 2:
  [Claude Code works more like an operating stack than a thin CLI around chat](https://github.com/AdrianParedez/claude-code-research-documents/discussions/2)
- Discussion 3:
  [The optimal Claude Code prompt is a governed agent brief, not a verbose script](https://github.com/AdrianParedez/claude-code-research-documents/discussions/3)

## What To Publish First

The first artifact set is now live. These entries remain useful because they
define what should be repackaged again in later channels.

### Artifact 1: Claude vs. Claude Code vs. agent-runtime comparison

- **Format:** one graphic or compact table
- **Hook:** Claude prompting, Claude Code prompting, and Claude Code systems are
  not the same object and should not be talked about interchangeably
- **Destination:** Pages site or repo note, then linked from outward posts

This is the best candidate for the "easy-to-share comparison artifact" because
it is simple to understand and easy to post.

### Artifact 2: Paper-derived post on Claude prompting

- **Hook:** "Claude prompting is mostly a task-contract problem, not a
  wording-trick problem."
- **Support:** one concrete example of how output contract, structure, and
  underspecification reduction change behavior
- **Destination:** repo paper and the `Start here` note

### Artifact 3: Paper-derived post on Claude Code prompting

- **Hook:** "The optimal Claude Code prompt is a governed agent brief, not a
  verbose script."
- **Support:** one prompt-before/prompt-after contrast or a short six-part
  contract summary
- **Destination:** Claude Code prompting paper plus the prompt templates

### Artifact 4: Paper-derived post on Claude Code systems

- **Hook:** "Claude Code works more like an operating stack than a thin CLI."
- **Support:** one diagram or checklist covering tools, context, permissions,
  memory, and verification
- **Destination:** systems paper and project site

## Distribution Strategy

The repo already contains enough material for repeated distribution. The main
job is repackaging, not inventing new topics.

- turn each paper into multiple outward-facing artifacts instead of one launch
  message
- use the paper's core claim as the hook, not "I made a repo"
- always include a direct click path back to the repo or Pages site
- publish only when there is a real artifact: a paper, template pack, release,
  comparison chart, or practical example

Reasonable distribution channels for this material include:

- technical social posts where engineers already click through to source
  material
- relevant communities where Claude, prompt engineering, or coding agents are
  already discussed
- release-style posts tied to concrete artifacts rather than generic updates

The most reusable outward format is still:

1. one clear claim
2. one supporting visual or comparison
3. one direct link to the repo or site

## 30-Day Plan From Here

| Window | Goal |
| --- | --- |
| Days 1-7 | Let the first outbound wave collect enough signal to produce real traffic data |
| Days 8-14 | Review traffic, popular paths, and referring sites to see which hook actually pulled visits |
| Days 15-21 | Turn the best-performing discussion into a second format, such as a comparison image, short thread, or release-style repost |
| Days 22-30 | Double down on the best-performing claim and publish one follow-up artifact instead of changing the whole direction blindly |

If traffic is still flat after that first wave, the issue is probably channel
selection or weak hooks, not repo presentation.

## Secondary Repo Features

These are still useful, but they are no longer urgent:

- add short abstracts and "why this matters" blurbs near the top of each paper
- add a matrix mapping each paper claim to the templates derived from it
- add a curated "top 5 templates to start with" section for first-time users
- add example use cases showing what each template is for in practice
- add release notes and a simple changelog so updates feel like publish events,
  not silent file edits
- add contribution-oriented issues for new papers, template expansions,
  comparison charts, or documentation improvements
- add a compact "related work" section linking this repo to adjacent public work

These should follow traffic, not precede it.

## What Success Should Look Like First

Do not optimize for vanity numbers yet. The first real success condition is
that traffic becomes non-zero and legible.

Good early signals:

- regular weekly views instead of a flat zero line
- at least one external referring site
- stars or followers from outside your existing network
- one or two repeatable post formats that reliably send people back to the repo
- clearer conversion from repo visit to profile visit

The roadmap should be considered "working" once there is enough traffic to
learn from. It is not done just because the repo looks complete.

## Sources

- GitHub repo/profile metadata and traffic endpoints reviewed on May 22, 2026
- [Viewing traffic to a repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)
- [Classifying your repository with topics](https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics)
- [About your profile](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)
- [Managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
- [Pinning items to your profile](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)
- [About discussions](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/about-discussions)
- [Customizing your repository's social media preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)
- [About releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)
