import styled from 'styled-components'

import { SliderArrowContainerProps } from './interfaces'

export const SliderArrowContainer = styled.div<SliderArrowContainerProps>`
  opacity: 1;
  position: absolute;
  z-index: 10;
  top: 30%;
  overflow: hidden;
  width: 56px;
  cursor: pointer;

  ${props => props.arrowSide === 'RIGHT' ? 'right: 0px;' : 'left: 0px; transform: rotate(180deg);'}
`

export const IconRoundedWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconNextRounded = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 20%) 2px 2px 8px 0px;
  padding: 32px 44px 28px 22px;
`

export const IconWrapper = styled.div`
  display: inline-block;
  cursor: inherit;
  width: 28px;
  height: 28px;
  z-index: 1;
`
