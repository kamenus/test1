import React, { useEffect, useState } from 'react'
import {
  ProfileFavouritesContainer, MainProfileDataContainer,
  ProfileRecommendationsContainer, ProfileContainer,
  ProfileImageContainer, ProfileDetailsContainer,
  ProfileFavouriteItem
} from './ProfilePage.styles'

import axios from 'utils/axios'
import { Card } from 'components/Card'
import _ from 'lodash'

const defaultProfile = {
  name: 'Aleksandr',
  birthdate: '05.11.2000',
  age: 21,
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
}

function ProfilePage () {
  const [profile, setProfile] = useState(defaultProfile)
  const [recommendations, setRecommendations] = useState([])
  const [favourites, setFavourites] = useState([])

  async function fetchMovies () {
    const { data } = await axios.get(`films/top?type=TOP_250_BEST_FILMS&page=${1}`)
    return data
  }

  async function fetchRecommendations (favourites) {
    const recommendations = await Promise.allSettled(favourites.map(async (favourite) => {
      const { kinopoiskId } = favourite
      const { data } = await axios.get(`/films/${kinopoiskId}/similars`)
      return data.items
    }))
    console.log('recommendations: ', recommendations)
    // return []
    return _.uniqBy(recommendations.reduce((acc, curr) => {
      if (curr.value) {
        console.log('curr:', curr)
        acc = [...acc, ...curr.value]
      }
      return acc
    }, []), 'filmId')
  }

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]')
    setFavourites(favourites)
  }, [])

  useEffect(() => {
    if (!favourites.length) {
      return
    }

    fetchRecommendations(favourites)
      .then(data => {
        // data.
        setRecommendations(data)
        // console.log('fetchRecommendations: ', result)
      })
  }, [favourites])

  const renderRecommendations = (recommendations) => {
    return recommendations.map((recommendation) => 
      <Card
        key={ recommendation.filmId }
        { ...recommendation }
      />
    )
  }

  const renderFavourites = (favourites) => {
    return favourites.map((favourite) => 
      <a href={`/movie/${favourite.filmId}`}>
        <ProfileFavouriteItem
          key={ favourite.filmId }
        >
          { favourite.nameRu }
        </ProfileFavouriteItem>
      </a>
    )
  }

  return (
    <ProfileContainer>
      <div style={{ flex: '3' }}>
        <MainProfileDataContainer>
          <ProfileImageContainer>
            <img src={ profile.image } alt="test" />
          </ProfileImageContainer>
          <ProfileDetailsContainer>
            <h1>
              { profile.name }
            </h1>
            <h3>
              { profile.birthdate } ({ profile.age })
            </h3>
          </ProfileDetailsContainer>
        </MainProfileDataContainer>
        <div>
          <h2>
            User recommendations
          </h2>
        </div>
        <ProfileRecommendationsContainer>
          { renderRecommendations(recommendations) }
        </ProfileRecommendationsContainer>
      </div>
      <ProfileFavouritesContainer>
        { renderFavourites(favourites) }
      </ProfileFavouritesContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
