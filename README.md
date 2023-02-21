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

> Only works for arrays or strings. 

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

* Do-While Loop -> executes the block of code first and then evaluates the condition.

```
do {
    ...
} while (i > 2);
```

#### Break vs. Continue Keyword

When you use the break keyword inside of a loop it tells javaScript to stop executing the loop. Similar to the break, the continue keyword tells JavaScript to stop executing the loop but only the current iteration, not the entire loop. 

### Labeled Statement

JS allows you to add a label to any loop. Typically used for loops with the break and continue keywords. 

```
outerLoop: for () {
    console.log();
    innerLoop: for () {
        console.log();
        break outerLoop;
    }
}
```

### Error Handling

Some errors can't be avoided.

* User Input Errors -> users enter text like 'hi' instead of a number. 
* Network Errors -> server is offline. 

Throw and Catch errors to fail gracefully or recover if possible. Only use try/catch block when you can't control whether the program crashes. Typically used to handle Network Errors. 

`try {...} catch (error){...} finally {}`

`throw` keyword -> throws a error. allows you to custom make errors in JS and stops code execution. 
`try` keyword -> includes the block of code that might throw an error. 
`catch (error)` keyword -> creates the error object that can now be used to send a message to the user or handled in this block.
`finally` keyword -> optional block that follows catch. Will always execute even if there was not an error. 

> Must have try block with either catch or finally. 

## ES5 vs. ES6

ES = ECMAScript 

ES5:
* Supported in basically all browsers, including IE
* Only had var, not let, or const
* Generally some syntax as ES6, but a lot of missing features. 

ES6:
* Supported in modern browsers
* Many new features that help us write cleaner, better, and faster code. 
* Still under active development. 

### Var, Let, & Const

* `var` -> creates a variable, older version, allows us to create variable in Function & Global Scope. If a variable is created in a code block it is treated as Global scope. 

```
if (name === 'Max') {
    var hobbies = ['cooking', 'camping'];
    console.log(hobbies);
}

console.log(hobbies);
```
> There is no error because hobbies is treated as a global variable. 

* `let` -> creates a variable in Block Scope. 
* `const` -> creates a constant, in Block Scope. 

> You should only use let and const when coding to avoid any issues. 

### Hoisting

The Engine looks for functions and variables throughout your script so that they can be used before they declared. For `var` it hoists the variable to the top of the script but assigns it with `undefined` rather than assigned it the value declared later on. 

> `let` and `const` do not work the same with hoisting as `var` does. 

### Strict Mode

```
"use strict";
```

Strict Mode disables certain behaviors within your script. 

## JavaScript Engines & What They Do

Browser executes the script as soon as the engine comes into contact with a script. 

JavaScript Parsing & Execution:
* Interpreter -> loads our script, reads it, translates it to bytecode and sends it to the compiler. 
* Compiler -> translates the interpreted code into machine code and then hands the machine code to your computer.  

> Interpretation and Compilation happens at the same time. 

Browser APIs -> Communication Bridges between JS and C++ logic built into the browser. 

JavaScript Engines:
* Chrome -> V8
* Firefox -> SpiderMonkey

## How Code Gets Executed

JavaScript Engine executes our code. 

* Heap -> Long term memory (Memory allocation). Stores data in your system memory and manages access to it. 
* Stack -> Execution Context -> Manages your program flow (function calls and communication). 

```
function getName() {
    return prompt('Your name: ', '');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();
```

The functions are stored in the heap. When are script runs, the browser pushes it into the stack. The stack starts with anonymous execution. The engine pushes the `greet()` function onto the stack. Engine then pushes `getName()` function onto the stack. `prompt()` function gets pushed onto the stack. When it is done executing it pops off the stack. Whenever a function returns a value or is done executing it is popped off the stack. 

> JS is single-threaded: "One thing happens at a time"

### Primitive vs. Reference Values

Primitive Values:
* Strings
* Numbers
* Booleans
* null
* undefined
* Symbol

> Stored in memory (normally on Stack), variable stores value itself. Copying a variable (assign to different variable) copies the value.

Reference Values:
* All other objects ("more expensive to create")

> Stored in memory (Heap), variable stores a pointer (address) to location in memory and not the value itself. Copying a variable (assign to a different variable) copies the pointer/reference and NOT the value itself. 

So if you create another variable for an array/object. The new variable name will point to the original object in memory. If you change one array you automatically change the other array. 

This is a default behavior and helps with decluttering memory, better performance, and avoid unnecessary duplication of data. 

### Spread Operator

`...`

To work around this default behavior you would use the spread operator (...). 

```
let person = {age: 30};
let anotherPerson = {...person};
```

> `...person` copies the person object into a new location in memory. Then you can change one object without affecting the other object. 

## Garbage Collection

The GC periodically checks the Heap for unused objects (objects without references). Removes unused objects from the heap. 

> The broswer handled Garbage Collection on its own. 

Memory Leaks ->  Unused objects, where you still hold references to it. 

# More About Functions

Parameters -> variables which you specify between parentheses when defining a function.

` function sayHi(name) {...};`

> `name` is the parameter.

Arguments -> the concrete values you pass to a function when calling that function.

`sayHi('Max');`

> `Max` is an argument of the function.

Methods -> functions within an object. 

### Function Declaration / Function Statement

```
function multiply (a, b) {
    return a * b;
}
```

Hoisted to top, can be declared anywhere in the file (i.e. also after it's used).

### Function Expression

```
const multiple = function (a, b) {
    return a * b;
}
```

Hoisted to top but not initialized/defined. Can NOT be declared anywhere in the file (i.e. not after it's used).











