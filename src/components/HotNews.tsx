import {useEffect, useState} from "react";
import {getNews} from "../api/news";

interface NewsItem {
  title: string,
  url: string,
  id: number
}

interface News {
  description: string,
  feed_url: string,
  items: [NewsItem],
  title: string,
  version: string
}

function HotNews() {
  const [news, setNews] = useState<News | null>(null)

  useEffect( () => {
    (async function anyNameFunction() {
      const data = await getNews()
      setNews({ ...data, news })
    })();
  }, [])

  return (
    <div className="relative rounded-md overflow-x-hidden lg:float-left lg:w-5/12">
      <div className="absolute w-full font-bold bg-red-600 text-white top-0 z-10 left-0 py-5 px-5">
        新浪新闻
      </div>

      <div className="mt-16 bg-white overflow-y-auto h-96 p-3 w-full">
        {
          news !== null && news.items.map((item, index) => (
            <div
              className="
              truncate py-4 cursor-pointer border-t-2 border-gray-300 hover:text-indigo-600
            "
              key={index}
            ><a title={item.title} href={item.url} key={item.url} target='_blank'>{item.title}</a></div>
          ))
        }
      </div>
    </div>
  )
}

export default HotNews
