export const getGif = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=O03LTueWjpv46Fgmc9QMTn7N5yxuXKaZ&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs
};
