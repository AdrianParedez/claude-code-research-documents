const allowedScopes = [
  "repo",
  "readme",
  "standards",
  "github",
  "lint",
  "papers",
  "claude",
  "claude-code",
];
const allowedTypes = [
  "feat",
  "fix",
  "docs",
  "improvement",
  "refactor",
  "chore",
  "test",
  "ci",
  "build",
  "revert",
];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "breaking-change-footer-required": (parsed) => {
          const header = parsed.header || "";
          const raw = parsed.raw || "";
          const hasBang = /!:\s/.test(header);
          const hasBreakingChange = /(^|\n)BREAKING CHANGE:\s+\S/m.test(raw);

          if (!hasBang) {
            return [true];
          }

          return [
            hasBreakingChange,
            "commits with ! must also include a BREAKING CHANGE: line",
          ];
        },
        "scope-required-unless-revert": (parsed) => {
          if ((parsed.type || "") === "revert") {
            return [true];
          }

          return [
            Boolean(parsed.scope),
            "scope is required for all commit types except revert",
          ];
        },
        "scope-valid": (parsed) => {
          if (!parsed.scope) {
            return [true];
          }

          return [
            allowedScopes.includes(parsed.scope),
            `scope must be one of: ${allowedScopes.join(", ")}`,
          ];
        },
      },
    },
  ],
  rules: {
    "breaking-change-footer-required": [2, "always"],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "lower-case"],
    "scope-required-unless-revert": [2, "always"],
    "scope-valid": [2, "always"],
    "subject-case": [0],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [2, "always", allowedTypes],
  },
};
