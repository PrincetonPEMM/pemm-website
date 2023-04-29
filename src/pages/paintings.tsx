import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import stylePaintings from "./paintings.module.css";
import type { Paintings } from "../components/types/paintings";
import ImagesComponent from "../components/elements/imagesComponent";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Image from "next/image";

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
  let [searchResult, setSearchResult] = useState<Paintings[]>([]);
  let [searchImageUri, setSearchImageUri] = useState<string[]>([]);

  // let [searchResult, setSearchResult] = useState<Paintings[]>([]);
  // let [searchImageUri, setSearchImageUri] = useState<Paintings[]>([]);

  if (imageUris.length === 0 || paintings.length === 0) {
    return (
      <div className="h-screen">
        <Alert severity="error">
          Something went wrong, we can&apos;t find our paintings 😲
        </Alert>
      </div>
    );
  }

  // <<<<<<< HEAD
  //   let hundleSearch = async (e: any) => {
  //     let searchValue = e.target.value,
  //       searchUri: any[] = [];
  //     let choosenItems: any[] = [];
  // =======

  let hundleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.currentTarget.value,
      searchUri: string[] = [];
    let choosenItems: Paintings[] = [];
    // >>>>>>> 5d858129941ececba8d37e53e4c0794e42d19a82
    paintings?.map((item) => {
      let episode_keywords = item.episode_keywords;
      let manuscript: string = "";
      if (item.manuscript) {
        manuscript = item.manuscript?.toLowerCase();
      }
      let image_link = "";
      if (item.image_link) {
        image_link = item.image_link;
      }
      if (manuscript?.includes(searchValue.toLowerCase())) {
        choosenItems.push(item);
        searchUri.push(image_link);
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
  };
  // <<<<<<< HEAD
  let searchByDateOfPaintings = (e: any) => {
    console.log("paintings ======= ", paintings);
    return;
    if (e.target.innerText == "1300s") {
    } else if (e.target.innerText == "1400s") {
    } else if (e.target.innerText == "1500s") {
    } else if (e.target.innerText == "1600s") {
    } else if (e.target.innerText == "1700s") {
    } else if (e.target.innerText == "1800s") {
    } else if (e.target.innerText == "1900s") {
    } else if (e.target.innerText == "2000s") {
    }
  };
  // =======

  // >>>>>>> 5d858129941ececba8d37e53e4c0794e42d19a82
  return (
    <div className="paintingWrapper">
      <div className={stylePaintings.empitySpace}></div>
      <div className={stylePaintings.searchInputWrapper}>
        <Image src="/icons8-search.svg" width={20} height={20} alt="" />
        <input
          type="search"
          onInput={hundleSearch}
          className={stylePaintings.searchInput}
          placeholder="Search"
        />
      </div>
      <div className={stylePaintings.buttonLists}>
        <button>
          <span className={stylePaintings.span}>Date of Paintings</span>
          <div className={stylePaintings.dropdownList}>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1300s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1400s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1500s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1600s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1700s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1800s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              1900s
            </span>
            <span
              onClick={(Event) => {
                searchByDateOfPaintings(Event);
              }}
            >
              2000s
            </span>
          </div>
        </button>
        <button>
          <span className={stylePaintings.span}> Paintings in Color</span>
          <div className={stylePaintings.dropdownList}>
            <span>Include B&W </span>
            <span>Include not yet available</span>
          </div>
        </button>
        <button>
          <span className={stylePaintings.span}>Story Type</span>
          <div className={stylePaintings.dropdownList}>
            <span>Life of Mary</span>
            <span>Miracle of Mary </span>
          </div>
        </button>
        {/* {    <button>
          <span className={stylePaintings.span}>some text</span>
        </button>
        <button>
          <span className={stylePaintings.span}>some text</span>
        </button>
        <button>
          <span className={stylePaintings.span}>some text</span>
        </button>
        <button>
          <span className={stylePaintings.span}>some text</span>
        </button>
        <button>
          <span className={stylePaintings.span}>some text</span>
        </button>
        <button>
          <span className={stylePaintings.span}>some text</span>
        </button>} */}
      </div>

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
