import React from 'react'

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

export default function SliderCard () {
  return (
    <SliderCardContainer>
      <CardHeader>
        <CardHeaderCampaign>-30%</CardHeaderCampaign>
        <CardHeaderImage src="https://d24l7zeiclq6su.cloudfront.net/img/p/10487/c279584.jpg" />
        <CardHeaderTitleWrapper>
          <CardHeaderTitle>Jordan</CardHeaderTitle>
          <CardHeaderSubTitle>9 Days</CardHeaderSubTitle>
        </CardHeaderTitleWrapper>
      </CardHeader>
      <CardContent>
        <CardContentTitle>Wonders of the Hashemite Kingdom</CardContentTitle>
        <CardContentPriceWrapper>
          <CardContentPriceFrom>From</CardContentPriceFrom>
          <CardContentPriceBefore>$2,719</CardContentPriceBefore>
          <CardContentPriceAfter>$1,799</CardContentPriceAfter>
        </CardContentPriceWrapper>
      </CardContent>
    </SliderCardContainer>
  )
}
