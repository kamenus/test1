import styled from "styled-components";

export const ProfileFavouritesContainer = styled.div`
  flex: 1;
`

export const MainProfileDataContainer = styled.div`
  display: flex;
  flex-direction: row;

`

export const ProfileRecommendationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
`

export const ProfileContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`

export const ProfileImageContainer = styled.div`

  img {
    height: 300px;
    width: 200px;
    border: 1px solid black;
  }
`

export const ProfileDetailsContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`

export const ProfileFavouriteItem = styled.div`
  padding: 5px 2px;
  cursor: pointer;
`
