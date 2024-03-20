import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from '@/root.jsx'

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
)
