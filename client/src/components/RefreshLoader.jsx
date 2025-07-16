import React, { useState, useEffect } from 'react'

const RefreshLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-xl animate-spin" />
            <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                SZ
              </span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            ScriptZen AI
          </h2>
          <div className="flex items-center justify-center space-x-1 text-purple-400">
            <span className="animate-bounce">I</span>
            <span className="animate-bounce delay-100">n</span>
            <span className="animate-bounce delay-200">i</span>
            <span className="animate-bounce delay-300">t</span>
            <span className="animate-bounce delay-400">i</span>
            <span className="animate-bounce delay-500">a</span>
            <span className="animate-bounce delay-600">l</span>
            <span className="animate-bounce delay-700">i</span>
            <span className="animate-bounce delay-800">z</span>
            <span className="animate-bounce delay-900">i</span>
            <span className="animate-bounce delay-1000">n</span>
            <span className="animate-bounce delay-1100">g</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-400">.</span>
            <span className="animate-bounce delay-600">.</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading AI Tools</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Code-like Animation */}
        <div className="mt-8 text-xs text-green-400 font-mono opacity-60">
          <div className="animate-pulse">
            {'>'} Initializing AI modules...
          </div>
          <div className="animate-pulse delay-500">
            {'>'} Loading neural networks...
          </div>
          <div className="animate-pulse delay-1000">
            {'>'} Preparing workspace...
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefreshLoader