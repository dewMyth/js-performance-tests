const axios = require("axios");

const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // Generate an array of 100 numbers

const testForEach = async () => {
  console.time("forEach Total Time");

  for (const number of numbers) {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
  }

  console.timeEnd("forEach Total Time");
};

const testPromiseAll = async () => {
  console.time("Promise.all Total Time");

  const promises = numbers.map((number) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`)
  );

  await Promise.all(promises);

  console.timeEnd("Promise.all Total Time");
};

const runTests = async () => {
  console.log("Testing with forEach:");
  await testForEach();

  console.log("\nTesting with Promise.all:");
  await testPromiseAll();
};

runTests();
