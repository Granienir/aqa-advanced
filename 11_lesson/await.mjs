// const planetNames = [];

// for (let i = 1; i < 11; i++) {
//   const res = await fetch(`https://swapi.dev/api/planets/${i}`);
//   const body = await res.json();
//   console.log(body.name);
//   planetNames.push(body.name);
// }

// console.timeEnd("fetch");
// console.log(planetNames);

const promisesArr = [];
for (let i = 1; i < 11; i++) {
  promisesArr.push(
    fetch(`https://swapi.dev/api/planets/${i}`)
      .then((res) => res.json())
      .then((j) => j.name)
  );
}

const results = await Promise.all(promisesArr);
console.timeEnd("promiseAll");
console.log(results);
