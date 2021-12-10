import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const IMAGES = [
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004e/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004f/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000074/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00007b/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000084/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000027/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000028/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000046/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x00004d/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000054/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x0000e6/full/400,/0/default.jpg",
  "https://iiif-cloud.princeton.edu/iiif/2/99%2F5b%2Fcc%2F995bcc2069dc451298f11bd8448be628%2Fintermediate_file/full/400,/0/default.jpg",
  "https://iiif-cloud.princeton.edu/iiif/2/d9%2F19%2F40%2Fd91940a0919e43c98a5fe14f27ae0866%2Fintermediate_file/full/400,/0/default.jpg"
];

const IMAGES_PER_PAGE = 9

function Images(currentItems: any) {
  const imageStyles = "m-2";
  const images : string[] = currentItems.images;
  return (
    <>
      { 
        images.map(function(image, i){
          return <img className={imageStyles} key={i} src={image}></img>;
      })}
    </>
  );
}

function PaginationButtons(text: string) {
  return (
    <>
      <button className="bg-black text-white"> {text} </button>
    </>
  );
}

const Paintings: NextPage = () => {
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
      setCurrentItems(IMAGES.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(IMAGES.length / IMAGES_PER_PAGE));
    }, [itemOffset, IMAGES_PER_PAGE]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * IMAGES_PER_PAGE) % IMAGES.length;
      setItemOffset(newOffset);
    };

    const imagesObject: object = {
      "images": currentItems
    };

  return (
    <div>
        <h1>
          Paintings
        </h1>
        <div className="flex flex-wrap justify-center">
          <Images {...imagesObject}/>
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

export default Paintings
