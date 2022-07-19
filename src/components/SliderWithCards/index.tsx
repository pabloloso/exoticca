import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SliderArrow from 'components/SliderArrow'
import SliderCard from 'components/SliderCard'

import { SliderWithCardsProps } from './interfaces'
import { SliderWithCardsContainer } from './styles'

export default function SliderWithCards ({ cards }: SliderWithCardsProps) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SliderArrow arrowSide='RIGHT' />,
    prevArrow: <SliderArrow arrowSide='LEFT' />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <SliderWithCardsContainer>
      <Slider {...settings}>
        {cards.map(card => (
          <SliderCard
            key={card.id}
            days={card.days}
            destination={card.destination}
            images={card.images[0]}
            oldPriceBeautify={card.priceDetail.oldPriceBeautify}
            fromPriceBeautify={card.priceDetail.fromPriceBeautify}
            pricingPercentage={card.priceDetail.pricingPercentage}
            title={card.title}
          />
        ))}
      </Slider>
    </SliderWithCardsContainer>
  )
}
