import type { NextPage, GetStaticProps, InferGetStaticPropsType} from 'next'
import React from 'react';
import type {Paintings} from '../components/types/paintings';
import ImagesComponent from '../components/elements/imagesComponent';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function  getImageUrisFromPaintings(paintings: Paintings[]) : string[] {
    let imageUris: string[] = [];
    for (let i = 0; i < paintings.length; i++) {
      if (paintings[i].image_link) {
        imageUris.push(paintings[i].image_link!);
    }
  }
  return imageUris;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await axios(process.env.REACT_APP_API + 'images/');
    const paintings: Paintings[] = await res.data;
    let imageUris = getImageUrisFromPaintings(paintings);

    return {
      props: {
        data: {
          imageUris: imageUris,
          paintings: paintings
        }
      }
    }
  } catch {
      return {
        props: {
          data: {
            imageUris: [],
            paintings: []
          }
        }
      }
  }
}

const PaintingsPage: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  let imageUris : string[] = data.imageUris;
  let paintings : Paintings[] = data.paintings;

  if (imageUris.length === 0 || paintings.length === 0) { 
    return (
      <div className='h-screen'>
        <Alert severity="error">Something went wrong, we can&apos;t find our paintings 😲</Alert>
      </div>
    );
  }

  return (
    <div>
        <div className="flex flex-wrap justify-center">
          <ImagesComponent images={imageUris} paintings={paintings}/>
        </div>
    </div>
  )
}

export default PaintingsPage
