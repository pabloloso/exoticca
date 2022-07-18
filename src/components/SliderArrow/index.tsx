import React from 'react'

import { SliderArrowProps } from './interfaces'
import {
  SliderArrowContainer,
  IconRoundedWrapper,
  IconNextRounded,
  IconWrapper
} from './styles'

export default function SliderArrow ({ arrowSide, onClick }: SliderArrowProps) {
  return (
    <SliderArrowContainer
      className={onClick === null ? 'slick-disabled' : ''}
      arrowSide={arrowSide}
      onClick={onClick}
      >
     <IconRoundedWrapper>
        <IconNextRounded>
          <IconWrapper>
            <svg height="28" viewBox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="svg-1658140354994-3313">
              <path d="m25.003 16c0 .531-.209 1.038-.584 1.413l-14.009 14.003c-.781.781-2.047.778-2.828-.003s-.778-2.047.003-2.828l12.591-12.584-12.591-12.591c-.781-.781-.781-2.044 0-2.825s2.044-.781 2.825 0l14.003 14.003c.375.372.587.881.591 1.413z" />
            </svg>
          </IconWrapper>
        </IconNextRounded>
      </IconRoundedWrapper>
    </SliderArrowContainer>
  )
}
