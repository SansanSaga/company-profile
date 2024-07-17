"use client"

import { Box } from '@chakra-ui/react'
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'
import { FC } from 'react'

interface ShareButtons {
  title: string,
} 

const ShareButtons: FC<ShareButtons> = ({title}) => {
  return (
    <>
      Share to
      <Box>
        <FacebookShareButton
          url={`https://company-profile-iota.vercel.app`}
          quote={title}
          hashtag={'#nextshare'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <PinterestShareButton
          url={`https://company-profile-iota.vercel.app`}
          media={title}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <TelegramShareButton
          url={`https://company-profile-iota.vercel.app`}
          title={title}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TumblrShareButton
          url={`https://company-profile-iota.vercel.app`}
          title={title}
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>
        <TwitterShareButton
          url={`https://company-profile-iota.vercel.app`}
          title={title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
    </Box>
    </>
  )
}

export default ShareButtons