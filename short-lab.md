# Lab: TDD FizzBuzz

## Objective

In this lab, you will build a simple application using the **Test-Driven Development (TDD)** cycle.

You will:

* Write tests first
* Implement the minimum code to pass those tests
* Refactor safely after each passing test

---

## Scenario

You are building a simple **word generator function**.

This is based on the classic **FizzBuzz** exercise — simple, but ideal for learning the TDD workflow.

---

## TDD Guidelines

As you work through the lab:

* Start with a **failing test**
* Write only the **minimum code** required to pass
* Follow the **three rules of TDD**
* Refactor after each passing test
* Write tests that match the **exact requirements**

---

## Requirements

Write a function:

```
fizzbuzz(number) → string
```

### Behaviour

| Input               | Output                         |
| ------------------- | ------------------------------ |
| `0`                 | `"Error"`                      |
| Negative number     | `"must be a positive integer"` |
| Non-negative number | Number as a string             |
| Multiple of 3       | `"Fizz"`                       |
| Multiple of 5       | `"Buzz"`                       |
| Multiple of 3 and 5 | `"FizzBuzz"`                   |

---

## Notes

* Work individually for this lab
* You can use any language or editor
* Focus on the **TDD process**, not just the final solution

---

## Suggested Workflow

1. Write your first failing test (e.g. input `1`)
2. Implement the minimum code to pass
3. Add the next test (e.g. `0`)
4. Repeat the cycle:

   * Red → Green → Refactor
5. Continue until all requirements are covered

---

## Outcome

By the end of this lab, you will:

* Understand the **TDD cycle in practice**
* Be comfortable writing **tests first**
* Know how to **grow functionality incrementally**
* Recognise when and how to **refactor safely**



