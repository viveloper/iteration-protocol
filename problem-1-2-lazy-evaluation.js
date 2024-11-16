const L = {
  map: function* (fn, iterable) {
    for (const v of iterable) {
      yield fn(v);
    }
  },
  filter: function* (fn, iterable) {
    for (const v of iterable) {
      if (fn(v)) yield v;
    }
  },
  take: function* (size, iterable) {
    if (size <= 0) return;
    for (const v of iterable) {
      yield v;
      if (!--size) break;
    }
  },
};

function pipe(...fns) {
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const job = (v) => {
  console.log(`job(${v})`);
  return v * v;
};
const mapFn = (v) => job(v);
const filterFn = (v) => v % 2;
const takeSize = 3;

function solution2(arr, mapFn, filterFn, takeSize) {
  const temp1 = L.map(mapFn, arr);
  const temp2 = L.filter(filterFn, temp1);
  const result = L.take(takeSize, temp2);
  return [...result];
}

function solution2_pipe(arr, mapFn, filterFn, takeSize) {
  const result = pipe(
    (v) => L.map(mapFn, v),
    (v) => L.filter(filterFn, v),
    (v) => L.take(takeSize, v)
  )(arr);
  return [...result];
}

const result = solution2_pipe(arr, mapFn, filterFn, takeSize);

console.log(result);
