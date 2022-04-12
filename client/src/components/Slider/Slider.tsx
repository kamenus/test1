import React, { useState, useEffect, useMemo } from 'react'
import {
  SliderMain, SliderImageContainer, SliderPaginator,
  SliderPage, SliderArrows, SliderArrow, SliderImage
} from './Slider.styles'
import { ISliderItem } from './Slider.types'

const sliderContent = [
  {
    id: 0,
    imgSrc: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/62ec3c58-faa5-11eb-b38f-36727e117d26.jpeg',
    href: ''
  },
  {
    id: 1,
    imgSrc: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/05b86812-fa91-11eb-b600-5a9d6107232a.jpeg',
    href: ''
  },
  {
    id: 2,
    imgSrc: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/f93bfd00-faa2-11eb-b600-5a9d6107232a.jpeg',
    href: ''
  }
]

function Slider() {
  const [sliderItems, setSliderItems] = useState(sliderContent)
  const [activeSlide, setActiveSlide] = useState(0)

  const changeActiveSlide = (slideIndex: number) => {
    let newActiveSlide = 0

    if (slideIndex < 0) {
      newActiveSlide = sliderItems.length - 1
    } else if (slideIndex <= sliderItems.length - 1) {
      newActiveSlide = slideIndex
    } 

    setActiveSlide(newActiveSlide)
  }

  useEffect(() => {
    const slideInterval = setTimeout(() => {
      changeActiveSlide(activeSlide + 1)
    }, 7000)

    return () => clearTimeout(slideInterval)
  }, [activeSlide])

  useEffect(() => {
    setSliderItems(sliderItems)
  }, [sliderItems])

  const renderSliderPages = useMemo(() =>
    sliderItems.map((sliderItem, pos) =>
      <SliderPage
        isActive={ sliderItem.id === activeSlide }
        key={ sliderItem.id }
        onClick={ () => changeActiveSlide(pos) }
      />
    ),
    [sliderItems, activeSlide])

  const renderImages = useMemo(() => 
    sliderItems.map(sliderItem => (
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          overflow: 'hidden',
          padding: '0 20px'
        }}
        key={ sliderItem.id }
      >
        <SliderImage src={sliderItem.imgSrc} alt="" />
      </div>
    )),
    [sliderItems])

  return (
    <SliderMain>
      <SliderImageContainer activeSlide={activeSlide}>
        {renderImages}
      </SliderImageContainer>
      <SliderArrows>
        <SliderArrow onClick={() => changeActiveSlide(activeSlide - 1)}>
        </SliderArrow>
        <SliderArrow onClick={() => changeActiveSlide(activeSlide + 1)}>
        </SliderArrow>
      </SliderArrows>
      <SliderPaginator>
        { renderSliderPages }
      </SliderPaginator>
    </SliderMain>
  )
}

export default Slider
