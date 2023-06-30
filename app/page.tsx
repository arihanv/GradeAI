import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
    <div>Landing Page</div>
    <Link href="/input">
        Click to go to input page
    </Link>
    </div>
  )
}