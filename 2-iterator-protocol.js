const iterator = {
  i: 0,
  next() {
    this.i++;
    return {
      value: this.i <= 5 ? this.i : undefined,
      done: this.i > 5,
    };
  },
};

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
