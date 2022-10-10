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
        url={'https://www.facebook.com/miraclesofmaryam'} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <InstapaperShareButton
        url={'https://www.instagram.com/miraclesofmaryam'} >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
    </div>
  )
}

export default Social
