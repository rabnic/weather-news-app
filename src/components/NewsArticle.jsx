import React, { useEffect, useRef } from "react";

function NewsArticle({ article }) {
  const articleContent = useRef();
  const placeholder =
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

  useEffect(() => {
    articleContent.current.innerHTML = article.description;
  }, []);

  // console.log(article)
  return (
    <>
      {article && (
        <div className="flex flex-col md:flex-row overflow-hidden w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg shadow-xl  mt-4 w-100 mx-2">
          <div className="h-64 md:w-3/4 w-auto">
            <img
              className="inset-0 h-full w-full object-cover object-center"
              src={article.urlToImage || placeholder}
              alt=""
              loading="lazy"
            />
          </div>

          <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 className="font-semibold text-lg leading-tight w-auto">
              {article.title}
            </h3>
            <p className="mt-2 text-slate-100" ref={articleContent}></p>
            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              {article.author || article.source.name} &bull;{" "}
              {article.publishedAt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsArticle;
