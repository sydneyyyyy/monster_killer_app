## JS Built In Functions

* `prompt();` -> shows a dialog which prompts the user to enter something. 
* `parseInt();`
* `isNaN()` -> checks if the value is NaN.

### Conditional Expressions / Ternary Operator

> If statements do NOT return a value! For this case where you need to conditionally return a value you use a ternary operator. 

`const varName = condition ? 'trueResult' : 'falseResult';`

You can nest ternary operators however, that could prevent code readability. 

### Statement vs. Expression

Expression is something that returns a value. An expression is also a statement but for example an if statement is just a statement because it does not yield a value. 

### Boolean Tricks w/ Logical Operators

* `!!` -> Boolean Coercion, whereas `!` is the not operator the `!!` is the opposite of that (e.g. !!"", !!1). 
* `||` -> Default value assignment via OR operator (e.g. const name = someInput || 'Max') returns the first truthy value without converting to a real boolean.
* `&&` -> Use value if condition is true via AND Operator (e.g. const name = isLoggedIn && 'Max') 'Max' is set if isLoggedIn is true, returns false otherwise. 

```
const enteredValue = '';
const userName = enteredValue && 'Anna';
```

If the first operand is falsy, && always returns the first operand, NEVER the second one. And if the first operand is TRUTHY, the AND operator ALWAYS returns the second value. Even if that operand should be falsy. 

### Switch Statement

* Break Keyword MUST be used at the end of each case. Tells JS that once that case has been handled/executed, then no other case should be handled/executed. 

Switch Statements fall through automatically execute every statement until the break keyword. 

### Loops

Loops are used when you need to execute code multiple times. 

* For Loop -> execute code a certain amount of times (with counter variable).

```
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

* For-of Loop -> execute for every element in an array

```
for (const el of array) {
    console.log(el);
}
```

* For-in Loop - execute for every key in an object

```
for (const key in object) {
    console.log(key);
    console.log(obj[key]);
}
```

* While Loop -> execute code as long as a condition is true

```
while (isLoggedIn) {
    ...
}
```


