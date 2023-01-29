import { render, screen } from '@testing-library/react'
import App from './App'

describe('Drum Machine', () => {
  test('renders outer container', () => {
    render(<App />)
    const outerContainer = screen.getByTestId('drum-machine')
    expect(outerContainer).toBeInTheDocument()
  })

  test('renders display container', () => {
    render(<App />)
    const displayContainer = screen.getByTestId('display')
    expect(displayContainer).toBeInTheDocument()
  })

  test('renders drum pad container', () => {
    render(<App />)
    const drumPadContainer = screen.getByTestId('drum-pads')
    expect(drumPadContainer).toBeInTheDocument()
  })
})
