export type SliderPageType = {
  isActive?: boolean
}

export type SliderImageContainerType = {
  activeSlide: number
}

export interface ISliderItem {
  id: number,
  imgSrc: string,
  href: string
}
