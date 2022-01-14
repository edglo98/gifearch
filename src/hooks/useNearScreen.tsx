import { useEffect, useRef, useState } from "react"

interface useNearProps {
  marginForIntersect?: string
}

export const useNearScreen = <T extends HTMLElement>({marginForIntersect = '100px'}: useNearProps = {}) => {
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