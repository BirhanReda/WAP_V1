##
1.
start -- synchronous code run first 
end --- this also synchronous run  after start
next Thick --- asynchronous code next thick will be prioritized first
promise-- after next thick this should be next 
time out 0---  goes into the Timers phase
Runs after the event loop checks if the timer delay has expired
immediate --- goes into the Check phase
Runs after the poll phase completes


##
2.

immediate inside I/O 
timeout inside I/O -
output explanation:-
- It is because when the function run the read file goes into poll phase then after poll will find the check phase since setImmediate is inside check phase so it will run first. when it finsh and return back to timer then the  timeout will run next.


###
1. What is the role of the poll phase in the event loop?

The poll phase is where Node.js:

Retrieves I/O events (file reads, network requests)
Executes their callbacks
Waits for new I/O events if nothing else is pending

From your notes:
poll → all node core modules always busy
It is basically the main working phase — where most I/O callbacks run

2. process.nextTick(f)
- has highest priority
- executes immediately after current operation completes
- BEFORE any event loop phase
- BEFORE Promises (microtasks)

3. Blocking the event loop prevents Node.js from handling any other requests until the blocking task completes ,because only one piece of code runs at a time. 


