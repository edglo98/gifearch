import { lazy, Suspense } from "react"
import { useNearScreen } from "../../hooks/useNearScreen"

const TrendsStack = lazy(() => import("../TrendsStack/TrendsStack"))

export const LazyTrendsStack = () => {
  const {componentRef, isNear} = useNearScreen<HTMLDivElement>()

  return (
    <div ref={componentRef} >
      <Suspense fallback={null}>
        {isNear && <TrendsStack />}
      </Suspense>
    </div>
  )
}