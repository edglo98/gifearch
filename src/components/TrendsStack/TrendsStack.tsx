import { useEffect, useRef, useState } from "react"
import { useTrendingTerm } from "../../hooks/useTrendingTerm"
import { Chip } from "../Chip/Chip"
import { Stack } from "../Stack/Stack"

export const TrendsStack = () => {
  const {trends, error: trendError, loading: trendLoading} = useTrendingTerm()

  if(trendLoading) return <div>Loading...</div>
  if(trendError) return <div>Error: {trendError.message}</div>

  return (
    <Stack>
      {trends.map(t => <Chip key={t} label={t} />)}
    </Stack>
  )
}

export const LazyTrendsStack = () => {
  const [show, setShow] = useState(false)
  const lazyRef = useRef(null)

  useEffect(() => {
    const onChange: IntersectionObserverCallback = (entries, observer)  => {
      const [trendsComp] = entries
      if(trendsComp.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '0px',
    })

    if(lazyRef.current) {
      observer.observe(lazyRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={lazyRef} >
      {show && <TrendsStack />}
    </div>
  )
}