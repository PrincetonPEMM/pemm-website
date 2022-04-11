import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from 'next-share';

const Social = () => {
  return (
    <div>
      <FacebookShareButton
        url={'http://localhost:3000'} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <InstapaperShareButton
        url={'http://localhost:3000'} >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
    </div>
  )
}

export default Social
