import { useState, useEffect } from 'react'
import './App.css'
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
