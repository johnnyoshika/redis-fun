const redis = require('redis');

const storeString = async client => {
  await client.set('hello', 'world');
  const value = await client.get('hello');
  console.log('hello', value);
};

const storeJson = async client => {
  await client.json.set('people:1', '$', {
    name: 'Roberta McDonald',
    pets: [
      {
        name: 'Rex',
        species: 'dog',
        age: 3,
        isMammal: true,
      },
      {
        name: 'Goldie',
        species: 'fish',
        age: 2,
        isMammal: false,
      },
    ],
  });

  const fullResults = await client.json.get('people:1', '$');
  console.log('fullResults', fullResults);

  const filteredResults = await client.json.get(
    'people:1',
    {
      path: ['.pets[1].name', '.pets[1].age'],
    },
  );

  // { '.pets[1].name': 'Goldie', '.pets[1].age': 2 }
  console.log('filteredResults', filteredResults);
};

(async () => {
  const client = redis.createClient({
    host: 'localhost',
    port: 6379,
  });
  client.on('error', err => console.log('Redis Client Error', err));
  await client.connect();

  await storeString(client);
  await storeJson(client);
})();
