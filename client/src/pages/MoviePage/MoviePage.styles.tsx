import styled from 'styled-components'

export const MoviePageContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  background: #f2f2f2;
`

export const MoviePosterContainer = styled.div`
  flex: 1;
  min-height: 100%;

  .movie-poster-container {
    width: 100%;
    padding: 100px 20px 60px;

    img {
      width: 100%;
    }
  }
`

export const MovieInfoContainer = styled.div`
  position: relative;
  flex: 3;
  min-height: 100%;
  padding: 100px 20px 60px;
`

export const MovieHeader = styled.h1`
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -.5px;
  margin-top: 0;
  margin-bottom: 12px;
`

export const MovieRecommendationsContainer = styled.div`
  padding: 20px 0;
`

export const MovieRecommendations = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const MovieDataTable = styled.div`
`

export const MovieDataControls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
