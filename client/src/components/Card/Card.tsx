import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import {
  CardMain, CardImageContainer, CardDescriptionContainer,
  CardBtnsContainer
} from './Card.styles'

const RemoveBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 15px;
    line-height: 25px;
  }
`

function Card (props: any) {
  const {
    filmId, nameEn, nameRu, posterUrlPreview,
    rating, year } = props
  const movieUrl = `/movie/${filmId}`

  return (
    <CardMain>
      <a href={movieUrl}>
        <CardImageContainer className='card-image-containier'>
          <img src={ posterUrlPreview + '?size=m' } alt="" />
        </CardImageContainer>
      </a>
      <CardDescriptionContainer>
        <a href={movieUrl}>
          <div style={{ height: '40px' }}>
            { nameRu }
          </div>
        </a>
        <div>
          { year }
        </div>
      </CardDescriptionContainer>
    </CardMain>
  )
}

export default Card
