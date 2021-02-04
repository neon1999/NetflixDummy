const request = {
  fetchTrending: `/trending/all/day?api_key=db7a5cf9e06cc0ab54b8057984df5465`,
  fetchRomance: `/discover/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_genres=10749`,
  fetchComedy: `/discover/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_genres=35`,
  fetchAction: `/discover/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_genres=27`,
  fetchDocumentries: `/discover/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_genres=99`,
  fetchTopRated: `/movie/top_rated?api_key=db7a5cf9e06cc0ab54b8057984df5465&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=db7a5cf9e06cc0ab54b8057984df5465&with_networks=213`,
};

export default request;
