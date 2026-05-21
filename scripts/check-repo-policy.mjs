import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirs = new Set([".git", "node_modules"]);
const allowedTopLevelDirs = new Set([".github", ".husky", "docs", "scripts"]);
const allowedTopLevelFiles = new Set([
  ".gitignore",
  ".gitmessage.txt",
  ".gitattributes",
  ".markdownlint.json",
  "CONTRIBUTING.md",
  "LICENSE",
  "README.md",
  "package-lock.json",
  "package.json",
]);
const allowedDocsDirs = new Set([
  "audits",
  "briefs",
  "notes",
  "papers",
  "standards",
  "templates",
]);
const reservedMarkdownPaths = new Set([
  ".github/pull_request_template.md",
  "CONTRIBUTING.md",
  "README.md",
]);
const docPattern =
  /^(paper|brief|audit|notes|spec)--[a-z0-9]+(?:-[a-z0-9]+)*--[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

const errors = [];

function toRepoPath(targetPath) {
  return path.relative(rootDir, targetPath).replace(/\\/g, "/");
}

function walk(currentDir) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const repoPath = toRepoPath(fullPath);
    if (!repoPath.endsWith(".md")) {
      continue;
    }
    if (reservedMarkdownPaths.has(repoPath)) {
      continue;
    }
    if (!docPattern.test(path.basename(repoPath))) {
      errors.push(
        `Markdown file does not match the required pattern: ${repoPath}`,
      );
    }
  }
}

for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
  if (entry.name === ".git") {
    continue;
  }
  if (entry.isDirectory()) {
    if (entry.name === "node_modules") {
      continue;
    }
    if (!allowedTopLevelDirs.has(entry.name)) {
      errors.push(`Top-level directory is not allowed: ${entry.name}/`);
    }
    continue;
  }
  if (!allowedTopLevelFiles.has(entry.name)) {
    errors.push(`Top-level file is not allowed: ${entry.name}`);
  }
}

const docsDir = path.join(rootDir, "docs");
if (fs.existsSync(docsDir)) {
  for (const entry of fs.readdirSync(docsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      errors.push(`Only subdirectories are allowed directly under docs/: ${entry.name}`);
      continue;
    }
    if (!allowedDocsDirs.has(entry.name)) {
      errors.push(`docs/ subdirectory is not allowed: ${entry.name}/`);
    }
  }
}

walk(rootDir);

if (errors.length > 0) {
  console.error("Repository policy check failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Repository policy check passed.");
