const { faker } = require('@faker-js/faker');

const users = []

Array.from({ length: 10 }).forEach(() => {
  users.push(createRandomUser());
});

function createRandomUser() {
  return {
    // id: faker.datatype.number(),
    img: faker.image.avatar(),
    properties: `${faker.datatype.number()} properties`,
    label: faker.datatype.boolean(),
    name: faker.name.fullName(),
    mobile: faker.phone.number(),
    mail: faker.internet.email(),
    pinCode: faker.address.zipCode(),
    occupation: faker.name.jobTitle(),

    // userId: faker.datatype.uuid(),
    // username: faker.internet.userName(),
    // password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  };
}

export { users };
