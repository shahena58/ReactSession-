import React from 'react'

export default function ClickCounter({count, incrementCounter}) {
  return (
   <button onClick={incrementCounter}>ClickCounter {count} </button>
  )
}
