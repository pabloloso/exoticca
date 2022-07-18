import styled from 'styled-components'

export const SliderWithCardsContainer = styled.div`
  .slick-track {
    margin: 40px 0px 40px 30px;
  }

  .slick-slide > div {
    margin-right: 50px;
  }

  .slick-disabled {
    display: none;
  }

  @media (max-width: 1024px) {
    .slick-slide > div {
      margin-right: 15px;
    }
  }
`
