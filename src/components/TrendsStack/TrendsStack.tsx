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


interface useNearProps {
  marginForIntersect?: string
}

const useNearScreen = <T extends HTMLElement>({marginForIntersect = '100px'}: useNearProps = {}) => {
  const [isNear, setIsNear] = useState(false)
  const componentRef = useRef<T>(null)

  useEffect(() => {
    const onChange: IntersectionObserverCallback = (entries, observer)  => {
      const [trendsComp] = entries
      if(trendsComp.isIntersecting) {
        setIsNear(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: marginForIntersect,
    })

    if(componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => observer.disconnect() 
  }, [])

  return {
    componentRef,
    isNear,
  }
}

export const LazyTrendsStack = () => {
  const {componentRef, isNear} = useNearScreen<HTMLDivElement>()

  return (
    <div ref={componentRef} >
      {isNear && <TrendsStack />}
    </div>
  )
}