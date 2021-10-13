var { Directus } = require("@directus/sdk");

exports.run = async function () {
  const directus = new Directus("http://147.182.243.206");

  // Wait for login to be done...
  await directus.auth.login({
    email: "admin@example.com",
    password: "abc123",
  });

  // ... before fetching items
  const products = await directus.items("product").readMany();
  console.log(products);
  console.log(products.data.map(a => {
      return a.title
  }));
  
};
