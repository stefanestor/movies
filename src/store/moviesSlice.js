import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMoviesByPageAndName } from '../api/moviesApi';

const initialState = {
  selectedMovie: null,
  movies: [],
  page: 1
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getMovieById = (movieId) =>
  async (dispatch) => {
    const response = await getMovie(movieId);
    dispatch(clickOnMovie(response))
  };

export  const getMovies = (name ='superhero', page = 1) => async (dispatch)=> {
    const response = await getMoviesByPageAndName(page, name);
    dispatch(loadMoreMovies(response.data.Search)) 
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    clickOnMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    loadMoreMovies: (state, action) =>{
      state.movies=[...state.movies, ...action.payload];
      state.page+=1;
    }
  },
});

export const { clickOnMovie, loadMoreMovies} = moviesSlice.actions;


export default moviesSlice.reducer;
