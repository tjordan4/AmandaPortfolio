import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header></header>
      <aside></aside>
      <main>
        <Routes>
          <Route path="/" element=""/>
        </Routes>
      </main>
      <aside></aside>
      <footer>
        <a href="https://www.instagram.com/amandaleigh_art/">
          <img src="src/assets/Instagram_icon.png" alt="" />
        </a>
      </footer>
    </>
  )
}

export default App
