export type Paintings = {
    image_link?: string,
    canonical_story_id?: string,
    manuscript?: string,
    episode_keywords?: string[],
    painting_id?: number | null,
    painting_date?: number | null,
    is_black_and_white?: boolean | null,
    painting_available?: boolean | null,
    type_of_story?: string | null,
    archive_of_painting?: string | null
  }