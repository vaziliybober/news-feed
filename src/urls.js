export default {
  news: () => 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=5d4d5e4a3bec47d492e57abe7ed90ee4',
  proxify: (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
};
