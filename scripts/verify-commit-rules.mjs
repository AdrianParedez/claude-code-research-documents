import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const commitlintCli = path.join(
  rootDir,
  "node_modules",
  "@commitlint",
  "cli",
  "lib",
  "cli.js",
);
const configPath = path.join(rootDir, "scripts", "commitlint.config.cjs");

const validMessages = [
  "docs(claude): tighten prompting paper abstract",
  "improvement(repo): simplify contributor checklist language",
  [
    "feat(standards)!: require scoped commits for all changes",
    "",
    "BREAKING CHANGE: unscoped commits are no longer accepted",
  ].join("\n"),
];

const invalidMessages = [
  {
    label: "missing scope",
    message: "docs: update public repo copy",
  },
  {
    label: "invalid type",
    message: "style(repo): rewrite standards doc",
  },
  {
    label: "missing breaking footer",
    message: "feat(repo)!: tighten public repo rules",
  },
];

function runCommitlint(message) {
  const result = spawnSync(process.execPath, [commitlintCli, "--config", configPath], {
    cwd: rootDir,
    encoding: "utf8",
    input: `${message}\n`,
  });

  if (result.error) {
    throw result.error;
  }

  return result;
}

for (const message of validMessages) {
  const result = runCommitlint(message);
  if (result.status !== 0) {
    console.error("Valid commit message failed:\n");
    console.error(message);
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(1);
  }
}

for (const { label, message } of invalidMessages) {
  const result = runCommitlint(message);
  if (result.status === 0) {
    console.error(`Invalid commit message passed (${label}):\n`);
    console.error(message);
    process.exit(1);
  }
}

console.log("Commit rule verification passed.");
