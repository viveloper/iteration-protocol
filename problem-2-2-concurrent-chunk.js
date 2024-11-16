const L = {
  take: function* (size, iterable) {
    if (size <= 0) return;
    for (const v of iterable) {
      yield v;
      if (!--size) break;
    }
  },
  chunk: function* (size, iterable) {
    const iterator = iterable[Symbol.iterator]();
    while (true) {
      const arr = [...this.take(size, iterator)];
      if (arr.length) yield arr;
      if (arr.length < size) break;
    }
  },
  map: function* (fn, iterable) {
    for (const v of iterable) {
      yield fn(v);
    }
  },
};

async function fromAsync(iterable) {
  const arr = [];
  for (const promise of iterable) {
    arr.push(await promise);
  }
  return arr;
}

function pipe(...fns) {
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg);
}

async function job(v) {
  console.log(`job(${v})`);
  await delay(1000);
  return v * v;
}

function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

async function main() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mapFn = (v) => job(v);

  const temp1 = L.chunk(3, arr);
  const temp2 = L.map((chunk) => chunk.map(mapFn), temp1);
  const temp3 = L.map((ps) => Promise.all(ps), temp2);
  console.log([...(await fromAsync(temp3))].flat());

  const result = pipe(
    (v) => L.chunk(3, v),
    (v) => L.map((chunk) => chunk.map(mapFn), v),
    (v) => L.map((ps) => Promise.all(ps), v),
    (v) => fromAsync(v)
  )(arr);
  console.log((await result).flat());
}

main();
