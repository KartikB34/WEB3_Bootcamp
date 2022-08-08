import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Graph from './components/Graph'
import Champions from './components/Champions'
import Solution from './components/solution/Solution'
import Perks from './components/Perks'
import Fees from './components/Fees'
import Faq from './components/Faq'
import Backbone from './components/backbone/Backbone'

const App = () => {
  return (
    <>
    <Navbar />
    <Landing />
    <Graph />
    <Champions />
    <Backbone />
    <Perks />
    <Fees />
    <Solution />
    <Faq />
    </>
  )
}

export default App
