const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '281f885b989b6c2958e75b2af64537c0';

const sendRequest = (endpoint, options) => {
  let optionsString = `?api_key=${API_KEY}`;
  for (const key in options) {
    optionsString += `&${key}=${options[key]}`;
  }

  return fetch(`${API_URL}${endpoint}${optionsString}`).then((data) =>
    data.json(),
  );
};

const init = async () => {
  // { id: 28, name: "Action" }
  // const { genres } = await sendRequest('genre/movie/list');

  // genres.forEach((genre) => {
  //   document.write(`<li>${genre.id}: ${genre.name}</li>`);
  // });

  // const trending = await sendRequest('trending/movie/week');
  // console.log(trending);

  // const keyword = await sendRequest('search/keyword', {
  //   query: 'love',
  // });
  // console.log(keyword);

  const discover = await sendRequest('discover/movie', {
    'vote_average.gte': 7,
    with_keywords: '9673',
  });
  console.log(discover);
};

init();
