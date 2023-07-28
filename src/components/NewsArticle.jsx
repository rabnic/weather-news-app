import React, { useEffect, useRef } from 'react'

function NewsArticle({ article }) {
    const articleContent = useRef();

    useEffect(() => {
        articleContent.current.innerHTML = article.description;
    }, [])

    console.log(article)
    return (
        <>
            {article &&
                <div className="flex flex-col md:flex-row overflow-hidden w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg shadow-xl  mt-4 w-100 mx-2">

                    <div className="h-64 md:min-w-3/4 w-auto">
                        <img className="inset-0 h-full w-full object-cover object-center" src={article.urlToImage} alt='' loading='lazy' />
                    </div>

                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 className="font-semibold text-lg leading-tight w-auto">{article.title}</h3>
                        <p className="mt-2" ref={articleContent}>
                            
                        </p>
                        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                            {article.author} &bull; {article.publishedAt} &bull;
                        </p>
                    </div>
                </div>

            }


        </>
    )
}

export default NewsArticle