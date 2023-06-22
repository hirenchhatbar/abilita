'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleUp,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false)

  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const listenToScroll = () => {
    let heightToHideen = 250
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHideen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="pe-5 mb-5 me-4 position-fixed bottom-0 end-0">
          <button className="btn btn-link p-0 z-5" onClick={gotoBtn}>
            <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
          </button>
        </div>
      )}
    </>
  )
}
