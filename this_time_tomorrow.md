# TDD in the Real World

From workshop → actual work

---

## The Problem

- ❌ TDD feels slow in real projects
- ❌ Hard to apply everywhere
- ❌ Teams don’t follow it consistently

**Goal:** Make it practical and usable

---

## Start Small, Not Pure

Use TDD first for:

- New business logic
- Bug fixes
- Tricky condition-heavy code
- Code that already caused pain

---

## The Core Loop

**Red → Green → Refactor**

- Write a failing test
- Make it pass (quickly)
- Improve the design

---

## Keep the Steps Tiny

Avoid:

- Big upfront design
- Writing lots of code before tests

---

Instead:

- One behaviour
- One test
- One step forward

---

## Tests Drive Thinking

Tests force you to ask:

- What should this do?
- What’s the simplest interface?
- What are the edge cases?
- Is this in the right place?

---

## When Code Starts Talking Back

Watch for:

- Duplication
- Long methods
- Too many conditionals
- Awkward naming
- Painful test setup

---

→ Time to refactor

---

## Refactor Safely

While tests are green:

- Extract methods
- Remove duplication
- Rename things clearly
- Simplify logic

**Small, safe changes**

---

## Treat Test Code as Real Code

Good tests are:

- Readable
- Focused
- Easy to change
- Clear in intent

Bad tests slow you down.

---

## Don’t Turn TDD into a Religion

Good fit:

- Business rules
- Validation
- Transformations
- APIs

---

Less direct fit:

- UI spikes
- Exploration
- Wiring code

---

## Use TDD for Bugs

Workflow:

1. Reproduce the bug in a test
2. See it fail
3. Fix the code
4. Keep the test

---

## If It’s Hard to Test…

It might not be a testing problem.

It might be:

- Tight coupling
- Mixed responsibilities
- Too many side effects

---

## Confidence Over Coverage

Don’t chase:

- 100% coverage

Do aim for:

- Confidence to change code
- Confidence to refactor
- Confidence to release

---

## Leave It Better Than You Found It

Each time:

- Remove one duplication
- Improve one name
- Simplify one condition
- Delete dead code

Small improvements compound.

---

## Simple Rules to Remember

- Write a failing test
- Make it pass simply
- Refactor safely
- Keep changes small
- Improve tests too
- Use it where it matters most

---

## Your First Week Back

Use TDD in just three situations:

1. One new piece of logic
2. One bug fix
3. One small refactor

---

## Final Thought

“TDD is not about writing tests first.

It’s about building software in small, safe steps  
so you can change it tomorrow without fear.”
