import { Suspense } from 'react'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        123123
      </Suspense>
    </section>
  )
}