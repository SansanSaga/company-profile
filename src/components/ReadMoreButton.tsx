"use client"

import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const ReadMoreButton = () => {
  return (
    <Link href='/services'>
      <Button>Services</Button>
    </Link>
  )
}

export default ReadMoreButton