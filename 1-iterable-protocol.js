const iterableObj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        return {
          value: i <= 5 ? i : undefined,
          done: i > 5,
        };
      },
    };
  },
};

const iterator = iterableObj[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const item of iterableObj) {
  console.log(item);
}

console.log([...iterableObj]);
