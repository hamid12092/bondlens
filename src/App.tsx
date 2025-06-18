import React from 'react'
import { Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-primary-500 animate-heartbeat" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">BondLens</h1>
        <p className="text-lg text-gray-600">Deepening Love Across Distances</p>
      </div>
    </div>
  )
}

export default App