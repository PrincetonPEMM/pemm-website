import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import type {Paintings} from '../components/types/paintings';
import ImagesComponent from '../components/elements/imagesComponent';
import axios from 'axios';
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress';

function  getImageUrisFromPaintings(paintings: Paintings[]) : string[] {
    let imageUris: string[] = [];
    for (let i = 0; i < paintings.length; i++) {
      if (paintings[i].image_link) {
      let breakup = paintings[i].image_link!.split("full");
      if (breakup.length === 3) {
        //TODO: Update this and use a more standardized way to format how to display the image
        paintings[i].image_link = breakup[0] + "full" + breakup[1] + "400," + breakup[2];
      }
      imageUris.push(paintings[i].image_link!);
    }
  }
  return imageUris;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(process.env.REACT_APP_API + 'images/');
    const paintings: Paintings[] = await res.data;
    let imageUris = getImageUrisFromPaintings(paintings.slice(0, 10));

    return {
      props: {
        server_data: {
          imageUris: imageUris,
          paintings: paintings.slice(0, 10)
        }
      }
    }
  } catch {
      return {
        props: {
          server_data: {
            imageUris: [],
            paintings: []
          }
        }
      }
  }
}

const PaintingsPage: NextPage = ({ server_data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const { data, error } = useSWR(process.env.REACT_APP_API + 'images/', axios);
  let imageUris : string[] = server_data.imageUris;
  let paintings : Paintings[] = server_data.paintings;

  if (error) return <div>failed to load</div>
  if (!data) return <div className='h-screen'><CircularProgress color="warning" /></div>

  paintings = data?.data;
  imageUris = getImageUrisFromPaintings(paintings);

  return (
    <div>
        <div className="flex flex-wrap justify-center">
          <ImagesComponent images={imageUris} paintings={paintings}/>
        </div>
    </div>
  )
}

export default PaintingsPage
