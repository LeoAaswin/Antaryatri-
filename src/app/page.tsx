import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-sans">
            Welcome to Antaryatri
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Begin your journey to inner peace with guided meditation and mindfulness practices
          </p>
          
          <div className="relative w-full max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/We are launching soon.png"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              alt="Welcome to Antaryatri"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                href="/meditation"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
              >
                Start Meditating
              </Link>
            </div>
            
            <div className="pt-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-6">
                  <div className="text-purple-600 text-2xl mb-3">🧘‍♀️</div>
                  <h3 className="text-lg font-semibold mb-2">Guided Meditation</h3>
                  <p className="text-gray-600">Expert-led sessions for all experience levels</p>
                </div>
                <div className="p-6">
                  <div className="text-purple-600 text-2xl mb-3">🎵</div>
                  <h3 className="text-lg font-semibold mb-2">Calming Sounds</h3>
                  <p className="text-gray-600">Peaceful ambient music and nature sounds</p>
                </div>
                <div className="p-6">
                  <div className="text-purple-600 text-2xl mb-3">📱</div>
                  <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                  <p className="text-gray-600">Monitor your meditation journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500 space-x-4">
            <Link href="/privacy" className="hover:text-purple-600 underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-600 underline">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page