export type Paintings = {
  image_link?: string;
  canonical_story_id?: string;
  manuscript?: string;
  episode_keywords?: string[];
  painting_id?: number | null;
  painting_date: number;
  is_black_and_white: boolean;
  painting_available: boolean;
  type_of_story: string;
};
