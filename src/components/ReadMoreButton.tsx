"use client"

import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const ReadMoreButton = () => {
  return (
    <Link href='/services'>
      <Button>Read more</Button>
    </Link>
  )
}

export default ReadMoreButton