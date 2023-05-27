import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import stylePaintings from "./paintings.module.css";
import type { Paintings } from "../components/types/paintings";
import ImagesComponent from "../components/elements/imagesComponent";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import ArchiveOfPainting from "../components/elements/ArchiveOfPainting";
function getImageUrisFromPaintings(paintings: Paintings[]): string[] {
  let imageUris: string[] = [];
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
  let [searchItemResult, setSearchItemResult] = useState<Paintings[]>([]);
  let [searchItemImageUri, setSearchItemImageUri] = useState<string[]>([]);
  const [NoData, setNoData] = useState("initial");
  let [searchResult, setSearchResult] = useState<Paintings[]>([]);
  useEffect(() => {
    let byColor = (
        document.getElementById("selectByColorOfPaintigs") as HTMLInputElement
      ).value,
      byDate = (
        document.getElementById("selectByDateOfPaintigs") as HTMLInputElement
      ).value,
      byStoryType = (
        document.getElementById("selectByStoryTypePaintigs") as HTMLInputElement
      ).value,
      year = 0;
    if (byDate != "default") year = Number(byDate.replaceAll("s", ""));

    searchFromPaintings();
  }, [, searchResult]);
  let paintings: Paintings[] = data.paintings;
  if (paintings.length === 0) {
    return (
      <div className="h-screen">
        <Alert severity="error">
          Something went wrong, we can&apos;t find our paintings 😲
        </Alert>
      </div>
    );
  }

  let hundleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.currentTarget.value,
      searchUri: string[] = [];
    let choosenItems: Paintings[] = [];
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
        let pushCounter = 0;
        episode_keywords?.map((episodeItem) => {
          if (episodeItem.toLowerCase()?.includes(searchValue.toLowerCase())) {
            if (pushCounter == 0) {
              choosenItems.push(item);
              searchUri.push(image_link);
              pushCounter++;
            }
          }
        });
      }
    });

    setSearchResult(choosenItems);
  };

  let searchFromPaintings = () => {
    let Year: any = (
      document.getElementById("selectByDateOfPaintigs") as HTMLInputElement
    ).value.replace("s", "");
    if (Year == "default") Year = 0;
    let searchYear = Number(Year);
    let searchColor = (
      document.getElementById("selectByColorOfPaintigs") as HTMLInputElement
    ).value;
    let storyType = (
      document.getElementById("selectByStoryTypePaintigs") as HTMLInputElement
    ).value;

    let searchedItems: Paintings[] = [],
      SearchedImgURL: any[] = [];
    let targetFilters: Paintings[] = [],
      inputValue = (
        document.getElementById("searchFieldInPaintings") as HTMLInputElement
      ).value;
    if (inputValue !== "") {
      targetFilters = searchResult;
    } else {
      targetFilters = paintings;
    }
    targetFilters?.map((item) => {
      // to be updated by image_link if it is null
      if (item.image_link == null) {
        item.image_link =
          "https://ethiopic-manuscripts.s3.amazonaws.com/default_image.jpeg";
      }
      if (item.painting_date == null) return;
      let painting_date = Number(item.painting_date);
      let image_link: String | undefined = item.image_link;
      if (searchYear != 0) {
        if (painting_date <= searchYear + 99 && painting_date >= searchYear) {
          searchedItems.push(item);
          SearchedImgURL.push(image_link);
        } else {
        }
      } else {
        searchedItems.push(item);
        SearchedImgURL.push(image_link);
      }
    });

    let collectedItems: Paintings[] = [],
      collectedImagesURL: any[] = [];

    if (searchColor != "default") {
      searchedItems?.map((item) => {
        let is_black_and_white = item.is_black_and_white;

        if (searchColor == "Paintings in color only") {
          if (is_black_and_white == false && item.painting_available == true) {
            collectedItems.push(item);
            collectedImagesURL.push(item.image_link);
          }
        } else if (searchColor == "Include B&W") {
          if (item.painting_available == true) {
            collectedItems.push(item);
            collectedImagesURL.push(item.image_link);
          } else {
          }
        } else if (searchColor == "Include image not available") {
          collectedItems.push(item);
          collectedImagesURL.push(item.image_link);
        }
      });
      searchedItems = collectedItems;
      SearchedImgURL = collectedImagesURL;
    }

    let storysArray: Paintings[] = [],
      byStoryImagesURL: any[] = [];
    if (storyType != "default") {
      searchedItems?.map((item) => {
        if (storyType == item.type_of_story) {
          storysArray.push(item);
          byStoryImagesURL.push(item.image_link);
        } else {
        }
      });
      searchedItems = storysArray;
      SearchedImgURL = byStoryImagesURL;
    }
    let archive_of_painting = (
      document.getElementById("archive_of_painting") as HTMLInputElement
    ).value;
    if (archive_of_painting != "default") {
      let archivedItems: Paintings[] = [],
        archivedImgURL: any[] = [];
      searchedItems.map((item) => {
        if (archive_of_painting == item.archive_of_painting) {
          archivedItems.push(item);
          archivedImgURL.push(item.image_link);
        }
      });
      searchedItems = archivedItems;
      SearchedImgURL = archivedImgURL;
    }
    if (searchedItems.length <= 0) {
      setNoData("No Data Found");
      return;
    } else setNoData("");

    setSearchItemResult(searchedItems);
    setSearchItemImageUri(SearchedImgURL);
  };
  let handleDefaultInputValues = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target) {
    }
    (
      document.getElementById("selectByDateOfPaintigs") as HTMLInputElement
    ).value = "default";
    (
      document.getElementById("selectByColorOfPaintigs") as HTMLInputElement
    ).value = "Paintings in color only";
    (
      document.getElementById("selectByStoryTypePaintigs") as HTMLInputElement
    ).value = "default";
    (document.getElementById("archive_of_painting") as HTMLInputElement).value =
      "default";

    searchFromPaintings();
  };
  return (
    <div className="paintingWrapper">
      <div className={stylePaintings.empitySpace}></div>
      <div className={stylePaintings.searchInputWrapper}>
        <Image src="/icons8-search.svg" width={20} height={20} alt="" />
        <input
          id="searchFieldInPaintings"
          type="search"
          onInput={hundleSearch}
          className={stylePaintings.searchInput}
          placeholder="Search"
        />
      </div>
      <div className={stylePaintings.selectList}>
        <select
          id="selectByDateOfPaintigs"
          className={stylePaintings.paintingSelection}
          onChange={searchFromPaintings}
        >
          <option value={"default"} className={stylePaintings.hiddenOption}>
            Date of Paintings
          </option>
          <option>1300s</option>
          <option>1400s</option>
          <option>1500s</option>
          <option>1600s</option>
          <option>1700s</option>
          <option>1800s</option>
          <option>1900s</option>
          <option>2000s</option>
        </select>
        <select
          id="selectByColorOfPaintigs"
          className={stylePaintings.paintingSelection}
          onChange={searchFromPaintings}
        >
          <option value={"default"} className={stylePaintings.hiddenOption}>
            Paintings in Color
          </option>
          <option selected value="Paintings in color only">
            Paintings in color only
          </option>
          <option value="Include B&W">Include Black & White</option>
          <option>Include image not available</option>
        </select>
        <select
          className={stylePaintings.paintingSelection}
          onChange={searchFromPaintings}
          id="selectByStoryTypePaintigs"
        >
          <option className={stylePaintings.hiddenOption} value={"default"}>
            Story Type
          </option>
          <option value="Life of Mary">Life of Mary</option>
          <option value="Miracle of Mary">Miracle of Mary</option>
        </select>
        <select
          id="archive_of_painting"
          onChange={searchFromPaintings}
          className={""}
        >
          {ArchiveOfPainting()?.map((item) => {
            let x = ArchiveOfPainting().indexOf(item);
            if (x == 0)
              return (
                <option
                  key={x}
                  className={stylePaintings.hiddenOption}
                  value={"default"}
                >
                  {item}
                </option>
              );
            return <option key={x}>{item}</option>;
          })}
        </select>

        <div className={stylePaintings.default}>
          <button
            type="button"
            name=""
            id=""
            onClick={handleDefaultInputValues}
          >
            Reset
          </button>
        </div>
      </div>

      {NoData == "No Data Found" ? (
        <div className={stylePaintings.noDataFound}>
          <h3>No data found in your search.</h3>
        </div>
      ) : searchItemResult?.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          <ImagesComponent
            images={searchItemImageUri}
            paintings={searchItemResult}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default PaintingsPage;
