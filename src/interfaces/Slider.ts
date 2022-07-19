interface PriceDetail {
  oldPriceBeautify: string
  fromPriceBeautify: string
  pricingPercentage: number
}

export interface Images {
  desktop: string
  mobile: string
  tablet: string
}

export interface CardsData {
  id: number
  days: number
  destination: string
  images: Images[]
  priceDetail: PriceDetail
  title: string
}
