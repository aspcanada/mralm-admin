const { faker } = require('@faker-js/faker');

const deals = []
const labels = ["Active", "Expired"];

Array.from({ length: 30 }).forEach((_, idx) => {
    deals.push(createRandomDeal(idx));
});

function getRandomLabel() {
    return labels[Math.floor(Math.random() * labels.length)];
}

function getImages() {
  const images = [];
  Array.from({ length: 3 }).forEach(() => {
      images.push(faker.image.imageUrl(640, 480, "house", true));
  });
  return images;
}

function createRandomDeal(idx) {
  return {
      img: getImages(),
      type: "rent",
      propertyStatus: "For Sale",
      label: [getRandomLabel()],
      country: faker.address.cityName(),
      title: `Little Acorn Farm ${idx+1}`,
      price: faker.finance.amount(100000, 700000, 0),
      details: "The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.",
      home: "Virtual Home",
      bed: faker.datatype.number({ max: 5 }),
      bath: faker.datatype.number({ max: 3 }),
      sqft: faker.datatype.number({ min: 1000, max: 4000}),
      rooms: faker.datatype.number(4),
      date: "August 4, 2022",
      video: "/assets/video/video2.mp4",
      id: idx,
      propertyType: "Office",
      agencies: "Lincoln",
  }
}


export { deals };
