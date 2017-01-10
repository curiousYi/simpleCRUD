const Faker = require('faker');


const getFakeAddress = () => {
  return Faker.address.streetAddress();
}

const getFirstName = () =>{
  return Faker.name.firstName();
};

const getLastName = () =>{
  return Faker.name.lastName();
};

const getFakeTweet = () => {
  return Faker.lorem.sentence();
};
//address
const getFakeAge = () =>{

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return getRandomInt(1,120);
}

const randArrayEl = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = {
    getFakeAddress: getFakeAddress,
    getFirstName: getFirstName,
    getLastName: getLastName,
    getFakeAge: getFakeAge,
    randArrayEl: randArrayEl,
    getFakeTweet: getFakeTweet
}
