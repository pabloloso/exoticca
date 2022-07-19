import React from 'react'

import data from 'mocks/home.json'

import GlobalStyle from 'styles/GlobalStyle'

import SliderWithCard from 'components/SliderWithCards'

export default function App () {
  return (
    <>
      <GlobalStyle />
      <SliderWithCard cards={data.slides[0].cards} />
    </>
  )
}
