type ArrowSide = 'RIGHT' | 'LEFT'

export interface SliderArrowProps {
  arrowSide: ArrowSide
  onClick?: () => {}
}

export interface SliderArrowContainerProps {
  arrowSide: ArrowSide
}
