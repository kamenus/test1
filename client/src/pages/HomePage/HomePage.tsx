import React, { useEffect, useRef, useState } from 'react'
import axios from 'utils/axios'
import { HomePageContainer } from './HomePage.styles'
import { Card } from '../../components/Card'

const HomePage = () => {
  const [films, setFilms]: any[] = useState([])
  const [page, setPage] = useState(1)
  const containerRef = useRef<HTMLInputElement | null>(null)

  async function fetchMovies () {
    const { data } = await axios.get(`films/top?type=TOP_250_BEST_FILMS&page=${page}`)
    return data
  }

  useEffect(() => {
    fetchMovies()
      .then(data => {
        const newFilms = [...films, ...data.films]
        setFilms(newFilms)
      })
      .catch(err => {
        console.error(err)
      })
  }, [page])

  useEffect(() => {
    const onScroll = () => {
      console.log('scroll')
    }
    if (containerRef && containerRef.current) {
      containerRef && containerRef.current.addEventListener('scroll', onScroll)
    }

    return () => {
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener('scroll', onScroll)
      }
    }
  }, [containerRef])

  function renderMovies (movies: any[]) {
    return movies.map(movie =>
      <Card
        key={ movie.filmId }
        { ...movie }
      />
    )
  }

  return (
    <HomePageContainer ref={ containerRef }>
      { renderMovies(films) }
    </HomePageContainer>
  )
}

export default HomePage
