import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import type {Paintings} from '../components/types/paintings';
import ImagesComponent from '../components/elements/imagesComponent';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(process.env.REACT_APP_API + 'images/');
    const paintings: Paintings[] = await res.data;
    let imageUris = [];
    for (let i = 0; i < paintings.length; i++) {
        if (paintings[i].image_link) {
        let breakup = paintings[i].image_link!.split("full");
        if (breakup.length === 3) {
          //TODO: Update this and use a more standardized way to format how to display the image
          paintings[i].image_link = breakup[0] + "full" + breakup[1] + "400," + breakup[2];
        }
        imageUris.push(paintings[i].image_link);
      }
    }
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

const PaintingsPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <div>
        <div className="flex flex-wrap justify-center">
          <ImagesComponent images={data.imageUris} paintings={data.paintings}/>
        </div>
    </div>
  )
}

export default PaintingsPage
