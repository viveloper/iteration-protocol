function Generator() {
  let i = 0;
  return {
    next() {
      i++;
      return {
        value: i <= 5 ? i : undefined,
        done: i > 5,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

const iterableIterator = Generator();

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
