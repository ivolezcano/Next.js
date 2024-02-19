import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
    </ul>
    </div>
  )
}

export default Navigation