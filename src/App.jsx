import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'
import Header from './components/Header'
import Content from './components/Content'

export default function App() {
  return (
  <>
    <Header />
    <div className="container">
      <Content />
    </div>
  </>
  )
}
