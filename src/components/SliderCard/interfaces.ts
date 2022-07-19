interface Images {
  desktop: string
  mobile: string
  tablet: string
}

export interface SliderCardProps {
  days: number
  destination: string
  images: Images
  oldPriceBeautify: string
  fromPriceBeautify: string
  pricingPercentage: number
  title: string
}
