import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Modelos from './components/Modelos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Content />} />
        <Route path="/carros/:id" element={<Modelos />} />
        <Route path="/motos/:id" element={<Modelos />} />
        <Route path="/caminhoes/:id" element={<Modelos />} />
      </Routes>
    </div>
  </Router>
  )
}
