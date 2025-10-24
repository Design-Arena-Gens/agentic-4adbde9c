'use client'

import { useState, useEffect } from 'react'

interface Post {
  title: string
  description: string
  hashtags: string[]
  callToAction: string
  date: string
}

export default function Home() {
  const [post, setPost] = useState<Post | null>(null)
  const [niche, setNiche] = useState('fashion')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const niches = [
    'fashion',
    'home-decor',
    'beauty',
    'fitness',
    'tech',
    'food',
    'travel',
    'crafts',
    'gardening',
    'pets'
  ]

  const generatePost = async () => {
    setLoading(true)
    setCopied(false)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ niche }),
      })

      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.error('Error generating post:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generatePost()
  }, [])

  const copyToClipboard = () => {
    if (!post) return

    const fullText = `${post.title}

${post.description}

${post.hashtags.join(' ')}

${post.callToAction}`

    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadAsText = () => {
    if (!post) return

    const fullText = `${post.title}

${post.description}

${post.hashtags.join(' ')}

${post.callToAction}

Generated: ${post.date}`

    const blob = new Blob([fullText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pinterest-post-${post.date}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
            📌 Pinterest Affiliate Post Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate engaging daily posts for your Pinterest affiliate marketing
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Your Niche
            </label>
            <div className="flex flex-wrap gap-2">
              {niches.map((n) => (
                <button
                  key={n}
                  onClick={() => setNiche(n)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    niche === n
                      ? 'bg-pink-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {n.charAt(0).toUpperCase() + n.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generatePost}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '✨ Generating...' : '🎯 Generate New Post'}
          </button>
        </div>

        {post && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Your Daily Post</h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">TITLE</h3>
                  <p className="text-xl font-bold text-gray-800">{post.title}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">DESCRIPTION</h3>
                  <p className="text-gray-700 leading-relaxed">{post.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">HASHTAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.hashtags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">CALL TO ACTION</h3>
                  <p className="text-gray-700 font-medium">{post.callToAction}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-600 transition-all shadow-md"
              >
                {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
              </button>
              <button
                onClick={downloadAsText}
                className="flex-1 bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-600 transition-all shadow-md"
              >
                💾 Download
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>💡 Tip: Generate fresh content daily to keep your Pinterest feed engaging!</p>
        </div>
      </div>
    </main>
  )
}
