import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const TYPE_DELAY = 120
const ERASE_DELAY = 80
const HOLD_DELAY = 1600

export function Typewriter({ words, className = '' }) {
  const wordList = useMemo(() => words.filter(Boolean), [words])
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (wordList.length === 0) return undefined

    const current = wordList[index]
    const isComplete = !isDeleting && display === current
    const isEmpty = isDeleting && display === ''

    let timeout = TYPE_DELAY

    if (isComplete) {
      timeout = HOLD_DELAY
      const id = setTimeout(() => setIsDeleting(true), timeout)
      return () => clearTimeout(id)
    }

    if (isEmpty) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % wordList.length)
      timeout = TYPE_DELAY
    }

    timeout = isDeleting ? ERASE_DELAY : TYPE_DELAY

    const id = setTimeout(() => {
      const nextLength = display.length + (isDeleting ? -1 : 1)
      setDisplay(current.slice(0, nextLength))
    }, timeout)

    return () => clearTimeout(id)
  }, [display, index, isDeleting, wordList])

  return (
    <p className={className} aria-live="polite" aria-label={wordList[index]}>
      {display}
      <span className="typewriter__cursor" aria-hidden="true">
        |
      </span>
    </p>
  )
}

Typewriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}
