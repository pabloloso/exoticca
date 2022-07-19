import React from 'react'
import { render } from 'react-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import App from './App'

const reactQueryClient = new QueryClient()
const rootElement = document.getElementById('root')

render(
  <QueryClientProvider client={reactQueryClient}>
    <App />
  </QueryClientProvider>
  , rootElement
)
