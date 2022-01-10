import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './routes/RouterApp'
import { GifProvider } from './context/GifContext'
import './App.css'

function App() {
  return (
    <GifProvider>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </GifProvider>
  )
}

export default App
