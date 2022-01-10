import { GiphyFetch, SearchOptions } from "@giphy/js-fetch-api";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY as string
const gf = new GiphyFetch(API_KEY)

const getPath = (path: string) => {
  const pathToUSe = path.startsWith("/") ? path : `/${path}`;
  const includeApiKey = pathToUSe.includes("?") ? `&api_key=${API_KEY}` : `?api_key=${API_KEY}`;
  
  return 'http://api.giphy.com/v1' + pathToUSe + includeApiKey
}

export const trendingSearchTerms = () => window
  .fetch(getPath('trending/searches'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())

export const searchGifs = (
  query: string, 
  options: SearchOptions = {
    offset: 0, 
    limit: 18, 
    lang: "es"
  }
) => gf.search(query, options)
  .then(response => 
    ({
      ...response,
      data: response.data.map(g => 
        ({
          url: g.images.downsized_medium.url, 
          title: g.title, 
          id: g.id
        })
      ),
    })
  )