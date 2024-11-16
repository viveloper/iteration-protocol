const iterableIterator = {
  i: 0,
  next() {
    this.i++;
    return {
      value: this.i <= 5 ? this.i : undefined,
      done: this.i > 5,
    };
  },
  [Symbol.iterator]() {
    return this;
  },
};

console.log(iterableIterator.next());
console.log(iterableIterator.next());
console.log(iterableIterator.next());
console.log(iterableIterator.next());
console.log(iterableIterator.next());
console.log(iterableIterator.next());

for (const item of iterableIterator) {
  console.log(item);
}

console.log([...iterableIterator]);
