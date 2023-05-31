import React from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

import "./styles/components/app.sass"

const App = () => {
  return (
    <div id='portfolio'>
        <h1>Nemoto Mailon Massao</h1>

        <Sidebar />
        <MainContent />
    </div>
  )
}

export default App