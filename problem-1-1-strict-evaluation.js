const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const job = (v) => {
  console.log(`job(${v})`);
  return v * v;
};
const mapFn = (v) => job(v);
const filterFn = (v) => v % 2;
const takeSize = 3;

function solution1(arr, mapFn, filterFn, takeSize) {
  return arr.map(mapFn).filter(filterFn).slice(0, takeSize);
}

const result = solution1(arr, mapFn, filterFn, takeSize);
console.log(result);
