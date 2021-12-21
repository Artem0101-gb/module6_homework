function func1 (x) {
    return 9;
}
function sum (func, x) {
  return func(x) + x;
}
console.log(sum(func1, 8));