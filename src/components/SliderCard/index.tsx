import React from 'react'

import { SliderCardProps } from './interfaces'
import {
  SliderCardContainer,
  CardHeader,
  CardHeaderCampaign,
  CardHeaderImage,
  CardHeaderTitleWrapper,
  CardHeaderTitle,
  CardHeaderSubTitle,
  CardContent,
  CardContentTitle,
  CardContentPriceWrapper,
  CardContentPriceFrom,
  CardContentPriceBefore,
  CardContentPriceAfter
} from './styles'

export default function SliderCard ({
  days,
  destination,
  images,
  oldPriceBeautify,
  fromPriceBeautify,
  pricingPercentage,
  title
}: SliderCardProps) {
  return (
    <SliderCardContainer>
      <CardHeader>
        <CardHeaderCampaign>-{pricingPercentage}%</CardHeaderCampaign>
        <CardHeaderImage src={images.desktop} />
        <CardHeaderTitleWrapper>
          <CardHeaderTitle>{destination}</CardHeaderTitle>
          <CardHeaderSubTitle>{days} Days</CardHeaderSubTitle>
        </CardHeaderTitleWrapper>
      </CardHeader>
      <CardContent>
        <CardContentTitle>{title}</CardContentTitle>
        <CardContentPriceWrapper>
          <CardContentPriceFrom>From</CardContentPriceFrom>
          <CardContentPriceBefore>{oldPriceBeautify}</CardContentPriceBefore>
          <CardContentPriceAfter>{fromPriceBeautify}</CardContentPriceAfter>
        </CardContentPriceWrapper>
      </CardContent>
    </SliderCardContainer>
  )
}
