//  Practice 1: How the Event Loop works
const eventLoop =
  "First, the engine checks the Call Stack. If the Call Stack is empty, the Event Loop " +
  "looks at the Callback Queue. If there are pending tasks in the queue, the Event Loop " +
  "pushes them into the Call Stack to be executed one by one.";

//Practice 2: Difference between Call Stack and Callback Queue
const difBetweenCallStackAndqueue =
  "The Call Stack handles synchronous tasks using a LIFO (Last-In-First-Out) system, " +
  "executing code immediately. The Callback Queue stores asynchronous tasks that are " +
  "waiting to run once the Call Stack becomes available.";

//  Practice 3: How a single-threaded engine handles asynchronous tasks
const asynchronous =
  "JavaScript remains single-threaded by offloading asynchronous tasks (like timers or " +
  "API requests) to the browser's Web APIs. Once a task completes, it enters the " +
  "Callback Queue. The Event Loop then moves it to the main thread for execution only " +
  "when the Call Stack is empty, ensuring the UI remains responsive.";
