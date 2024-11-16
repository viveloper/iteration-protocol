async function job(v) {
  console.log(`job(${v})`);
  await delay(1000);
  return v * v;
}

function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapFn = (v) => job(v);

function solution1(arr, mapFn) {
  const ps = arr.map(mapFn);
  return Promise.all(ps);
}

async function main() {
  const result = solution1(arr, job);
  console.log(await result);
}

main();
