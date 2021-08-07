const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input();
const list = input().split(' ').map(Number);

list.sort((a, b) => a - b);
console.log(`${list[0]} ${list[list.length - 1]}`);
