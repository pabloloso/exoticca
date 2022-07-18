import styled from 'styled-components'

export const SliderCardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const CardHeader = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: 75%;
`

export const CardHeaderTitleWrapper = styled.div`
  font-family: "Red Hat Text", sans-serif;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 16px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
`

export const CardHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.17;
  color: rgb(255, 255, 255);
`

export const CardHeaderSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  color: rgb(255, 255, 255);
`

export const CardHeaderCampaign = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  line-height: 24px;
  color: rgb(232, 203, 145);
  z-index: 1;
  background: rgb(42, 42, 42);
  border-radius: 4px;
`

export const CardHeaderImage = styled.img`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 16px;
`

export const CardContentTitle = styled.div`
  font-size: 1rem;
  min-height: 44px;
  margin-bottom: 10px;
  line-height: 1.3;
`

export const CardContentPriceWrapper = styled.div`
  display: flex;
  margin-right: 16px;
  width: 100%;
  align-items: baseline;
`

export const CardContentPriceFrom = styled.div`
  font-size: 0.875rem;
  margin-bottom: -3px;
`

export const CardContentPriceBefore = styled.div`
  text-decoration: line-through;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.17;
  margin-left: 4px;
`

export const CardContentPriceAfter = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.17;
  margin-left: 4px;
`
