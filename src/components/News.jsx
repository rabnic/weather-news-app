import React from 'react'
import NewsArticle from './NewsArticle'

function News() {
  return (
    <div className='border p-2 border-yellow-500 h-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 '>
      <div className="container w-full mx-auto flex flex-wrap justify-center">
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    </div>
  )
}

export default News