import styled from "styled-components";

export const CardMain = styled.div`
  min-width: 250px;
  width: 250px;
  border-radius: 15px;
  padding-bottom: 1rem;
  margin: 10px;
  box-shadow: 0 2px 4px rgb(33 32 31 / 15%);
  transition: box-shadow .3s ease;
  // cursor: pointer;

  &:hover {
    box-shadow: 6px 6px 20px 0 rgb(117 115 111 / 20%);

    .card-image-containier::before {
      opacity: 1;
    }
  }
`

export const CardImageContainer = styled.div`
  position: relative;
  // width: 300px;
  height: 300px;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid black;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 0 0;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
    background-color: rgba(0,0,0,.15);
    transition: opacity .15s ease-in-out;
    border-radius: 15px 15px 0 0;
  }
`

export const CardDescriptionContainer = styled.div`
  padding: 0 0.5rem;
  font-size: 16px;

`

export const CardBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`
