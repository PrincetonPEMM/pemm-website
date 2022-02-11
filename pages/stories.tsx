import type { NextPage } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';

const IMAGES = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Stories: NextPage = () => {
  return (
    <div>
        <h1>
          Stories
        </h1>
        <div className = 'grid grid-cols-4'>
          <div>
            <ImageGallery items={IMAGES} />
          </div>
        </div>
    </div>
  )
}

export default Stories
