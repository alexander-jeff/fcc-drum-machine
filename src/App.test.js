import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders outer container', () => {
  render(<App />)
  const outerContainer = screen.getByTestId('drum-machine')
  expect(outerContainer).toBeInTheDocument()
})
