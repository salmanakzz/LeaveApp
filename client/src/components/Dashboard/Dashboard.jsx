import React from 'react'
import { Background } from '../Background/Background'
import { Navbar } from '../Navbar/Navbar'

export const Dashboard = () => {
  return (
    <div className="isolate bg-white">
      <Background />
      <Navbar />
      <main>
        <div className="mx-auto py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h6 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leave Application
            </h6>
          </div>
        </div>
      </main>
    </div>
  )
}
