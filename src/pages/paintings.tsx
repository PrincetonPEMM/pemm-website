import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import stylePaintings from "./paintings.module.css";
import type { Paintings } from "../components/types/paintings";
import ImagesComponent from "../components/elements/imagesComponent";
import axios from "axios";
import Alert from "@mui/material/Alert";

function getImageUrisFromPaintings(paintings: Paintings[]): string[] {
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
    const res = await axios(process.env.REACT_APP_API + "images/");
    const paintings: Paintings[] = await res.data;
    let imageUris = getImageUrisFromPaintings(paintings);
    return {
      props: {
        data: {
          imageUris: imageUris,
          paintings: paintings,
        },
      },
    };
  } catch {
    return {
      props: {
        data: {
          imageUris: [],
          paintings: [],
        },
      },
    };
  }
};

const PaintingsPage: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let imageUris: string[] = data.imageUris;
  let paintings: Paintings[] = data.paintings;

  if (imageUris.length === 0 || paintings.length === 0) {
    return (
      <div className="h-screen">
        <Alert severity="error">
          Something went wrong, we can&apos;t find our paintings 😲
        </Alert>
      </div>
    );
  }

  let [searchResult, setSearchResult] = useState<any[]>([]);
  let [searchImageUri, setSearchImageUri] = useState<any[]>([]);

  let hundleSearch = async (e: any) => {
    let searchValue = e.target.value,
      searchUri: any[] = [];
    let choosenItems: any[] = [];
    paintings?.map((item) => {
      let episode_keywords = item.episode_keywords,
        manuscript: any = item.manuscript?.toLowerCase();
      let image_link = item.image_link;
      if (manuscript?.includes(searchValue.toLowerCase())) {
        choosenItems.push(item);
        searchUri.push(image_link);
        console.log("manuscript == ", manuscript);
      } else {
        // push has to be only one
        let pushCounter = 0;
        episode_keywords?.map((episodeItem) => {
          if (episodeItem.toLowerCase()?.includes(searchValue.toLowerCase())) {
            // push has to be done only once which is done when pushCounter is 0;
            // if pushCounter>0 data is already pushed so no need to push again
            if (pushCounter == 0) {
              choosenItems.push(item);
              searchUri.push(image_link);
              pushCounter++;
            }
          }
        });
      }
    });
    setSearchImageUri(searchUri);
    setSearchResult(choosenItems);
    let REACT_APP_API = "https://ethiopicmary.com/api/";
  };
  return (
    <div className="paintingWrapper">
      <div className={stylePaintings.empitySpace}></div>
      <div className={stylePaintings.searchInputWrapper}>
        <img src="./icons8-search.svg" alt="" />
        <input
          type="search"
          onInput={hundleSearch}
          className={stylePaintings.searchInput}
          placeholder="search what u want."
        />
      </div>
      <div className={stylePaintings.buttonLists}>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
        <button>
          <span className={stylePaintings.span}>sometext</span>
        </button>
      </div>
      {console.log("searchResult is = ", searchResult)}
      <div className="flex flex-wrap justify-center">
        {searchImageUri?.length > 0 ? (
          <ImagesComponent images={searchImageUri} paintings={searchResult} />
        ) : (
          <ImagesComponent images={imageUris} paintings={paintings} />
        )}
      </div>
    </div>
  );
};
export default PaintingsPage;
