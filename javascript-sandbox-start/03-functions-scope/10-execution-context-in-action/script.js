// Synchronous Execution:
// Synchronous execution refers to the default behavior of JavaScript, where code is executed sequentially in the order it appears. Each line of code is executed one after another, and the program waits for a task to complete before moving on to the next one. This means that if a task takes a long time to complete, it can block the execution of subsequent code, resulting in a delay or "blocking" behavior. Synchronous code is easy to understand and reason about but can lead to performance issues when dealing with time-consuming operations or tasks that require waiting.

// Asynchronous Execution:
// Asynchronous execution, on the other hand, allows code to run independently and not block the execution of subsequent code. It enables JavaScript to handle time-consuming tasks efficiently without blocking the execution flow. Asynchronous operations are often associated with tasks such as making network requests, reading/writing files, or handling user interactions. Instead of waiting for a task to complete, asynchronous code initiates a task and continues executing the next line of code without waiting for the task to finish. When the task is completed, a callback function or a promise is used to handle the result or perform further actions.

// JS is synchronous -- code is executed order unless otherwise specified by asynchronous code

// Execution Context:
// Execution context has two phases: creation and execution
// Memory Creation Phase:
// 1. Create global object (browser = window, Node.js = global)
// 2. Create this keyword and bind to global object
// 3. Setup memory space for storing variables and functions (hoisting)
// 4. Store functions and variables global-execution-context. Functions = their code. Variables = undefined
// Execution Phase:
// 1. Execute code line-by-line
// 2. Create a new 'execution context' for each function call -- i.e. recursion


const x = 100;
const y = 50;
function getSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}
const sum1 = getSum(x, y);
const sum2 = getSum(100, 200);

// Execution Context in Action:
// ---- Phase 1 of 2 for Global Execution Context -- Memory Creation Phase ----
// 1. 'x' allocated to memory and set to 'undefined'
// 2. 'y' allocated to memory and set to 'undefined'
// 3. 'getSum' allocated to memory and stores all the code for the function
// 4. 'sum1' allocated to memory and set to 'undefined'
// 5. 'sum2' allocated to memory and set to 'undefined'
// ---- Phase 2 of 2 for Global Execution Context -- Execution Phase ----
// 1. 'x' set to 100
// 2. 'y' set to 50
// 3. Skip 'getSum' function, it hasn't been called yet
// 4. Calls 'getSum' function, creating a new execution context
    // ---- Phase 1 of 2 for getSum Execution Context -- Memory Creation Phase ----
    // 1. 'n1' and 'n2' parameters allocated to memory and set to 'undefined'
    // 2. 'sum' allocated to memory and set to 'undefined'
    // ---- Phase 2 of 2 for getSum Execution Context -- Execution Phase ----
    // 1. 'n1' set to 100; 'n2' set to 50
    // 2. 'sum' set to result of calculation, 150
    // 3. Return 'sum' to global execution context
// ---- Cont'd... Phase 2 of 2 for Global Execution Context -- Execution Phase ----
// 5. 'sum1' set to return of 'getSum', 150
// 6. Open new execution context for second call of 'getSum'...

// the video (both) are elite!