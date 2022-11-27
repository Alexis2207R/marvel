// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// var id = 1009148
// id = id + getRandomArbitrary(0, 2352);
// console.log(id);

var id = 1010354;

const url =
  `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=13/11/2022, 04:17:35&apikey=c32b8b0eec5480f0d02c8c536faa35ae&hash=86d8e0799016c8041e88e28744398c38`

const ApiPersonajeDest = async () => {
  const response = await fetch( url );
  const data = await response.json();
  return data;
};

export default ApiPersonajeDest;