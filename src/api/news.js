import axios from 'axios'

/**
 * 获取热点新闻
 * @returns {Promise<AxiosResponse<any>|{err, type: string}>}
 */
export const getNews = async () => {
  try {
    const { data } = await axios.get('https://sina-news.vercel.app/rss.json')
    return data
  } catch (err) {
    return {
      type: 'error',
      err
    }
  }
}
