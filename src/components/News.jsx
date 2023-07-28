import React from 'react'
import NewsArticle from './NewsArticle'

function News({articles}) {
  return (
    <div className='h-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 '>
      <div className="container w-full mx-auto flex flex-wrap justify-center">
        {articles.map(article =>
          <NewsArticle article={article} key={article.url} />
        )}
      </div>
    </div>
  )
}

export default News