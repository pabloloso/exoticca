import styled from 'styled-components'

export const SliderWithCardsContainer = styled.div`
  .slick-track {
    margin: 30px 0px 30px 30px;
  }

  .slick-slide > div {
    margin-right: 50px;
  }

  .slick-disabled {
    display: none;
  }

  @media (max-width: 1024px) {
    .slick-track {
      margin: 30px 0px 30px 10px;
    }

    .slick-slide > div {
      margin-right: 15px;
    }
  }
`
