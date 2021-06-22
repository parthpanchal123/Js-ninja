// Often use console.logs() while debugging right ? Lets do it in a better way ?

console.log("A simple log statement"); // This makes it difficult when you have multiple log statements in you app

const foo = () => {
  console.trace("A nicer way to debug ");
};

foo();

/*
Trace: A nicer way to debug
    at foo (/home/im_parth/Desktop/Web/Js-tricks/Using_console_trace/index.js:6:11)
    at Object.<anonymous> (/home/im_parth/Desktop/Web/Js-tricks/Using_console_trace/index.js:9:1)


    You can directly hop on by ctrl + click and reach the log statement quickly

*/
