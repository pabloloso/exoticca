import { Images } from 'interfaces/Slider'

export interface SliderCardProps {
  days: number
  destination: string
  images: Images
  oldPriceBeautify: string
  fromPriceBeautify: string
  pricingPercentage: number
  title: string
}
