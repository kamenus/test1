import styled from 'styled-components'

import { SliderPageType, SliderImageContainerType } from './Slider.types'

export const SliderMain = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  margin: 0 auto;
  overflow: hidden;
`

export const SliderImageContainer = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props: SliderImageContainerType) => -100 * props.activeSlide}%);
  transition: transform 300ms ease;
`

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

export const SliderPaginator = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SliderPage = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${(props: SliderPageType) => props.isActive ? '#000000' : '#f2f2f2'};
  cursor: pointer;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`

export const SliderArrows = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SliderArrow = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: blue;
`
