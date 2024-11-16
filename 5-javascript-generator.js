function* generator() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

const iterableIterator = generator();

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
