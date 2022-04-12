import React, { useEffect, useState } from 'react'
import {
  MoviePageContainer, MoviePosterContainer,
  MovieInfoContainer, MovieHeader, MovieRecommendations,
  MovieRecommendationsContainer, MovieDataControls
} from './MoviePage.styles'
import { Button } from '@material-ui/core'
import { Card } from '../../components/Card'

import axios from 'utils/axios'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

const MoviePage = () => {
  const { movieId }: any = useParams()
  const [movieData, setMovieData]: any = useState({})
  const [movieSimilar, setMovieSimilar]: any = useState([])

  async function fetchMovieData () {
    const { data } = await axios.get(`/films/${movieId}`)
    return data
  }

  async function fetchRecommendations () {
    const { data } = await axios.get(`/films/${movieId}/similars`)
    return data
  }

  useEffect(() => {
    fetchMovieData()
      .then(data => {
        setMovieData(data)
      })
      .catch(err => {
        console.error(err)
      })
    
    fetchRecommendations()
      .then(data => {
        setMovieSimilar(data.items)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  function renderMovies (movies: any[]) {
    return movies.map(movie =>
      <Card
        key={ movie.filmId }
        { ...movie }
      />
    )
  }

  function handleAddToFavourites () {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]')
    const newFavourites = _.uniqBy([...favourites, movieData], 'kinopoiskId')
    localStorage.setItem('favourites', JSON.stringify(newFavourites))
  }

  return (
    <>
      <MoviePageContainer>
        <MoviePosterContainer>
          <div className='movie-poster-container'>
            <img className='movie-poster-container__image' src={ movieData.posterUrl } alt="" />
          </div>
        </MoviePosterContainer>
        <MovieInfoContainer>
          <div>
            <MovieHeader>
              <span>
                {`${movieData.nameRu} (${movieData.year})`}
              </span>
            </MovieHeader>
          </div>
          <h3>
            { movieData.slogan }
          </h3>
          <div>
            <h4>Описание</h4>
            { movieData.description }
          </div>
          <h3>О фильме</h3>
          <MovieDataControls>
            <Button
              color="primary"
              onClick={handleAddToFavourites}
            >
              Add
            </Button>
          </MovieDataControls>
        </MovieInfoContainer>
      </MoviePageContainer>
      <MovieRecommendationsContainer>
        <div>
          <h2>
            Recommendations:
          </h2>
        </div>
        <MovieRecommendations>
          { renderMovies(movieSimilar) }
        </MovieRecommendations>
      </MovieRecommendationsContainer>
    </>
  )
}

export default MoviePage
