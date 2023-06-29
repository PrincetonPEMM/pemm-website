import Image from "next/image";
import Link from "next/link";
import type { Paintings } from "../types/paintings";
import imagesComponentCss from "./imagesComponent.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";

function ImagesComponent(currentItems: any) {
  const imageStyles = "m-2";
  const paintings: Paintings[] = currentItems.paintings;
  const images: string[] = currentItems.images;
  const [keywords, setKeywords] = useState<string[]>([]);
  const findPainting = (image_link: string) => {
    for (let painting of paintings) {
      if (painting.image_link === image_link && painting.canonical_story_id) {
        return painting;
      }
    }
  };
  const parseKeywords = (image: string) => {
    let episode_keywords_by_episode = findPainting(image)?.episode_keywords;
    let keywords: string[] = [];
    if (episode_keywords_by_episode) {
      for (let episode_keywords of episode_keywords_by_episode) {
        let split_keywords = episode_keywords.split(";");
        keywords = keywords.concat(split_keywords);
      }
    }
    keywords = keywords.map((keyword) => {
      keyword = keyword.trim();
      return keyword;
    });
    let i = 0;
    return keywords.filter((keyword) => {
      return i < 10 && i++ && keyword !== "";
    });
  };
  useEffect(() => {
    // images.map((item, i) => {
    //   let id = "painting_posted_IMG_" + i;
    //   let img = document.getElementById(id) as HTMLImageElement;
    //   let NWidth = img.naturalWidth,
    //     NHeight = img.naturalHeight;
    //   img.width = NWidth;
    //   img.height = NHeight;
    // });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {images.map(function (image, i) {
          const canonical_story_id = findPainting(image)?.canonical_story_id;
          const is_blank_canonical_story_id: boolean =
            canonical_story_id === "0";
          return (
            <div className={imageStyles} key={"img_Card_" + i}>
              <Card className={imagesComponentCss.cardWrapper}>
                <img src={image} id={"painting_posted_IMG_" + i} alt="" />
                <CardContent className={imagesComponentCss.cardsTextContent}>
                  <Chip
                    className="m-1"
                    label={findPainting(image)?.manuscript}
                  ></Chip>
                  {parseKeywords(image).map(function (keyword, j) {
                    return (
                      <Chip key={j} className="m-1" label={keyword}></Chip>
                    );
                  })}
                </CardContent>
                {/* <CardActions>
                  {is_blank_canonical_story_id === false && (
                    <Link href={"stories/" + canonical_story_id}>
                      <Tooltip title="Read Story">
                        <IconButton>
                          <ReadMoreIcon className="cursor-pointer" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  )}
                </CardActions> */}
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImagesComponent;
