# Contributing

This repo is documentation-first. Treat the Markdown files as the deliverable,
not as notes on the way to some later artifact.

The detailed rules live in
[spec--repo--standards.md](docs/standards/spec--repo--standards.md).

Run `npm ci` once before you start. That installs the pinned toolchain and
sets up local hooks.

## Before You Open a Pull Request

- keep canonical papers in `docs/papers/`
- follow the filename pattern: `<doc-type>--<domain>--<topic>.md`
- use Conventional Commits with a required scope
- if a commit is breaking and uses `!`, also include `BREAKING CHANGE:`
- keep folder names lowercase and hyphen-only
- use the pull request template
- run `npm run check`

## Commit Header

`<type>(<scope>): <description>`

Example:

`docs(claude-code): revise systems paper title`

## Branch Name

`<type>/<scope>-<short-slug>`

Example:

`docs/claude-code-systems-revision`

## Public Writing Standard

Everything in this repo other than templates and config should read like
authored technical writing.

- cut filler, throat-clearing, and stock AI transitions
- prefer concrete nouns and precise verbs
- keep intros short and stakes-first
- if a sentence adds no information, remove it
- write rules as rules, not as motivational copy
