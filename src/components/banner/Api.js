// PRIVATEKEY = 'cc1040d7d238001efb02f69c895ba166e2184d32'
// PUBLICKEY = 'c32b8b0eec5480f0d02c8c536faa35ae'

// const apikey    = 'c32b8b0eec5480f0d02c8c536faa35ae';
// const ts        = '13/11/2022, 04:17:35';
// const hash      = '86d8e0799016c8041e88e28744398c38';

// https://gateway.marvel.com:443/v1/public/characters?ts=13/11/2022, 04:17:35&apikey=c32b8b0eec5480f0d02c8c536faa35ae&hash=86d8e0799016c8041e88e28744398c38

// bryan:
// https://gateway.marvel.com:443/v1/public/characters?ts=13/11/2022, 04:17:35&apikey=f688834bc1e1392c1b176ae13a11dd0f&hash=3ea7b8c8dfa269b8a6bf1fcbe521a021

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// var id = 1009148
// id = id + getRandomArbitrary(0, 2352);
// console.log(id);

// const url =
//   `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=13/11/2022, 04:17:35&apikey=c32b8b0eec5480f0d02c8c536faa35ae&hash=86d8e0799016c8041e88e28744398c38`

const url =
  `https://gateway.marvel.com:443/v1/public/characters?limit=8&ts=13/11/2022, 04:17:35&apikey=c32b8b0eec5480f0d02c8c536faa35ae&hash=86d8e0799016c8041e88e28744398c38`

const Api = async () => {
  const response = await fetch( url );
  const data = await response.json();
  return data;
};

export default Api;