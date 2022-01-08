import { GiphyFetch, SearchOptions, TrendingOptions } from "@giphy/js-fetch-api";

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY as string)

export const trendingGifs = (
  options: TrendingOptions = {
    offset: 0, 
    limit: 10,
  }
) => gf.trending(options)

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
