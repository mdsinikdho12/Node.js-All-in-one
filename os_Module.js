const os = require("os");
// Node.js OS Module
// What is the OS Module?
// The OS module in Node.js provides a powerful set of utilities for interacting with the underlying operating system.
// It offers a cross-platform way to access system-related information and perform common operating system tasks.

console.log(os.version()); // windows 11 pro
console.log(os.totalmem()); // totale memory
console.log(os.freemem()); // free memory
console.log(os.cpus()); // show cpus information
console.log(os.networkInterfaces()); // show network information
