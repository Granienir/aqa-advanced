import axios from "axios";

// const postRes = await axios.post("https://api.restful-api.dev/objects", {
//   name: "Apple1 MacBook Pro 16",
//   data: {
//     year: 2019,
//     price: 1849.99,
//     "CPU model": "Intel Core i9",
//     "Hard disk size": "1 TB",
//   },
// });

// console.log(postRes.status);
// console.log(postRes.data);
// const res = await axios.get("https://api.restful-api.dev/objects");
// console.log(res.data);

const ID = "ff8081818fb998eb018fcfb9af412a53";

let itHillelRes = await axios.get("https://api.restful-api.dev/objects", {
  params: { id: ID },
});

console.log(itHillelRes.data);

// const postRes = await axios.put(`https://api.restful-api.dev/objects/${ID}`, {
//   name: "Apple12  MacBook Pro 24",
//   data: {
//     year: 2024,
//     price: 1849.99,
//     "CPU model": "Intel Core i9",
//     "Hard disk size": "1 TB",
//   },
// });
