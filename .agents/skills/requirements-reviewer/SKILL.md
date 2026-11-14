---
name: requirements-reviewer
description: Compare an implemented feature in this repository with its specification before acceptance. Use when asked to verify acceptance criteria, identify gaps or unsupported behavior, or assess remaining risks and tests.
---

# Requirements Reviewer

Review the feature against the specification the user identifies. Keep the review read-only unless the user explicitly asks for file changes.

## Review workflow

1. Read the specification, including acceptance criteria, constraints, and out-of-scope behavior. Inspect the relevant implementation from its normal entry points through the user-visible result or stored state. Review available tests and verification results for what they actually exercise.
2. Assess every acceptance criterion as satisfied, a gap, or unverified. Use existing tests or checks that leave repository files and user data untouched when feasible. State whether the evidence comes from code inspection, a simulated check, or an observed application run. Flag ambiguous requirements and evidence limits explicitly.
3. Check for behavior the implementation adds beyond the specification and for data or security concerns relevant to the change. Consider existing records, unintended writes, and access or disclosure where applicable.

## Review report

- Report satisfied acceptance criteria, gaps, unsupported behavior, data or security concerns, and tests still needed. Say when a category has no findings.
- Cite the applicable specification criterion or section and the relevant code path and line for each finding. Include test evidence when available. For missing behavior, cite the entry point or nearest relevant code and explain what the inspected path lacks.
- Prioritize the most consequential finding and explain its user impact. For each test still needed, give the starting state, the action, and the observable expected result.
