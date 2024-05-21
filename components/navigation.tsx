"use client"
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

const Navigation = () => {
  const path = usePathname();
  const a = useParams();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">about-us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation