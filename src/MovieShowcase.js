import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
  //  const allData = movieData.map(data => <MovieCard title={data.title} IMDBRating={data.IMDBRating} />)

    return movieData.map((data, index) => <MovieCard key={index} title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster}/>)
   
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
