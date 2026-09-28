# My Notes

A real UK traffic light also has red + amber before green. How much of your code changes to add it?

Almost nothing, nextLight doesn't list every rule as its own 'if'. It keeps the order in a list and work out 'next' from it.

The logic never names a colour. It just says "take the next item in the list, and go back to the start after the last one". Because it uses lights.length and not a fixed 3, a 4th item works automatically.

When the rules are stored as data and not written into the logic, changing the rules means changing the data, and the code stays untouched.

Why tolerance (hysteresis)? Without it, a room hovering around 21.0 °C would
switch the heater on/off many times a minute, wearing it out. A "dead zone"
around the target keeps the system stable.

## Design question (my answer)

Describe a microwave oven as a program.

Inputs (what the oven receives)

Door opened / closed
Number keys (cooking time)
Start button
Stop/Cancel button
The clock ticking (time passing)

Outputs (what the oven does)

Heater on/off
Light on/off
Turntable spinning
Display (time left)
Beep

States

Idle -> DoorOpen -> Running ->Paused ->Done

Impossible combinations

Door open + heater on
Heating with 0 time left
Timer counting while not heating

How to make them impossible

Don't store "heater on" as its own variable. Work it out from the state: the heater is on only when the state is Running. With no separate switch, nothing can set it wrong.
Guard every move into Running. Start only works if the door is closed and time is above 0. Otherwise the input is ignored.
Opening the door always forces a state change. From Running it goes straight to Paused, whatever else is happening.
Only allow listed moves. Use a lookup table like the traffic light's. Any input that isn't in the table for the current state is ignored.

## Quiz: my answers before checking

1. Program vs algorithm
   An algorithm is the recipe: a list of steps that solves a problem. A program is that recipe written in a language a computer can run. One algorithm can be written as many different programs

2. What is state?
   State is what the program remembers right now, which changes what it does next.

3. Why are stateless programs easier to test?
   The same input always gives the same output. You just check "given X, do I get Y?" There's no history to set up first and nothing hidden that can change the result.

4. What is a state machine?
   A program that is always in exactly one of a fixed set of states, with clear rules for which input moves it to which state.

5. Why don't programmers believe "the computer made a mistake"?
   Computers do exactly what they're told. When the result is wrong, it's almost always because the instructions were wrong, not because the computer misread them. The mistake is in the code.

## Reflection

**Explain it to a 10-year-old:** Think about **Super Mario**.

Mario can be **small**, **big**, or **fire Mario**. That's his **state**, what he _is_ right now.

When an enemy hits him, what happens depends on his state:

- **Fire Mario** gets hit → turns **big**
- **Big Mario** gets hit → turns **small**
- **Small Mario** gets hit → **loses a life**

It's the same hit every time, but the result is different because the game remembers which Mario you are.

**State = what the game remembers right now, which decides what happens next.**

**What surprised me:** Nothing much, just that the exercises made me think hard. You can see most of my solutions are not close to the solutions but works fine. That is different algorithms but same results.

**Still fuzzy:** Nothing, yet. Just thriving to improve my problem solving skills.
