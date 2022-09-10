import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import type {Paintings} from '../components/types/paintings';
import ImagesComponent from '../components/elements/imagesComponent';
import PaginationButtons from '../components/elements/paginationButtons';
import axios from 'axios';

const IMAGES_PER_PAGE = 9

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
    // We start with an empty list of items.
    const emptyItems: string[] = [];
    const [currentItems, setCurrentItems] = useState(emptyItems);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + IMAGES_PER_PAGE;
      setCurrentItems(data.imageUris.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.imageUris.length / IMAGES_PER_PAGE));
    }, [itemOffset, IMAGES_PER_PAGE]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * IMAGES_PER_PAGE) % data.imageUris.length;
      setItemOffset(newOffset);
    };

    const imagesObject: object = {
      "images": currentItems
    };

  return (
    <div>
        <div className="flex flex-wrap justify-center">
          <ImagesComponent {...imagesObject} paintings={data.paintings}/>
        </div>
        <div className="ml-20 mr-20">
            <div id="paginator"></div>
            <ReactPaginate
              className="flex bg-gray-400 justify-center"
              breakLabel="..."
              nextLabel={PaginationButtons("Next")}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={PaginationButtons("Previous")}
            />
          </div>
    </div>
  )
}

export default PaintingsPage
