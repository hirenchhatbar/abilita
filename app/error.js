'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Something went wrong!</h1>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <Image
              src="/about.jpg"
              width={500}
              height={500}
              className="img-fluid mx-lg-5 animate__animated animate__headShake animate__delay-2s"
              alt="Hiren Chhatbar"
            />
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container text-center">
          <button type="button" className="btn btn-dark" onClick={
              () => reset()
            }>Try again</button>
        </div>
      </section>
    </main>
  )
}