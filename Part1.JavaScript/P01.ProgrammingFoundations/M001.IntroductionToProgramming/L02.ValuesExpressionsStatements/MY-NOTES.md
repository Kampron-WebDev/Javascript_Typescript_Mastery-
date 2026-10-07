# My Notes

# Debugger

The bugs had no return their block , so JS return undefined. All I had to was to add the return to each block and in the makeUser, the object was curly braces was omitted so it was never an object. So I added the braces and return the object.

# Exercise 1

Okay I get it. newFunction , reads the code , but a retun() only takes expression so it flags it as a syntax error. so if there is no wrapper , the grammar is always right because a correct written statement will equally be read by the newFunction. So the bottom line is return is the filter for the code. newFunction just read and knows from the JS grammar that only expressions should fit in here, if it is a statement it becomes sythax error.

# snippet you your referee

1 1 + 2 E E
2 let x = 1 S S
3 x = 5 E E
4 a ? b : c S E ← surprise
5 if (a) b S S
6 () => 1 S E ← surprise
7 for (;;) {} S S
8 'hi'.length E E
9 {} S E ← surprise
10 ({}) S E ← surprise
11 return 1 E S ← surprise
12 typeof x E E

## Tree for (1 + 2) \* (3 - 4)

         (*)
        /   \
      (+)    (-)
     /  \   /   \
    1    2  3     4

step 1: 1 + 2 -> 3
step 2: 3 - 4 → -1
step 3: 3 - 1 -> 2

## Design question (my answer)

It allow only simple property paths like order.id, because allowing JS there can result in security and infinite loop issues. It means code required to fill the space can't be determined.
Sticking with property paths too has some limitation, that is less flexible than that of {{...}} , which take different expression while property paths works the value and fill the space.
So flexibility is traded for safety.

## Quiz: my answers before checking

1.  42 - E
2.  let a = 1; S
3.  a \* 2 E
4.  if (a) {} S
5.  a = 7 E (no let, so an expression)
6.  'hi'.length - E
7.  return a; S (a command, so a statement)
8.  a > 1 ? 'x' : 'y' E
9.  for (;;) {} S
10. Math.max(1, 2) E

What is the value of the expression x = 5? -> 5
Why does const y = if (ok) 1 else 2; fail? -> right side of = takes only expression not statements
In what order are these evaluated: f(g(1), h(2))? -> g(1), h(2), f()

## Reflection

**Explain it to a 10-year-old:**
Statement is command that performs actions eg "Close the window." whiles expressions gives a result, eg is simple arithmetic (2 + 5).

**What surprised me:**
newFunction and return() for isExpression

**Still fuzzy:** step by step problem solving.

<!-- athena:start -->

## 🦉 Athena: concepts I asked to be broken down

### What may follow `return`, and what braces mean · 2026-10-06

**Why I asked:** "So return with statements must have the curly braces, but expressions can use parenthesis?"
**In plain words:** No. `return ____;` is a slot for ONE value, the same as `console.log( ____ )`. Only an expression
fits there. A statement can never follow `return`, with or without braces. Parentheses only group, like in maths.

```text
return x * 2;                       works: no parentheses needed
return (1 + 2);                     same as  return 1 + 2;
return (let x = 1);                 SyntaxError: a statement in the slot
return { name, role: "student" };   braces after return = an OBJECT (a value)

where the { is                      what the engine reads
straight after  =>                  a BLOCK of statements (needs its own return)
after  return                       an OBJECT
```

**Example (my machine):** `return (1 + 2);` gave 3 · `return (let x = 1);` gave `SyntaxError`.
**Trap:** thinking the kind of bracket decides. It is the PLACE that decides: after `=>` braces are a block, after
`return` they are an object. That is why my first `makeUser` (`=> { name: name; }`) made no object at all.
**Links:** ⬅ expression vs statement, arrow bodies · ↔ Python: `return` also takes an expression · ➡ `{}` vs `({})` in Exercise 1

### The wrapper in `isExpression` (my line 10) · 2026-10-07

**Why I asked:** "What is the wrapper, I am confused."
**In plain words:** The wrapper is the extra text my template string puts around the code: `return (` in front and
`);` behind. The code is the gift, the wrapper is the paper. It is there to CHECK whether the code is an expression.
It works like the round hole in a shape-sorter toy: only an expression fits inside `return ( … )`.
Two jobs, two parts (my own summary): `return ( … )` supplies the RULE (it must give something back, so only an
expression fits); `new Function` is the READER that applies the rule and throws a `SyntaxError` when the code does not fit.

```text
`return (${code});`        front text + hole + back text   (like `Hi ${name}!` → Hi Ama!)

code           text handed to new Function    result          my function answers
'1 + 2'        return (1 + 2);                builds fine     true
'let x = 1'    return (let x = 1);            SyntaxError     false  (caught)

BUILD  new Function('…')   checks the grammar only   ← all that isExpression does
CALL   f()                 runs the code inside      ← never happens here
```

**Example (my machine):** `new Function('let x = 1')` built fine (no wrapper, so a statement passes) ·
`new Function('return (let x = 1);')` threw `SyntaxError`.
**Trap 1:** thinking the `return` is there to bring a value back. It never runs. It is only the hole for the test.
**Trap 2:** the quotes are not part of the text: the result is `return (1 + 2);`, not `return ('1 + 2');`.
**Links:** ⬅ template strings `${ }`, slots that take one value · ↔ Python: `compile(code, '', 'eval')` asks the same question · ➡ parsers, linters, why `eval` on user input is dangerous

### Why templates use double curly braces `{{ … }}` · 2026-10-07

**Why I asked:** "First, why do we have double curly brackets?"
**In plain words:** `{{ }}` is not JavaScript. It is a marker the template system chose, meaning "put a value here".
It does the same job as `${ }` in a JavaScript template string. Two braces are used because one brace `{` shows up
in ordinary text and code all the time, while `{{` almost never appears by accident, so it is easy to find safely.

```text
template text:   Hello {{ name }}, your order #{{ order.id }} has shipped.
                       └───┬────┘               └─────┬──────┘
                       a hole: fill with a value   another hole

JavaScript:      `Hello ${name}, your order #${order.id} has shipped.`     same idea, different marker
```

**Example:** with name = 'Ama' and order.id = 42 → `Hello Ama, your order #42 has shipped.`
**Trap:** thinking `{{ }}` is an object or a block. Here the braces are only a signpost for the template system.
**Links:** ⬅ `${ }` slots that take one value · ↔ Python: Jinja templates use `{{ }}` too · ➡ Vue, Angular and Handlebars use the same marker

### Solving a problem step by step · 2026-10-07

**Why I asked:** in my reflection I said "step by step problem solving" still feels fuzzy.
**In plain words:** it is a routine, not a talent. I do the same four steps every time, and I do not type code
until step 3. I already did all four in this lesson without naming them.

```text
1. UNDERSTAND   what goes in, what comes out, one small example by hand
                (evaluate: a node goes in, a number comes out; 3 * 4 → 12)
2. PLAN         the cases, in plain words or comments, smallest case first
                (number node → its value; binary node → left, right, then the operator; anything else → error)
3. WRITE        one case at a time, and run the tests after each one
4. CHECK        try one input the tests do not have, then explain the code out loud
                (0 / 5 → 0; "the main evaluate works the whole node…")
```

**Example:** for `0 / 5` I ran it myself and got 0, which proved only a zero on the RIGHT is an error.
**Trap:** starting at step 3. When I am stuck, I go back one step: no plan → plan; plan unclear → do an example by hand.
**Links:** ⬅ tracing by hand with a table (Full-Stack Day 3) · ↔ the 4-step method in C++ lesson 02 · ➡ every exercise in all four courses

<!-- athena:end -->
