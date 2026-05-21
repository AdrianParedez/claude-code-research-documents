# Claude Code Research Documents

This repo is small on purpose. The papers are the product. The rest of the
tree exists to keep those papers consistent, reviewable, and easy to extend
without turning the repository into a document dump.

## What Lives Here

- `docs/papers/`: canonical research papers
- `docs/standards/`: repository rules and process documents
- `scripts/`: repo enforcement logic
- `.husky/`: local Git hook entrypoints
- `.github/`: GitHub workflow templates
- `CONTRIBUTING.md`: contributor checklist
- `LICENSE`: Apache-2.0 license
- `.markdownlint.json`: Markdown lint rules
- `.gitmessage.txt`: local commit template

## Current Papers

- [paper--claude--prompting.md](docs/papers/paper--claude--prompting.md)
- [paper--claude-code--prompting.md](docs/papers/paper--claude-code--prompting.md)
- [paper--claude-code--systems.md](docs/papers/paper--claude-code--systems.md)

## Working Rule

Markdown is canonical. If a document is public and durable, it belongs here in
Markdown, under the right folder, with the right name. If it is temporary,
generated, or review-only, keep it out of the repo.

## Checks

Install the pinned toolchain once with `npm ci`. After that, use
`npm run check` as the single repo-wide guard command. Local hooks and GitHub
Actions both point at the same rule set.

## Standards

- [spec--repo--standards.md](docs/standards/spec--repo--standards.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
